import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { parseContactSubmission } from "@/sanity/lib/contactSubmission";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const submission = parseContactSubmission(body);
  if (!submission) return NextResponse.json({ error: "Form alanlarını kontrol edin." }, { status: 400 });
  if (submission.website) return NextResponse.json({ ok: true }, { status: 201 });

  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) return NextResponse.json({ error: "Form servisi yapılandırılmamış." }, { status: 503 });

  try {
    await createClient({ projectId, dataset, apiVersion, token, useCdn: false }).create({
      _type: "contactSubmission",
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      message: submission.message,
      status: "new",
      submittedAt: new Date().toISOString(),
      source: "whitegate.studio/contact",
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Başvuru kaydedilemedi." }, { status: 502 });
  }
}
