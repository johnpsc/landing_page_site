import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/inicio.tsx"),
  { path: "planos", file: "routes/planos.tsx" },
  { path: "cadastro", file: "routes/cadastro.tsx" },
  { path: "baixar", file: "routes/baixar.tsx" },
] satisfies RouteConfig;
