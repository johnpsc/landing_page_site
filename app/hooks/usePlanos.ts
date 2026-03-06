import { useEffect, useRef, useState } from "react";
import type { FetchPlansResponse, ModeloTipoDeMensalidade } from "../models/ModeloPlanos";
import { ServicosPlanos } from "../services/ServicoPlanos";

/**
 * Encapsula toda a lógica de carregamento dos planos e seleção de
 * tipo de mensalidade. O componente de rota (`plans.tsx`) não precisa
 * conhecer nada de fetch ou estado de loading.
 */
export function usePlanos(mostrarPlanoCliente = false) {
  const [data, setData] = useState<FetchPlansResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tipodemensalidadeSelecionado, setTipodemensalidadeSelecionado] = useState<ModeloTipoDeMensalidade | null>(null);

  // Refs de scroll passados para os componentes filhos que precisam de scroll
  const plansScrollRef = useRef<HTMLDivElement>(null);
  const tabelaComparacaoRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let mounted = true;

    ServicosPlanos.listar()
      .then((res) => {
        if (!mounted) return;
        setData(res);

        if (res.tipodemensalidade?.length > 0) {
          // Se o modo "mostrar plano do cliente" estiver ativo e o cliente
          // já tiver uma mensalidade, pré-seleciona a dele.
          const idUsuario = "0"; // substituir por contexto real de auth
          if (mostrarPlanoCliente && idUsuario !== "0") {
            const tipoUsuario = res.tipodemensalidade.find((t) => t.id === idUsuario);
            setTipodemensalidadeSelecionado(tipoUsuario ?? res.tipodemensalidade[0]);
          } else {
            setTipodemensalidadeSelecionado(res.tipodemensalidade[0]);
          }
        }
      })
      .catch((e: unknown) => {
        if (!mounted) return;
        setError(String(e));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [mostrarPlanoCliente]);

  /** Rola o slider de planos para esquerda ou direita */
  function scrollPlanos(direction: "left" | "right") {
    if (plansScrollRef.current) {
      plansScrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  }

  return {
    loading,
    error,
    planos: data?.planospainel ?? [],
    tiposMensalidade: data?.tipodemensalidade ?? [],
    comparacao: data?.comparacaodemoduloscad ?? [],
    tipodemensalidadeSelecionado,
    setTipodemensalidadeSelecionado,
    plansScrollRef,
    tabelaComparacaoRef,
    scrollPlanos,
  };
}
