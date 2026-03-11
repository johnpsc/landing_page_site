import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useAtualizacoes } from "~/hooks/useAtualizacoes";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import SecaoDownload from "../components/SecaoDownload";
import { ConfigSite, Textos } from "../lib/config";
import { montarUrlDownloadApi } from "../lib/downloadApi";
import { normalizarDestinoDownload } from "../lib/downloadDestino";
import { Cores, Fontes, Sombras } from "../lib/theme";

/**
 * Página única de downloads.
 *
 * - `/baixar?destino=web` → redireciona para o sistema web
 * - `/baixar?destino=desktop-web` → baixa instalador desktop web
 * - `/baixar?destino=desktop-local` → baixa instalador desktop local
 * - `/baixar?cadastro=1`      → mostra card de confirmação
 */
export default function PaginaBaixar() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const cadastroRealizado = searchParams.get("cadastro") === "1";
    const destinoManual = searchParams.get("destino")?.trim();
    const destinoOriginal = searchParams.get("plataforma")?.trim();
    const destinoBase = cadastroRealizado
        ? destinoOriginal
        : destinoManual || destinoOriginal;

    const destinoDownload = normalizarDestinoDownload(destinoBase);
    const destinoEhWeb = destinoDownload === "web";
    const destinoEhDesktopWeb = destinoDownload === "desktop-web";

    const {
        loading,
        error,
        atualizacoesWeb,
        atualizacoesLocal,
    } = useAtualizacoes();

    const downloadWebUrl = montarUrlDownloadApi(atualizacoesWeb.arquivo, "atualizacoes");
    const downloadWebVersao = atualizacoesWeb.versao?.trim() ? atualizacoesWeb.versao : undefined;

    const downloadLocalCompletoUrl = montarUrlDownloadApi(atualizacoesLocal.arquivo_instalador, "arquivo_instalador");
    const downloadLocalAtualizacaoUrl = montarUrlDownloadApi(atualizacoesLocal.arquivo, "atualizacoes_local");
    const downloadLocalUrl = downloadLocalCompletoUrl ?? downloadLocalAtualizacaoUrl;
    const downloadLocalVersao = atualizacoesLocal.versao?.trim() ? atualizacoesLocal.versao : undefined;
    const downloadLocalPrimaryLabel = downloadLocalCompletoUrl ? "Baixar instalador completo" : "Baixar atualização";
    const downloadLocalSecondaryUrl = downloadLocalCompletoUrl && downloadLocalAtualizacaoUrl ? downloadLocalAtualizacaoUrl : undefined;

    useEffect(() => {
        if (!cadastroRealizado || !destinoManual) return;

        const params = new URLSearchParams(searchParams);
        if (!params.get("plataforma")?.trim()) {
            params.set("plataforma", destinoManual);
        }
        params.delete("destino");

        navigate(
            {
                pathname: location.pathname,
                search: `?${params.toString()}`,
                hash: "",
            },
            { replace: true },
        );
    }, [cadastroRealizado, destinoManual, location.pathname, navigate, searchParams]);

    useEffect(() => {
        if (!destinoEhWeb) return;
        const timeoutMs = cadastroRealizado ? 5000 : 0;
        const timeoutId = window.setTimeout(() => {
            window.location.assign(ConfigSite.links.webApp);
        }, timeoutMs);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [cadastroRealizado, destinoEhWeb]);

    if (loading) {
        return (
            <div className="w-full min-h-screen flex flex-col selection:bg-(--color-primary) selection:text-white" style={{ fontFamily: Fontes.principal, backgroundColor: Cores.clara, color: Cores.escura }}>
                <CabecalhoSite />

                <div className="flex-1 flex flex-col items-center pt-28 pb-10 w-full">
                    <div className="w-full max-w-3xl px-6">
                        <div className="planos-skeleton h-52 w-full rounded-3xl" />
                    </div>
                    <div className="mt-10 w-full flex justify-center px-4">
                        <div className="inline-flex items-center rounded-full border p-1" style={{ borderColor: Cores.borda, backgroundColor: Cores.clara }}>
                            <div className="planos-skeleton h-12 w-36 rounded-full" />
                            <div className="planos-skeleton h-12 w-36 rounded-full" />
                        </div>
                    </div>
                    <div className="mt-10 w-full max-w-3xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="planos-skeleton h-96 rounded-3xl" />
                        <div className="planos-skeleton h-96 rounded-3xl" />
                    </div>
                </div>

                <RodapeSite />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="p-8 flex justify-center w-full min-h-screen items-center font-bold text-xl"
                style={{ color: Cores.primaria }}
            >
                {error}
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col" style={{ fontFamily: Fontes.principal, backgroundColor: Cores.primariaClara }}>
            <CabecalhoSite />

            <div className="flex-1 pt-28 pb-16 px-4">
                <div className="max-w-3xl mx-auto">

                    {cadastroRealizado && (
                        <div className="bg-white rounded-3xl p-8 md:p-10 text-center mb-6" style={{ boxShadow: Sombras.imagemPainel }}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: Cores.primariaClara }}>
                                <svg width="36" height="36" fill="none" stroke={Cores.primaria} strokeWidth="2.5" viewBox="0 0 24 24">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-extrabold mb-2" style={{ color: Cores.escura }}>{Textos.baixar.tituloSucesso}</h2>
                            <p style={{ color: Cores.textoSuave }}>
                                {destinoEhWeb
                                    ? "Sua conta foi criada com sucesso. Redirecionando você para o sistema web em 5 segundos..."
                                    : Textos.baixar.subtituloSucesso}
                            </p>
                        </div>
                    )}

                    {destinoEhWeb ? (
                        <div className="bg-white rounded-3xl p-8 md:p-10 text-center" style={{ boxShadow: Sombras.imagemPainel }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: Cores.primariaClara }}>
                                <svg width="26" height="26" fill="none" stroke={Cores.primaria} strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path d="M12 8v4l3 3" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-extrabold mb-2" style={{ color: Cores.escura }}>
                                {cadastroRealizado
                                    ? "Conta criada com sucesso! Redirecionando para o sistema web..."
                                    : "Redirecionando para o sistema web..."}
                            </h2>
                            <a href={ConfigSite.links.webApp} className="text-sm font-semibold hover:underline" style={{ color: Cores.primaria }}>
                                {ConfigSite.links.webApp}
                            </a>
                        </div>
                    ) : destinoEhDesktopWeb ? (
                        <SecaoDownload
                            tipo={["sistema_web", "app_garcom"]}
                            downloadUrl={downloadWebUrl}
                            downloadPrimaryLabel="Baixar instalador desktop web"
                            downloadPrimaryVersion={downloadWebVersao}
                        />
                    ) : (
                        <SecaoDownload
                            tipo={["sistema_desktop", "app_garcom"]}
                            downloadUrl={downloadLocalUrl}
                            downloadPrimaryLabel={downloadLocalPrimaryLabel}
                            downloadPrimaryVersion={downloadLocalVersao}
                            downloadSecondaryUrl={downloadLocalSecondaryUrl}
                            downloadSecondaryLabel="Baixar atualização"
                            downloadSecondaryVersion={downloadLocalVersao}
                        />
                    )}

                    <div className="mt-6 text-center">
                        <a
                            href={ConfigSite.links.webApp}
                            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                            style={{ color: Cores.primaria }}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                            </svg>
                            {Textos.baixar.rotuloAcessoWeb} {new URL(ConfigSite.links.webApp).hostname}
                        </a>
                    </div>

                </div>
            </div>

            <RodapeSite />
        </div>
    );
}
