import { SiteConfig, Texts } from "../../lib/config";
import { Colors } from "../../lib/theme";

/**
 * Banner hero da página de planos.
 * Responsabilidade única: exibir título, subline e badge de oferta.
 */
export default function PlansHero() {
  return (
    <div
      className="w-full py-16 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: Colors.dark }}
    >
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        style={{ backgroundColor: Colors.primary }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        style={{ backgroundColor: Colors.accent }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm mb-6 border" style={{ backgroundColor: `${Colors.primary}33`, color: `${Colors.primaryLight}CC`, borderColor: `${Colors.primary}4D` }}>
          <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: `${Colors.primary}99` }} />
          <span>{SiteConfig.trialDays} {Texts.planos.heroBadge}</span>
        </span>

        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {Texts.planos.heroTitle}
        </h1>
        <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: `${Colors.primaryLight}CC` }}>
          {Texts.planos.heroSubtitle.replace("{trialDays}", String(SiteConfig.trialDays))}
        </p>
      </div>
    </div>
  );
}
