import { getMachineDocument, machineMarkdown } from "@/lib/machine-content";

export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const document = await getMachineDocument((await params).path.join("/"));
  if (!document) return new Response("Not found\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  return new Response(machineMarkdown(document), { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=60", "X-Content-Type-Options": "nosniff" } });
}
