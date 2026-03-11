import { useSearchParams } from "react-router";
import { ConfigSite, Secoes } from "../lib/config";
import { adicionarDestinoNaUrl, obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";

/**
 * Footer compartilhado entre todas as páginas do site.
 */
export default function RodapeSite() {
  const [searchParams] = useSearchParams();
  const destinoAtual = obterDestinoDownloadDaSearchParams(searchParams);
  const plataformaAtual = obterPlataformaDaSearchParams(searchParams);

  function withDestino(url: string) {
    return adicionarDestinoNaUrl(url, destinoAtual, plataformaAtual);
  }

  if (!Secoes.rodape) return null;

  return (
    <footer className="py-16 px-6 border-t border-gray-100 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <img src={ConfigSite.logo} alt={`${ConfigSite.name} Logo`} className="h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
          <p className="text-sm font-medium text-gray-400 max-w-xs leading-relaxed">
            2016 - 2026 © {ConfigSite.companyName}
            <br />
            Automatizando operações rentáveis na gastronomia.
          </p>
        </div>

        <div className="flex space-x-12 text-sm font-medium text-gray-500">
          <div className="flex flex-col space-y-3">
            <span className="text-gray-900 font-bold mb-1">Produto</span>
            {Secoes.tem('funcionalidades') && (
              <a href={withDestino("/#funcionalidades")} className="hover:text-(--color-primary) transition-colors">
                Recursos Inclusos
              </a>
            )}
            {Secoes.tem('appGarcom') && (
              <a href={withDestino("/#app-garcom")} className="hover:text-(--color-primary) transition-colors">
                App Comanda Digital
              </a>
            )}
            <a href={withDestino("/planos")} className="hover:text-(--color-primary) transition-colors">
              Ver Preços
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="text-gray-900 font-bold mb-1">Empresa</span>
            {Secoes.tem('contato') && (
              <a href={withDestino("/#contato")} className="hover:text-(--color-primary) transition-colors">
                Falar com Consultor
              </a>
            )}
            <a href={withDestino("/parceiros")} className="hover:text-(--color-primary) transition-colors">
              Seja Parceiro
            </a>
            <a href="#" className="hover:text-(--color-primary) transition-colors">
              Políticas Legais
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
