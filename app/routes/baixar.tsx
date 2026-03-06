import { useSearchParams } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import SecaoDownload from "../components/SecaoDownload";
import { SiteConfig, Texts } from "../lib/config";
import { Colors, Fonts, Shadows } from "../lib/theme";

/**
 * Página de downloads do sistema.
 *
 * - `/baixar?cadastro=1` → mostra o card "Cadastro realizado!" + downloads + passos
 * - `/baixar`            → mostra apenas os downloads + passos (link público de download)
 */
export default function PaginaBaixar() {
    const [searchParams] = useSearchParams();
    const cadastroRealizado = searchParams.get("cadastro") === "1";

    return (
        <div className="w-full min-h-screen flex flex-col" style={{ fontFamily: Fonts.main, backgroundColor: Colors.primaryLight }}>
            <CabecalhoSite />

            <div className="flex-1 pt-28 pb-16 px-4">
                <div className="max-w-3xl mx-auto">

                    {/* ── Card de confirmação (apenas quando vindo do cadastro) ── */}
                    {cadastroRealizado && (
                        <div className="bg-white rounded-3xl p-8 md:p-10 text-center mb-6" style={{ boxShadow: Shadows.dashboardImage }}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: Colors.primaryLight }}>
                                <svg width="36" height="36" fill="none" stroke={Colors.primary} strokeWidth="2.5" viewBox="0 0 24 24">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-extrabold mb-2" style={{ color: Colors.dark }}>{Texts.baixar.successTitle}</h2>
                            <p style={{ color: Colors.textMuted }}>
                                {Texts.baixar.successSubtitle}
                            </p>
                        </div>
                    )}

                    {/* ── Downloads + passos + requisitos ── */}
                    <SecaoDownload />

                    {/* ── Acessar online ── */}
                    <div className="mt-6 text-center">
                        <a
                            href={SiteConfig.links.webApp}
                            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                            style={{ color: Colors.primary }}
                        >
                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                            </svg>
                            {Texts.baixar.webAccessLabel} {new URL(SiteConfig.links.webApp).hostname}
                        </a>
                    </div>

                </div>
            </div>

            <RodapeSite />
        </div>
    );
}
