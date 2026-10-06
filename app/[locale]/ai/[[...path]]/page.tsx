import MachinePage, { generateMetadata as machineMetadata } from "@/app/(default)/ai/[[...path]]/page";
import { setLocale } from "@/lib/locale-server";
import { machineDocumentPaths } from "@/lib/machine-content";

type Props = { params: Promise<{ path?: string[] }> };
export const revalidate = 60;
export function generateStaticParams() { return machineDocumentPaths().map(path => ({ path: path.split("/") })); }
export async function generateMetadata(props: Props) { setLocale("en"); return machineMetadata(props); }
export default function EnglishMachinePage(props: Props) { setLocale("en"); return <MachinePage {...props} />; }
