/**
 * SecaoContato — variantes de layout para a seção de contato.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Variante        │ Descrição                                               │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ padrao          │ Duas colunas: info + formulário.                        │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ centralizado    │ Coluna única centralizada — formulário e links em       │
 * │                 │ sequência vertical.                                      │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ cartoes         │ Grid de cards grandes com ícones — WhatsApp, e-mail e   │
 * │                 │ formulário lado a lado. Visual mais visual e acessível. │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 */

import { ConfigSite } from "../../lib/config";
import { Cores } from "../../lib/theme";
import { ContatoForm } from "./compartilhados";
import { useTextosInicio } from "./PlataformaContext";
import type { SecaoProps } from "./tipos";

// ─── Variante: Padrão ────────────────────────────────────────────────────────

function ContatoPadrao(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="contato" className="py-24 px-6" style={{ backgroundColor: Cores.secundaria }}>
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Coluna esquerda — info */}
                    <div>
                        <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                            {textos.contato.selo}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: Cores.escura }}>
                            {textos.contato.titulo}
                        </h2>
                        <p className="text-lg leading-relaxed mb-10" style={{ color: Cores.textoSuave }}>
                            {textos.contato.subtitulo}
                        </p>

                        <div className="flex flex-col gap-5">
                            <a
                                href={ConfigSite.contato.urlWhatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-(--shadow-feature-card) transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: Cores.primariaClara }}>
                                    💬
                                </div>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: Cores.escura }}>{textos.contato.rotuloWhatsapp}</p>
                                    <p className="text-sm" style={{ color: Cores.textoSuave }}>{textos.contato.notaWhatsapp}</p>
                                </div>
                                <svg className="ml-auto w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href={`mailto:${ConfigSite.contato.email}`}
                                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-(--shadow-feature-card) transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: Cores.primariaClara }}>
                                    ✉️
                                </div>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: Cores.escura }}>{textos.contato.rotuloEmail}</p>
                                    <p className="text-sm" style={{ color: Cores.textoSuave }}>{ConfigSite.contato.email}</p>
                                </div>
                                <svg className="ml-auto w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Coluna direita — formulário */}
                    <ContatoForm />
                </div>
            </div>
        </section>
    );
}

// ─── Variante: Centralizado ──────────────────────────────────────────────────
// Tudo em coluna única central.

function ContatoCentralizado(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="contato" className="py-24 px-6" style={{ backgroundColor: Cores.secundaria }}>
            <div className="container mx-auto max-w-2xl text-center">
                <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                    {textos.contato.selo}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: Cores.escura }}>
                    {textos.contato.titulo}
                </h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: Cores.textoSuave }}>
                    {textos.contato.subtitulo}
                </p>

                {/* Links rápidos */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <a href={ConfigSite.contato.urlWhatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-bold text-sm hover:-translate-y-0.5 transition-all" style={{ backgroundColor: Cores.primaria }}>
                        💬 {textos.contato.rotuloWhatsapp}
                    </a>
                    <a href={`mailto:${ConfigSite.contato.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors" style={{ color: Cores.escura }}>
                        ✉️ {ConfigSite.contato.email}
                    </a>
                </div>

                <ContatoForm />
            </div>
        </section>
    );
}

// ─── Variante: Cartões ───────────────────────────────────────────────────────
// Grid de cards grandes para cada canal de contato + formulário.

function ContatoCartoes(_props: SecaoProps) {
    const textos = useTextosInicio();
    return (
        <section id="contato" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-14">
                    <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Cores.primaria }}>
                        {textos.contato.selo}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: Cores.escura }}>
                        {textos.contato.titulo}
                    </h2>
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: Cores.textoSuave }}>
                        {textos.contato.subtitulo}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {/* Card WhatsApp */}
                    <a
                        href={ConfigSite.contato.urlWhatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center text-center p-8 rounded-2xl border-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                        style={{ borderColor: Cores.primaria, backgroundColor: Cores.primariaClara }}
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform text-white" style={{ backgroundColor: Cores.primaria }}>
                            💬
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{textos.contato.rotuloWhatsapp}</h3>
                        <p className="text-sm" style={{ color: Cores.textoSuave }}>{textos.contato.notaWhatsapp}</p>
                    </a>

                    {/* Card E-mail */}
                    <a
                        href={`mailto:${ConfigSite.contato.email}`}
                        className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: Cores.primariaClara }}>
                            ✉️
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>{textos.contato.rotuloEmail}</h3>
                        <p className="text-sm" style={{ color: Cores.textoSuave }}>{ConfigSite.contato.email}</p>
                    </a>

                    {/* Card Horário */}
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ backgroundColor: Cores.primariaClara }}>
                            🕐
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: Cores.escura }}>Horário</h3>
                        <p className="text-sm" style={{ color: Cores.textoSuave }}>Seg–Sex {ConfigSite.suporte.horarios.diasUteis}</p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ContatoForm />
                </div>
            </div>
        </section>
    );
}

// ─── Registro ────────────────────────────────────────────────────────────────

export const contatoVariantes: Record<string, React.FC<SecaoProps>> = {
    padrao: ContatoPadrao,
    centralizado: ContatoCentralizado,
    cartoes: ContatoCartoes,
};
