import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import { NotFoundPage } from "@/components/gate/generated/NotFoundPage";

export default function NotFound() {
  return localizeTree(<NotFoundPage />, getLocale());
}
