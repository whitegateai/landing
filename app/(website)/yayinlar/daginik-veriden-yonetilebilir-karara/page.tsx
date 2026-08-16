import type { Metadata } from "next";
import { PostFromRawDataToActionableResultsPage } from "@/components/gate/generated/PostFromRawDataToActionableResultsPage";

export const metadata: Metadata = {
  title: "Dağınık Veriden Yönetilebilir Karara | WhiteGate",
  description: "Excel, form, mesaj ve sistem kayıtlarını yönetim paneli için anlamlı sinyallere çevirmek.",
};

export default function Page() {
  return <PostFromRawDataToActionableResultsPage />;
}
