import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	{ path: "plans", file: "routes/plans.tsx" },
	{ path: "signup", file: "routes/signup.tsx" },
] satisfies RouteConfig;
