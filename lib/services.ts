export type ServicePage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "ozel-yazilim-gelistirme",
    title: "Özel Yazılım Geliştirme",
    seoTitle: "Özel Yazılım Geliştirme Şirketi | WhiteGate",
    description: "İş akışınıza göre web, mobil, operasyon paneli ve kurum içi yazılım geliştirme hizmeti. Analizden canlı kullanıma tek sistem planı.",
    lead: "Hazır paketlerin işinize uymadığı noktada, operasyonunuza göre tasarlanan ve mevcut araçlarınıza bağlanan yazılımlar geliştiriyoruz.",
    image: "/gate-assets/whitegate-outputs/logistics.png",
    imageAlt: "WhiteGate özel yazılım ve operasyon paneli örneği",
    sections: [
      {
        heading: "Ne zaman özel yazılım gerekir?",
        paragraphs: [
          "Ekip aynı bilgiyi Excel, e-posta ve mesajlaşma arasında tekrar tekrar taşıyorsa; hazır yazılım kritik iş kurallarınızı karşılamıyorsa veya süreç görünür değilse özel yazılım anlamlı hale gelir.",
          "WhiteGate önce kullanıcıları, veri kaynaklarını, sorumluları ve kabul kriterlerini çıkarır. Teknoloji seçimi bu akış netleştikten sonra yapılır.",
        ],
      },
      {
        heading: "Neler geliştiriyoruz?",
        paragraphs: ["Tek bir ürün kalıbı satmıyoruz. İhtiyaca göre aşağıdaki parçaları aynı sistem içinde birleştiriyoruz."],
        bullets: [
          "Web ve mobil iş uygulamaları",
          "Operasyon, raporlama ve yönetim panelleri",
          "Müşteri, teklif, belge ve teslimat portalları",
          "Rol bazlı kurum içi araçlar",
          "API, CRM, ERP ve veri kaynağı entegrasyonları",
        ],
      },
      {
        heading: "Geliştirme süreci nasıl ilerler?",
        paragraphs: [
          "Keşifte mevcut akış ve darboğazlar çıkarılır. Ardından ilk sürümün kapsamı, ekranları, entegrasyonları ve başarı ölçütleri yazılı hale getirilir.",
          "Geliştirme gerçek kullanıcı senaryolarıyla test edilir; erişimler, dokümantasyon ve kabul edilen iş akışıyla birlikte canlı kullanıma alınır.",
        ],
      },
      {
        heading: "Teslim edilen şey yalnızca kod değildir",
        paragraphs: [
          "Çalışan yazılımla birlikte sahiplik, yetki, hata durumu, onay adımı ve bakım yolu da netleşir. Böylece sistem bir demo olarak kalmaz; günlük operasyonun parçası olur.",
        ],
      },
    ],
  },
  {
    slug: "yapay-zeka-otomasyonu",
    title: "Yapay Zeka Otomasyonu",
    seoTitle: "Yapay Zeka Otomasyonu ve Süreç Otomasyonu | WhiteGate",
    description: "Belge, e-posta, CRM, raporlama ve operasyon işlerini insan onaylı yapay zeka otomasyonlarına dönüştürün.",
    lead: "Tekrar eden bilgi toplama, kontrol, sınıflandırma ve bildirim adımlarını; insan onayı ve izlenebilir kayıtlarla çalışan otomasyonlara dönüştürüyoruz.",
    image: "/gate-assets/whitegate-outputs/documents.png",
    imageAlt: "Belge işleme ve yapay zeka otomasyonu akışı",
    sections: [
      {
        heading: "Yapay zeka otomasyonu neyi çözer?",
        paragraphs: [
          "Kuralı belli ama farklı belge ve metinlerle tekrar eden işler, klasik otomasyon ile yapay zekanın birlikte çalıştığı akışlara uygundur.",
          "Amaç insanı tamamen çıkarmak değil; tekrar eden hazırlığı azaltmak, kritik kararı doğru kişiye taşımak ve işlemin kaydını tutmaktır.",
        ],
      },
      {
        heading: "Uygulanabilecek iş akışları",
        paragraphs: ["Her otomasyon gerçek bir giriş, karar, çıktı ve istisna yoluna bağlanır."],
        bullets: [
          "Belge okuma, alan çıkarma ve kontrol",
          "E-posta sınıflandırma ve doğru sorumluya yönlendirme",
          "Teklif, form ve başvuru ön değerlendirmesi",
          "CRM kaydı, görev açma ve bildirim",
          "Rapor taslağı hazırlama ve insan onayına sunma",
        ],
      },
      {
        heading: "Kontrolsüz otomasyon kurmuyoruz",
        paragraphs: [
          "Yetki sınırları, düşük güven skoru, eksik veri ve istisna durumları baştan tanımlanır. Hassas adımlar insan onayı olmadan ilerlemez.",
          "Girdi, üretilen çıktı, onaylayan kişi ve son işlem kaydı izlenebilir tutulur.",
        ],
      },
      {
        heading: "Mevcut araçlarla çalışır",
        paragraphs: [
          "Otomasyon; kullandığınız e-posta, doküman, CRM, ERP, mesajlaşma ve veri tabanı sistemlerine API veya güvenli bağlantılar üzerinden eklenir. Gereksiz platform değişikliği yapılmaz.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-gelistirme",
    title: "AI Agent Geliştirme",
    seoTitle: "AI Agent Geliştirme ve Entegrasyon Hizmeti | WhiteGate",
    description: "Veri kaynakları, araçlar, yetkiler ve insan onayıyla çalışan kuruma özel AI agent sistemleri geliştirin.",
    lead: "Sadece yanıt üreten chatbotlar yerine, belirli bir görevi araçlar ve veri kaynaklarıyla yürüten kontrollü AI agent sistemleri geliştiriyoruz.",
    image: "/gate-assets/whitegate-outputs/approval.png",
    imageAlt: "İnsan onaylı AI agent görev akışı",
    sections: [
      {
        heading: "AI agent ne zaman doğru seçimdir?",
        paragraphs: [
          "İş yalnızca sabit kurallardan oluşmuyorsa; farklı kaynaklardan bağlam toplamak, seçenek üretmek ve bir sonraki aracı seçmek gerekiyorsa agent yaklaşımı değer yaratabilir.",
          "Tamamen deterministik bir akış yeterliyse agent eklemeyiz. Daha basit ve bakımı kolay otomasyonu tercih ederiz.",
        ],
      },
      {
        heading: "Agent hangi parçalarla çalışır?",
        paragraphs: ["Agentın erişimi ve hareket alanı açıkça sınırlandırılır."],
        bullets: [
          "Kurumsal doküman ve bilgi kaynakları",
          "CRM, ERP, e-posta ve görev sistemleri",
          "OpenAI, Claude veya Gemini gibi uygun model sağlayıcıları",
          "Araç çağrıları, rol bazlı yetkiler ve veri filtreleri",
          "İnsan onayı, hata kuyruğu ve işlem kayıtları",
        ],
      },
      {
        heading: "Güvenilirlik nasıl kurulur?",
        paragraphs: [
          "Agentın ne zaman cevap vermemesi, ne zaman açıklama istemesi ve hangi işlemleri onaya göndermesi gerektiği kabul testleriyle belirlenir.",
          "Model çıktısı tek başına işlem değildir. Kritik aksiyonlar doğrulama, yetki ve kayıt katmanlarından geçer.",
        ],
      },
      {
        heading: "Canlı kullanım ve iyileştirme",
        paragraphs: [
          "Başarı yalnızca örnek promptlarla değil; gerçek görev tamamlama, hata oranı, insan müdahalesi ve işlem süresi üzerinden izlenir. Yeni istisnalar kontrollü biçimde sisteme eklenir.",
        ],
      },
    ],
  },
  {
    slug: "sistem-entegrasyonu",
    title: "Sistem Entegrasyonu",
    seoTitle: "Sistem Entegrasyonu ve API Entegrasyonu | WhiteGate",
    description: "CRM, ERP, e-posta, doküman, mesajlaşma ve veri tabanlarını güvenli API entegrasyonlarıyla tek iş akışında bağlayın.",
    lead: "Birbirinden kopuk araçlar arasında manuel veri taşımayı azaltıyor; sistemleri güvenli, izlenebilir ve bakım yapılabilir bağlantılarla birleştiriyoruz.",
    image: "/gate-assets/whitegate-outputs/workflow.png",
    imageAlt: "CRM ERP ve API sistem entegrasyonu akışı",
    sections: [
      {
        heading: "Entegrasyon problemi nasıl görünür?",
        paragraphs: [
          "Aynı müşteri veya iş kaydı birden fazla yerde tutuluyor, ekipler CSV indirip yüklüyor ya da bir sistemdeki değişiklik diğerine geç ulaşabiliyorsa bağlantı katmanı eksiktir.",
          "İlk adım veri sahipliğini, ana kayıt kaynağını ve güncelleme yönünü belirlemektir.",
        ],
      },
      {
        heading: "Bağladığımız sistem türleri",
        paragraphs: ["Entegrasyon mevcut altyapıyı değiştirmeden, desteklenen bağlantı yöntemleriyle kurulur."],
        bullets: [
          "CRM ve ERP sistemleri",
          "E-posta, takvim ve mesajlaşma araçları",
          "Doküman, dosya ve form kaynakları",
          "REST API, webhook ve veri tabanları",
          "Raporlama, dashboard ve bildirim servisleri",
        ],
      },
      {
        heading: "Hata ve veri güvenliği",
        paragraphs: [
          "Kimlik doğrulama, erişim yetkisi, veri alanı eşleştirmesi ve hassas bilgi sınırları kurulumun parçasıdır.",
          "Başarısız işlemler kaybolmaz; tekrar deneme, hata kuyruğu, bildirim ve manuel müdahale yolu tanımlanır.",
        ],
      },
      {
        heading: "Canlıya alma yaklaşımı",
        paragraphs: [
          "Bağlantılar önce sınırlı veri ve gerçek senaryolarla doğrulanır. Veri tutarlılığı ve geri dönüş yolu görüldükten sonra kontrollü biçimde canlı trafiğe açılır.",
        ],
      },
    ],
  },
  {
    slug: "n8n-otomasyon",
    title: "n8n Otomasyon",
    seoTitle: "n8n Otomasyon ve Entegrasyon Hizmeti | WhiteGate",
    description: "n8n ile API, CRM, e-posta, belge ve yapay zeka iş akışları kurun. İnsan onaylı, izlenebilir ve bakım yapılabilir otomasyonlar.",
    lead: "n8n’i tek başına amaç değil, API’leri, veriyi ve onay adımlarını bağlayan bir orkestrasyon katmanı olarak kullanıyoruz.",
    image: "/gate-assets/whitegate-outputs/workflow.png",
    imageAlt: "n8n iş akışı otomasyonu ve entegrasyon örneği",
    sections: [
      {
        heading: "n8n hangi işler için uygundur?",
        paragraphs: [
          "Webhook, API, zamanlanmış görev, veri dönüştürme ve çok adımlı bildirim akışları n8n ile hızlı ve görünür biçimde kurulabilir.",
          "Akışın karmaşıklığı, güvenlik ihtiyacı ve işletim yükü değerlendirildikten sonra n8n Cloud, self-hosted kurulum veya kod tabanlı alternatif seçilir.",
        ],
      },
      {
        heading: "Kurulabilecek n8n akışları",
        paragraphs: ["Her akış sahiplik, hata yönetimi ve kabul kriterleriyle birlikte teslim edilir."],
        bullets: [
          "Form veya e-postadan CRM kaydı ve görev oluşturma",
          "Belge işleme ve AI destekli sınıflandırma",
          "Teklif, onay ve teslimat bildirimleri",
          "API verisini dönüştürme ve sistemler arasında aktarma",
          "Zamanlanmış rapor, uyarı ve kontrol akışları",
        ],
      },
      {
        heading: "Demo değil, işletilebilir otomasyon",
        paragraphs: [
          "Kimlik bilgileri güvenli değişkenlerde tutulur; erişimler sınırlandırılır. Hata durumları, tekrar deneme ve uyarı yolları akışın içine eklenir.",
          "Kritik kararlar insan onayına bağlanır ve her adımın girdisi ile sonucu izlenebilir olur.",
        ],
      },
      {
        heading: "Bakım ve devir",
        paragraphs: [
          "Akış adları, değişkenler, bağlantılar ve sorumluluklar okunabilir biçimde düzenlenir. Erişimler ve dokümantasyon teslim edilir; ihtiyaç varsa izleme ve iyileştirme devam eder.",
        ],
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
