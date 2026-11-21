import client from "@/tina/__generated__/client";
import repoContent from "@/content/site/home.json";
import HomeView from "./home-view";

// Content is fetched from TinaCloud at build time; each Save in /admin commits
// to GitHub, which triggers a new Vercel build.
export const dynamic = "force-static";

export default async function Home() {
  const res = await client.queries.site({ relativePath: "home.json" });
  const site = res.data.site;

  // TinaCloud returns media as assets.tina.io URLs. The live site serves the
  // same files from /public, so use the repo paths (same commit) instead.
  const data = {
    ...res.data,
    site: {
      ...site,
      hero: site.hero && { ...site.hero, portrait: repoContent.hero.portrait },
      contact: site.contact && { ...site.contact, cvFile: repoContent.contact.cvFile },
    },
  };

  return <HomeView query={res.query} variables={res.variables} data={data} />;
}
