import { useState } from "react";
import { ConfigSite } from "../../lib/config";
import { Cores } from "../../lib/theme";
import { useTextosInicio } from "./PlataformaContext";

// ─── Card de funcionalidade reutilizável ─────────────────────────────────────

export function ModernFeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 group">
            <div
                className="w-14 h-14 text-2xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-(--color-primary) group-hover:text-white transition-all duration-300"
                style={{ backgroundColor: Cores.primariaClara }}
            >
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: Cores.escura }}>
                {title}
            </h3>
            <p style={{ color: Cores.textoSuave }} className="leading-relaxed">
                {desc}
            </p>
        </div>
    );
}

// ─── Formulário de contato reutilizável ──────────────────────────────────────

export function ContatoForm() {
    const textos = useTextosInicio();
    const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const msg = `Olá! Tenho interesse no ${ConfigSite.nome}.${form.mensagem ? `%0A%0AMensagem: ${encodeURIComponent(form.mensagem)}` : ""}%0A%0ANome: ${encodeURIComponent(form.nome)}%0AEmpresa: ${encodeURIComponent(form.empresa)}%0AE-mail: ${encodeURIComponent(form.email)}`;
        window.open(`${ConfigSite.contato.urlWhatsapp}?text=${msg}`, "_blank");
    }

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light) transition-all";

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: Cores.escura }}>Nome *</label>
                    <input required name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" className={inputClass} style={{ color: Cores.escura }} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: Cores.escura }}>Empresa</label>
                    <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome do restaurante" className={inputClass} style={{ color: Cores.escura }} />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: Cores.escura }}>E-mail *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" className={inputClass} style={{ color: Cores.escura }} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: Cores.escura }}>Telefone / WhatsApp</label>
                    <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" className={inputClass} style={{ color: Cores.escura }} />
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: Cores.escura }}>Como podemos ajudar?</label>
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre sua operação, dúvidas ou o que está buscando..." rows={4} className={`${inputClass} resize-none`} style={{ color: Cores.escura }} />
            </div>
            <button
                type="submit"
                className="mt-2 w-full py-3.5 rounded-xl font-bold text-sm text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: Cores.primaria }}
            >
                {textos.contato.textoBotaoFormulario}
            </button>
            <p className="text-xs text-center" style={{ color: Cores.textoSuave }}>{textos.contato.notaFormulario}</p>
        </form>
    );
}
