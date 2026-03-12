import { useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import { obterComponenteSecao, obterSecoesPlataforma, PlataformaProvider } from "../components/inicio";
import RodapeSite from "../components/RodapeSite";
import { ConfigSite, flavorAtivo } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";
import { Cores, Fontes } from "../lib/theme";

export function meta() {
  return [{ title: `${ConfigSite.name} - ${ConfigSite.slogan}` }, { name: "description", content: ConfigSite.description }];
}

export default function Home() {
  const [searchParams] = useSearchParams();
  const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
  const plataformaAtual = obterPlataformaDaSearchParams(searchParams);
  const cadastroUrl = adicionarDestinoNaUrl("/cadastro", destinoAtual, plataformaAtual);
  const planosUrl = adicionarDestinoNaUrl("/planos", destinoAtual, plataformaAtual);

  // Resolve seções e meta da plataforma ativa
  const secoes = obterSecoesPlataforma(plataformaAtual);
  const cfgPlataforma = flavorAtivo.configuracao.plataformasInicio?.[plataformaAtual];
  const tituloMeta = cfgPlataforma?.nome ?? ConfigSite.name;
  const sloganMeta = cfgPlataforma?.slogan ?? ConfigSite.slogan;

  return (
    <PlataformaProvider plataforma={plataformaAtual}>
      <div style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
        <CabecalhoSite />

        {/* Renderiza seções na ordem definida pela plataforma/flavor, usando a variante configurada */}
        {secoes.map((id) => {
          const Comp = obterComponenteSecao(id, plataformaAtual);
          return Comp ? <Comp key={id} cadastroUrl={cadastroUrl} planosUrl={planosUrl} /> : null;
        })}

        <RodapeSite />
      </div>
    </PlataformaProvider>
  );
}

