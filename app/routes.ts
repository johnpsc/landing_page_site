import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/inicio.tsx"),
  { path: "planos", file: "routes/planos.tsx" },
  { path: "cadastro", file: "routes/cadastro.tsx" },
  { path: "parceiros", file: "routes/parceiros.tsx" },
  { path: "baixar", file: "routes/baixar.tsx" },
  { path: "funcionalidades/:slug", file: "routes/funcionalidade.tsx" },
  { path: "segmentos/:slug", file: "routes/segmento.tsx" },
] satisfies RouteConfig;
