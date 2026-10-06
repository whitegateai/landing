import { GET as discovery } from "@/app/llms.txt/route";
export async function GET(request: Request, context: { params: Promise<{ locale: string }> }) {
  if ((await context.params).locale !== "en") return new Response("Not found\n", { status: 404 });
  return discovery(request);
}
