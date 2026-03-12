/**
 * SecaoAppGarcom — variantes de layout para a seção do App do Garçom.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Centralizado: badge + título + 2 cards de recurso +     │
 * │                 │ botões App Store / Google Play. (Original BigChef)      │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ compacto        │ Layout em faixa horizontal mais estreita, focando nos   │
 * │                 │ badges de download e uma descrição curta.               │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { ConfigSite } from "../../lib/config";
import { Cores } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────

function AppGarcomPadrao(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="app-garcom" className="py-24 px-6 relative" style={{ backgroundColor: Cores.secundaria }}>
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                        {textos.appGarcom.selo}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Cores.escura }}>
                        {textos.appGarcom.titulo} <span style={{ color: Cores.primaria }}>{textos.appGarcom.tituloDestaque}</span>
                    </h2>
                    <p className="text-xl mb-12 leading-relaxed" style={{ color: Cores.textoSuave }}>
                        {textos.appGarcom.subtitulo}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                            <div className="p-3 rounded-xl mr-5" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{textos.appGarcom.recursos[0].titulo}</h4>
                                <p className="text-gray-500">{textos.appGarcom.recursos[0].descricao}</p>
                            </div>
                        </div>
                        <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                            <div className="p-3 rounded-xl mr-5" style={{ backgroundColor: Cores.primariaClara, color: Cores.primaria }}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{textos.appGarcom.recursos[1].titulo}</h4>
                                <p className="text-gray-500">{textos.appGarcom.recursos[1].descricao}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href={ConfigSite.links.appStoreInfo}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-black text-white px-6 py-3 rounded-xl flex items-center shadow-lg hover:bg-gray-900 transition-colors"
                        >
                            <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 24 24">
                                <path d="M16.365 21.444c-1.127.876-2.316.945-3.528.058-.456-.376-.906-.723-1.428-.737-.533 0-1.026.38-1.503.743-1.2.909-2.35 1.01-3.618.06-2.585-2.028-5.328-7.393-4.108-11.233.72-2.148 2.274-3.575 4.542-3.666 1.055-.04 2.128.618 2.76.657.653.045 1.838-.707 3.093-.687 1.8.03 3.328.773 4.254 2.125-3.324 1.868-2.737 6.136.574 7.4-1.135 2.185-3.313 5.435-1.038 5.28M15.42 5.09c.07.03.11.08.15.11-1.02 1.48-2.61 2.27-4.17 1.96.11-1.44.83-2.81 2.11-3.63.85-.56 1.83-.93 2.82-.93-.05 1.01-.4 2.01-.91 2.49" />
                            </svg>
                            <div className="text-left">
                                <span className="block text-xs text-gray-300">Baixar na</span>
                                <span className="block text-lg font-bold leading-tight">App Store</span>
                            </div>
                        </a>

                        <a
                            href={ConfigSite.links.playStoreInfo}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-black text-white px-6 py-3 rounded-xl flex items-center shadow-lg hover:bg-gray-900 transition-colors"
                        >
                            <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 24 24">
                                <path d="M4 2.5v19l15-9.5L4 2.5zm1.5 2.365L16.29 12 5.5 19.135V4.865z" />
                            </svg>
                            <div className="text-left">
                                <span className="block text-xs text-gray-300">DISPONÍVEL NO</span>
                                <span className="block text-lg font-bold leading-tight">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Compacto ──────────────────────────────────────────────────────
// Faixa horizontal mais enxuta, focada nos badges de download.

function AppGarcomCompacto(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="app-garcom" className="py-16 px-6 relative" style={{ backgroundColor: Cores.secundaria }}>
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <span className="font-bold tracking-wider uppercase text-xs mb-3 block" style={{ color: Cores.primaria }}>
                            {textos.appGarcom.selo}
                        </span>
                        <h2 className="text-3xl font-bold mb-4 leading-tight" style={{ color: Cores.escura }}>
                            {textos.appGarcom.titulo} <span style={{ color: Cores.primaria }}>{textos.appGarcom.tituloDestaque}</span>
                        </h2>
                        <p className="text-base leading-relaxed" style={{ color: Cores.textoSuave }}>
                            {textos.appGarcom.subtitulo}
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col gap-3">
                        <a href={ConfigSite.links.appStoreInfo} target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center shadow-lg hover:bg-gray-900 transition-colors">
                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24"><path d="M16.365 21.444c-1.127.876-2.316.945-3.528.058-.456-.376-.906-.723-1.428-.737-.533 0-1.026.38-1.503.743-1.2.909-2.35 1.01-3.618.06-2.585-2.028-5.328-7.393-4.108-11.233.72-2.148 2.274-3.575 4.542-3.666 1.055-.04 2.128.618 2.76.657.653.045 1.838-.707 3.093-.687 1.8.03 3.328.773 4.254 2.125-3.324 1.868-2.737 6.136.574 7.4-1.135 2.185-3.313 5.435-1.038 5.28M15.42 5.09c.07.03.11.08.15.11-1.02 1.48-2.61 2.27-4.17 1.96.11-1.44.83-2.81 2.11-3.63.85-.56 1.83-.93 2.82-.93-.05 1.01-.4 2.01-.91 2.49" /></svg>
                            <div className="text-left"><span className="block text-[10px] text-gray-300">Baixar na</span><span className="block text-sm font-bold">App Store</span></div>
                        </a>
                        <a href={ConfigSite.links.playStoreInfo} target="_blank" rel="noreferrer" className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center shadow-lg hover:bg-gray-900 transition-colors">
                            <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24"><path d="M4 2.5v19l15-9.5L4 2.5zm1.5 2.365L16.29 12 5.5 19.135V4.865z" /></svg>
                            <div className="text-left"><span className="block text-[10px] text-gray-300">DISPONÍVEL NO</span><span className="block text-sm font-bold">Google Play</span></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Registro de variantes ───────────────────────────────────────────────────

export const appGarcomVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: AppGarcomPadrao,
    compacto: AppGarcomCompacto,
};
