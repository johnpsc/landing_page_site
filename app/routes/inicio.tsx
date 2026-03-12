import { useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import { obterComponenteSecao, usePlataforma } from "../components/inicio";
import RodapeSite from "../components/RodapeSite";
import { ConfigSite } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";
import { Cores, Fontes } from "../lib/theme";

export function meta() {
  return [{ title: `${ConfigSite.nome} - ${ConfigSite.slogan}` }, { name: "description", content: ConfigSite.descricao }];
}

export default function Home() {
  const [searchParams] = useSearchParams();
  const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
  const plataformaAtual = obterPlataformaDaSearchParams(searchParams);
  const cadastroUrl = adicionarDestinoNaUrl("/cadastro", destinoAtual, plataformaAtual);
  const planosUrl = adicionarDestinoNaUrl("/planos", destinoAtual, plataformaAtual);

  // Config resolvida pela plataforma ativa
  const plat = usePlataforma();

  return (
    <div style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
      <CabecalhoSite />

      {/* Renderiza seções na ordem definida pela plataforma/flavor, usando a variante configurada */}
      {plat.secoes.map((id) => {
        const Comp = obterComponenteSecao(id, plataformaAtual);
        return Comp ? <Comp key={id} cadastroUrl={cadastroUrl} planosUrl={planosUrl} /> : null;
      })}

      <RodapeSite />
    </div>
  );
}

