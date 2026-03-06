import { useState } from "react";
import { Link } from "react-router";
import CabecalhoSite from "../components/CabecalhoSite";
import RodapeSite from "../components/RodapeSite";
import { SiteConfig, Texts } from "../lib/config";
import { Colors, Fonts, Images, Shadows } from "../lib/theme";

export function meta() {
  return [{ title: `${SiteConfig.name} - ${SiteConfig.slogan}` }, { name: "description", content: SiteConfig.description }];
}

export default function Home() {
  return (
    <div style={{ fontFamily: Fonts.main, backgroundColor: Colors.light, color: Colors.dark }} className="min-h-screen selection:bg-(--color-primary) selection:text-white">
      <CabecalhoSite />

      {/* Hero Section */}
      <section className="pt-40 pb-28 w-full px-4 md:px-8 flex flex-col items-center text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 md:left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ backgroundColor: Colors.primary }}></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"
          style={{ backgroundColor: Colors.accent, animationDelay: "2s" }}
        ></div>

        <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-medium text-sm mb-8 border border-orange-100 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-orange-600"></span>
          <span>{Texts.hero.badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight max-w-5xl tracking-tight" style={{ color: Colors.dark }}>
          {Texts.hero.titleBefore} <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-(--color-primary-dark)">{Texts.hero.titleHighlight}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed" style={{ color: Colors.textMuted }}>
          {Texts.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Link
            to="/cadastro"
            style={{ backgroundColor: Colors.primary, boxShadow: Shadows.heroBtnPrimary }}
            className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          >
            {Texts.hero.ctaPrimary.replace("{trialDays}", String(SiteConfig.trialDays))}
          </Link>
          <a
            href="#funcionalidades"
            style={{ color: Colors.dark }}
            className="px-8 py-4 rounded-xl font-bold text-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            {Texts.hero.ctaSecondary}
          </a>
        </div>

        <div className="w-full max-w-350 rounded-4xl overflow-hidden border border-gray-100 relative group" style={{ boxShadow: Shadows.dashboardImage }}>
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          <img src={Images.dashboardPreview} alt={`Dashboard ${SiteConfig.name}`} className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]" />
        </div>
      </section>

      {/* App para Garçons Showcase */}
      <section id="app-garcom" className="py-24 px-6 relative" style={{ backgroundColor: Colors.secondary }}>
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Colors.primary }}>
              {Texts.appGarcom.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Colors.dark }}>
              {Texts.appGarcom.title} <span style={{ color: Colors.primary }}>{Texts.appGarcom.titleHighlight}</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: Colors.textMuted }}>
              {Texts.appGarcom.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="bg-orange-100 p-3 rounded-xl mr-5 text-orange-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{Texts.appGarcom.features[0].title}</h4>
                  <p className="text-gray-500">{Texts.appGarcom.features[0].desc}</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <div className="bg-orange-100 p-3 rounded-xl mr-5 text-orange-600">
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
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{Texts.appGarcom.features[1].title}</h4>
                  <p className="text-gray-500">{Texts.appGarcom.features[1].desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={SiteConfig.links.appStoreInfo}
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
                href={SiteConfig.links.playStoreInfo}
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

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: Colors.dark }}>
              {Texts.funcionalidades.title}
            </h2>
            <p className="text-xl" style={{ color: Colors.textMuted }}>
              {Texts.funcionalidades.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Texts.funcionalidades.cards.map((card) => (
              <ModernFeatureCard key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section style={{ backgroundColor: Colors.dark }} className="py-20 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: Colors.primary, filter: "blur(100px)" }}></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: Colors.accent, filter: "blur(100px)" }}></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider uppercase text-sm mb-3 block" style={{ color: Colors.primary }}>
              {Texts.stats.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{Texts.stats.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {Texts.stats.items.map((stat) => (
              <div key={stat.label} className="rounded-2xl p-6 text-center border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: Colors.primary }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-3 gap-6">
            {Texts.stats.testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-7 border border-white/10 bg-white/5 flex flex-col justify-between">
                <div>
                  <svg className="w-7 h-7 mb-4 opacity-40" style={{ color: Colors.primary }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/80 leading-relaxed text-sm">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: Colors.primary }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Colors.primary }}>
              {Texts.suporte.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: Colors.dark }}>
              {Texts.suporte.title}
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: Colors.textMuted }}>
              {Texts.suporte.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">

            {Texts.suporte.cards.map((card) =>
              card.destaque ? (
                <div key={card.title} className="flex flex-col items-center text-center p-8 rounded-2xl border-2 shadow-md transition-all duration-300 group relative overflow-hidden" style={{ borderColor: Colors.primary, backgroundColor: Colors.primaryLight }}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: Colors.primary }} />
                  <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: Colors.primary }}>
                    {card.destaqueLabel}
                  </span>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl relative z-10 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: Colors.primary }}>
                    <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" />
                      <path d="M9 10l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: Colors.dark }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed relative z-10" style={{ color: Colors.textMuted }}>{card.desc}</p>
                </div>
              ) : (
                <div key={card.title} className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:bg-(--color-primary) group-hover:scale-110 transition-all duration-300 group-hover:text-white">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: Colors.dark }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: Colors.textMuted }}>{card.desc}</p>
                </div>
              )
            )}

          </div>

          {/* Horários */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-orange-100 overflow-hidden" style={{ backgroundColor: Colors.primaryLight }}>
            <div className="px-8 py-5 border-b border-orange-100 flex items-center gap-3">
              <span className="text-xl">🕐</span>
              <span className="font-bold text-lg" style={{ color: Colors.dark }}>{Texts.suporte.scheduleTitle}</span>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-orange-100">
              <div className="px-8 py-6 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Colors.primary }}>Segunda a sexta</span>
                <span className="text-2xl font-extrabold" style={{ color: Colors.dark }}>{SiteConfig.support.hours.weekdays}</span>
                <span className="text-sm" style={{ color: Colors.textMuted }}>{Texts.suporte.fullSupportNote}</span>
              </div>
              <div className="px-8 py-6 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Colors.primary }}>Sábado</span>
                <span className="text-2xl font-extrabold" style={{ color: Colors.dark }}>{SiteConfig.support.hours.saturday}</span>
                <span className="text-sm" style={{ color: Colors.textMuted }}>{Texts.suporte.fullSupportNote}</span>
              </div>
              <div className="px-8 py-6 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: Colors.textMuted }}>{Texts.suporte.sundayLabel}</span>
                <span className="text-2xl font-extrabold" style={{ color: Colors.dark }}>{Texts.suporte.sundayValue}</span>
                <span className="text-sm" style={{ color: Colors.textMuted }}>{Texts.suporte.sundayNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fale com a gente */}
      <section id="contato" className="py-24 px-6" style={{ backgroundColor: Colors.secondary }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Coluna esquerda — info */}
            <div>
              <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Colors.primary }}>
                {Texts.contato.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: Colors.dark }}>
                {Texts.contato.title}
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: Colors.textMuted }}>
                {Texts.contato.subtitle}
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href={SiteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-(--shadow-feature-card) transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: Colors.primaryLight }}>
                    💬
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: Colors.dark }}>{Texts.contato.whatsappLabel}</p>
                    <p className="text-sm" style={{ color: Colors.textMuted }}>{Texts.contato.whatsappNote}</p>
                  </div>
                  <svg className="ml-auto w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href={`mailto:${SiteConfig.contact.email}`}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-(--color-primary-light) hover:shadow-(--shadow-feature-card) transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: Colors.primaryLight }}>
                    ✉️
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: Colors.dark }}>{Texts.contato.emailLabel}</p>
                    <p className="text-sm" style={{ color: Colors.textMuted }}>{SiteConfig.contact.email}</p>
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

      {/* CTA Final */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: Colors.primaryLight }}>
        <div className="container mx-auto max-w-2xl">
          <span className="font-bold tracking-wider uppercase text-sm mb-4 block" style={{ color: Colors.primary }}>
            {Texts.ctaFinal.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight" style={{ color: Colors.dark }}>
            {Texts.ctaFinal.title}
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: Colors.textMuted }}>
            {Texts.ctaFinal.subtitle.replace("{trialDays}", String(SiteConfig.trialDays))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cadastro"
              style={{ backgroundColor: Colors.primary, boxShadow: Shadows.heroBtnPrimary }}
              className="text-white px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300"
            >
              {Texts.ctaFinal.ctaPrimary.replace("{trialDays}", String(SiteConfig.trialDays))}
            </Link>
            <Link to="/planos" style={{ color: Colors.dark }} className="px-10 py-4 rounded-xl font-bold text-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
              {Texts.ctaFinal.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <RodapeSite />
    </div>
  );
}

function ModernFeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-(--color-primary-light) shadow-sm hover:shadow-(--shadow-feature-card) transition-all duration-300 group">
      <div className="w-14 h-14 bg-orange-50 text-2xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-(--color-primary) group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: Colors.dark }}>
        {title}
      </h3>
      <p style={{ color: Colors.textMuted }} className="leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ContatoForm() {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Tenho interesse no ${SiteConfig.name}.${form.mensagem ? `%0A%0AMensagem: ${encodeURIComponent(form.mensagem)}` : ""}%0A%0ANome: ${encodeURIComponent(form.nome)}%0AEmpresa: ${encodeURIComponent(form.empresa)}%0AE-mail: ${encodeURIComponent(form.email)}`;
    window.open(`${SiteConfig.contact.whatsappUrl}?text=${msg}`, "_blank");
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-orange-100 transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: Colors.dark }}>Nome *</label>
          <input required name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" className={inputClass} style={{ color: Colors.dark }} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: Colors.dark }}>Empresa</label>
          <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome do restaurante" className={inputClass} style={{ color: Colors.dark }} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: Colors.dark }}>E-mail *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" className={inputClass} style={{ color: Colors.dark }} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: Colors.dark }}>Telefone / WhatsApp</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" className={inputClass} style={{ color: Colors.dark }} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold" style={{ color: Colors.dark }}>Como podemos ajudar?</label>
        <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre sua operação, dúvidas ou o que está buscando..." rows={4} className={`${inputClass} resize-none`} style={{ color: Colors.dark }} />
      </div>
      <button
        type="submit"
        className="mt-2 w-full py-3.5 rounded-xl font-bold text-sm text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: Colors.primary }}
      >
        {Texts.contato.formBtnText}
      </button>
      <p className="text-xs text-center" style={{ color: Colors.textMuted }}>{Texts.contato.formNote}</p>
    </form>
  );
}
