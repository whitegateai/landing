import { GET as markdown } from "@/app/(default)/ai/markdown/[...path]/route";
export async function GET(request: Request, context: { params: Promise<{ locale: string; path: string[] }> }) {
  if ((await context.params).locale !== "en") return new Response("Not found\n", { status: 404 });
  return markdown(request, context);
}
