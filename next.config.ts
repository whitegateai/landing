import type { NextConfig } from "next";

const permanentRedirects = [
  ["/about", "/hakkimizda"],
  ["/docs", "/hizmetler"],
  ["/contact", "/iletisim"],
  ["/blog", "/yayinlar"],
  ["/careers", "/vaka-analizleri"],
  ["/privacy-policy", "/gizlilik-politikasi"],
  ["/terms-of-service", "/kullanim-sartlari"],
  ["/waitlist", "/sistem-plani"],
  ["/docs-posts/introduction", "/rehberler/baslangic"],
  ["/docs-posts/installation", "/rehberler/kurulum"],
  ["/docs-posts/first-workflow", "/rehberler/ilk-sistem-plani"],
  ["/docs-posts/inputs-context", "/rehberler/surec-ve-baglam"],
  ["/docs-posts/ai-processing", "/rehberler/kapsam-ve-karar"],
  ["/docs-posts/outputs-results", "/rehberler/teslim-ve-sonuc"],
  ["/docs-posts/api-overview", "/rehberler/entegrasyon-ozeti"],
  ["/docs-posts/sdks-usage", "/rehberler/araclar-ve-kullanim"],
  ["/docs-posts/connecting", "/rehberler/baglantilar"],
  ["/docs-posts/custom-workflows", "/rehberler/ozel-is-akislari"],
  ["/docs-posts/scaling-performance", "/rehberler/olcek-ve-performans"],
  ["/docs-posts/optimization", "/rehberler/iyilestirme"],
  ["/post/building-ai-workflows-that-scale", "/yayinlar/buyuyen-isler-icin-olceklenen-sistemler"],
  ["/post/connecting-ai-to-real-products", "/yayinlar/yapay-zekayi-gercek-urunlere-baglamak"],
  ["/post/designing-ai-systems-not-just-features", "/yayinlar/ai-agent-ne-zaman-gerekir"],
  ["/post/designing-ai-workflows-that-actually-work", "/yayinlar/tekliften-teslime-takip-akisi"],
  ["/post/from-manual-tasks-to-intelligent-workflows", "/yayinlar/manuel-isten-akilli-is-akisina"],
  ["/post/from-prompt-to-product-making-ai-useful", "/yayinlar/problemden-sisteme-ai-ne-zaman-ise-yarar"],
  ["/post/from-raw-data-to-actionable-results", "/yayinlar/daginik-veriden-yonetilebilir-karara"],
  ["/post/how-to-structure-inputs-for-better-outputs", "/yayinlar/iyi-cikti-icin-dogru-girdi-tasarimi"],
  ["/post/integrating-ai-without-breaking-your-stack", "/yayinlar/mevcut-araclari-bozmadan-entegrasyon"],
  ["/post/why-most-ai-outputs-are-hard-to-use", "/yayinlar/ai-ciktilari-neden-kullanilamaz-kalir"],
  ["/job-posts/ai-product-engineer", "/vaka-analizleri/tekliften-teslime-takip"],
  ["/job-posts/ai-workflow-engineer", "/vaka-analizleri/otomasyon-ve-entegrasyon"],
  ["/job-posts/machine-learning-engineer", "/vaka-analizleri/ai-agent-sistemi"],
  ["/job-posts/product-designer-ai-systems", "/vaka-analizleri/operasyon-paneli"],
] as const;

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      ...permanentRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/post/:slug", destination: "/yayinlar/:slug", permanent: true },
      { source: "/job-posts/:slug", destination: "/vaka-analizleri/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
