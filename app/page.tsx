import client from "@/tina/__generated__/client";
import HomeView from "./home-view";

// Content is fetched from TinaCloud at build time; each Save in /admin commits
// to GitHub, which triggers a new Vercel build.
export const dynamic = "force-static";

export default async function Home() {
  const res = await client.queries.site({ relativePath: "home.json" });
  return <HomeView query={res.query} variables={res.variables} data={res.data} />;
}
