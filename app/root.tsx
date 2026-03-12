import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { PlataformaProvider } from "./components/inicio/PlataformaContext";
import { obterPlataformaDaSearchParams } from "./lib/downloadDestino";
import { construirVariaveisCss, flavorAtivo } from "./lib/flavors/index";

const flavorCssVars = construirVariaveisCss(flavorAtivo);

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Injeta as CSS custom properties do flavor ativo — sobrescreve app.css :root */}
        <style dangerouslySetInnerHTML={{ __html: flavorCssVars }} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/** Rotas que exigem plataforma — se não há ?plataforma=, redireciona para "web" */
const ROTAS_EXIGEM_PLATAFORMA = new Set(["/cadastro", "/parceiros"]);

export default function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const plataformaAtual = obterPlataformaDaSearchParams(searchParams);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const destinoAtual = params.get("destino")?.trim();
    const plataforma = params.get("plataforma")?.trim();

    // ── Afiliado: captura ref da URL e persiste no localStorage ──
    const refUrl = params.get("ref")?.trim();
    if (refUrl) {
      try { localStorage.setItem("ref_afiliado", refUrl); } catch { }
    } else {
      try {
        const refSalvo = localStorage.getItem("ref_afiliado");
        if (refSalvo) params.set("ref", refSalvo);
      } catch { }
    }

    // Se tem destino mas não tem plataforma, define a plataforma a partir do destino
    if (destinoAtual && !plataforma) {
      params.set("plataforma", destinoAtual);
    }

    // ── Auto-plataforma: rotas que exigem plataforma recebem "web" se vazia ──
    if (!params.get("plataforma")?.trim() && ROTAS_EXIGEM_PLATAFORMA.has(location.pathname)) {
      params.set("plataforma", "web");
    }

    // Só redireciona se houve alguma alteração nos params
    if (params.toString() === searchParams.toString()) return;

    navigate(
      {
        pathname: location.pathname,
        search: `?${params.toString()}`,
        hash: "",
      },
      { replace: true },
    );
  }, [location.pathname, navigate, searchParams]);

  return (
    <PlataformaProvider plataforma={plataformaAtual}>
      <Outlet />
    </PlataformaProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
