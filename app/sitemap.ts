import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import { getBlogPosts, getCaseStudies } from "@/sanity/lib/editorial";

const staticPaths = [
  "",
  "/hakkimizda",
  "/hizmetler",
  "/iletisim",
  "/yayinlar",
  "/vaka-analizleri",
  "/gizlilik-politikasi",
  "/kullanim-sartlari",
  "/rehberler/baslangic",
  "/rehberler/ilk-sistem-plani",
  "/rehberler/surec-ve-baglam",
  "/rehberler/kapsam-ve-karar",
  "/rehberler/teslim-ve-sonuc",
  "/rehberler/entegrasyon-ozeti",
  "/rehberler/baglantilar",
  "/rehberler/ozel-is-akislari",
  "/rehberler/kurulum",
  "/rehberler/iyilestirme",
  "/rehberler/olcek-ve-performans",
  "/rehberler/araclar-ve-kullanim",
  "/yayinlar/buyuyen-isler-icin-olceklenen-sistemler",
  "/yayinlar/yapay-zekayi-gercek-urunlere-baglamak",
  "/yayinlar/ai-agent-ne-zaman-gerekir",
  "/yayinlar/tekliften-teslime-takip-akisi",
  "/yayinlar/manuel-isten-akilli-is-akisina",
  "/yayinlar/problemden-sisteme-ai-ne-zaman-ise-yarar",
  "/yayinlar/daginik-veriden-yonetilebilir-karara",
  "/yayinlar/iyi-cikti-icin-dogru-girdi-tasarimi",
  "/yayinlar/mevcut-araclari-bozmadan-entegrasyon",
  "/yayinlar/ai-ciktilari-neden-kullanilamaz-kalir",
  "/vaka-analizleri/tekliften-teslime-takip",
  "/vaka-analizleri/otomasyon-ve-entegrasyon",
  "/vaka-analizleri/ai-agent-sistemi",
  "/vaka-analizleri/operasyon-paneli",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, cases] = await Promise.all([getBlogPosts(), getCaseStudies()]);
  const entries = [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...servicePages.map((service) => ({ url: `${SITE_URL}/hizmetler/${service.slug}` })),
    ...posts.map((post) => ({ url: `${SITE_URL}/yayinlar/${post.slug}`, lastModified: post.publishedAt })),
    ...cases.map((item) => ({ url: `${SITE_URL}/vaka-analizleri/${item.slug}`, lastModified: item.publishedAt })),
  ];

  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
