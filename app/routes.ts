import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/aboutUs_page.tsx"),
  route("subjects", "routes/subjects_page.tsx"),
] satisfies RouteConfig;
