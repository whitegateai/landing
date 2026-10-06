import { socialImage } from "@/lib/social-image";
export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== "en") return new Response("Not found\n", { status: 404 });
  return socialImage(true);
}
