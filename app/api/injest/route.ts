import { injestWebPage } from "@/utils";
// import { getSitemapUrls } from "@/utils/bonus"

export async function GET() {
  // const urls = (await getSitemapUrls(
  //   "https://studio.tune.app/docs/sitemap.xml"
  // )) as any[];
  // for (let i = 0; i < urls.length; i++) {
  //   await injestWebPage(urls[i]);
  // }
  injestWebPage('https://studio.tune.app/docs/cookbook/supabase-rag');
  return new Response(
    JSON.stringify({
      message: 'Injested',
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}