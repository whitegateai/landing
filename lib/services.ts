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
    title: "Şirketinize özel AI uygulaması",
    seoTitle: "Şirketinize Özel AI Uygulaması | WhiteGate AI",
    description: "Ekibinizin müşteri taleplerini, şirket bilgisini ve yapılacak işleri tek yerden yöneteceği özel AI uygulamaları geliştiriyoruz.",
    lead: "Müşteri talebi, şirket bilgisi ve yapılacak iş farklı yerlerde kalmasın. Ekibinizin açıp kullanacağı özel uygulamayı geliştiriyor; AI'ın hazırladığı bilgiyi doğru kişinin ekranına taşıyoruz.",
    image: "/gate-assets/service-custom-app-v5.webp",
    imageAlt: "İki kişinin bir iş uygulamasının adımlarını kâğıt üzerinde birlikte planlaması",
    sections: [
      {
        heading: "Ekibinizin ekranında ne değişir?",
        paragraphs: [
          "Müşteri talebi geldiğinde ekip tek ekranda talebin durumunu, ilgili belgeleri, sorumlu kişiyi ve AI'ın hazırladığı özeti görür. Yapılan işlem kayda geçer; sıradaki kişi işi kaldığı yerden alır.",
          "Uygulamayı ekibinizin kullandığı işe göre tasarlarız. Mevcut araçlar bu deneyimi sağlıyorsa onları uygulamaya bağlarız.",
        ],
      },
      {
        heading: "Neler geliştiriyoruz?",
        paragraphs: ["İlk uygulamanın kapsamını seçilen işe göre belirleriz. Gereken ekranları ve bağlantıları birlikte geliştiririz."],
        bullets: [
          "Web ve mobil iş uygulamaları",
          "Operasyon, raporlama ve yönetim panelleri",
          "Müşteri, teklif, belge ve teslimat portalları",
          "Rol bazlı kurum içi araçlar",
          "API, CRM, ERP ve veri kaynağı entegrasyonları",
        ],
      },
      {
        heading: "Planlıyoruz, geliştiriyoruz, kullanıma alıyoruz",
        paragraphs: [
          "İlk uygulama henüz net değilse ayrı kapsamı ve bedeli olan AI Dönüşüm Planı ile kullanıcıları, bilgi kaynaklarını ve öncelikleri belirleriz. İhtiyaç netse doğrudan uygulama kapsamı ve teklifini hazırlarız.",
          "Onaylanan uygulamayı gerçek iş örnekleriyle dener, gerekli erişimleri ve kullanım rehberini hazırlayıp ekiple günlük kullanıma alırız.",
        ],
      },
      {
        heading: "Teslimde ne olur?",
        paragraphs: [
          "Teklifte belirlenen çalışan uygulama, bağlantılar, kullanıcı erişimleri, gerçek iş denemeleri, kullanım rehberi ve ilk destek sınırı teslim edilir. Sonraki bakım ve yeni uygulamalar ayrıca kararlaştırılır.",
        ],
      },
    ],
  },
  {
    slug: "yapay-zeka-otomasyonu",
    title: "AI ile belge ve e-posta işleri",
    seoTitle: "Belge ve E-posta İşleri İçin AI Otomasyonu | WhiteGate AI",
    description: "AI gelen belge ve e-postayı okur, gerekli bilgiyi çıkarır, yanıtı veya sonraki işlemi hazırlar; belirlediğiniz adımları otomatik yürütür.",
    lead: "Her gelen belgeyi ve e-postayı baştan sona elle okumak zorunda kalmayın. AI gereken bilgiyi bulsun, işi sınıflandırsın ve uygun yanıtı ya da sonraki adımı hazırlasın.",
    image: "/gate-assets/service-ai-work-v2.webp",
    imageAlt: "İş belgelerinin arasından incelenmek üzere bir sayfanın seçilmesi",
    sections: [
      {
        heading: "Günlük işte nasıl görünür?",
        paragraphs: [
          "Yeni bir başvuru e-postası geldiğinde AI ekleri okur, eksik bilgiyi işaretler, kaydı açar ve ilgili kişiye kısa bir özet gönderir. Basit bir bilgi talebini belirlediğiniz sınırlar içinde doğrudan yanıtlayabilir.",
          "Hangi adımın otomatik ilerleyeceğini, hangi işlemde ekibin onay vereceğini işinize göre birlikte belirleriz.",
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
        heading: "Karar ve kontrol kimde kalır?",
        paragraphs: [
          "Uygulamanın hangi bilgiye erişeceği, hangi işlemde duracağı ve kimin onay vereceği kapsamda yazılır. Eksik veri ve istisnalar gerçek örneklerle denenir.",
          "Teklifte kararlaştırılan kayıtlarda girdi, hazırlanan çıktı ve onay adımı görülebilir olur.",
        ],
      },
      {
        heading: "Neyi teslim ederiz?",
        paragraphs: [
          "Seçilen işi yapan uygulamayı, gerekli ve mümkün olan araç bağlantılarını, hata ve insan onayı yolunu, gerçek görev denemelerini ve ekibin kullanım rehberini birlikte teslim ederiz. Bağlantılar mevcut araçların erişim koşullarına göre kapsamlandırılır.",
        ],
      },
    ],
  },
  {
    slug: "ai-agent-gelistirme",
    title: "Şirket bilginizle çalışan AI agent",
    seoTitle: "Şirket Bilginizle Çalışan AI Agent | WhiteGate AI",
    description: "Şirket belgelerinde ve bağlı araçlarda bilgi bulan, müşteri veya çalışan sorularını yanıtlayan, belirli görevleri yürüten AI agentlar geliştiriyoruz.",
    lead: "Ürün kataloğunuzda, şirket belgelerinizde ve kullandığınız araçlarda arama yapabilen bir AI agent geliştirelim. Soruyu anlasın, doğru kaynağı bulsun ve göreve göre yanıt versin ya da işi ekibinize taşısın.",
    image: "/gate-assets/service-knowledge-agent-v2.webp",
    imageAlt: "Bir ekip üyesinin kaynak belgeleri ve ürün bilgilerini karşılaştırması",
    sections: [
      {
        heading: "Agent ekibiniz için ne yapar?",
        paragraphs: [
          "Satış ekibi bir ürün sorusu aldığında agent onaylı katalogdan bilgiyi bulur, kaynağını gösterir ve yanıt hazırlar. İsterseniz yanıt önce çalışana gelir; uygun sorularda belirlediğiniz sınırlar içinde müşteriye doğrudan da gidebilir.",
          "İlk görev ve kullanıcısı belli değilse uygun uygulamayı planlarız. İhtiyaç netse doğrudan agentın kapsamını ve teklifini çıkarırız.",
        ],
      },
      {
        heading: "Agent hangi parçalarla çalışır?",
        paragraphs: ["Agentı tek bir somut görevle başlatırız. Görevin gerektirdiği bilgi kaynaklarını, araçları ve işlem sınırlarını bağlarız."],
        bullets: [
          "Kurumsal doküman ve bilgi kaynakları",
          "CRM, ERP, e-posta ve görev sistemleri",
          "Göreve ve veri koşullarına uygun model sağlayıcısı",
          "Araç çağrıları, rol bazlı yetkiler ve veri filtreleri",
          "İnsan onayı, hata kuyruğu ve işlem kayıtları",
        ],
      },
      {
        heading: "Ekip hangi kararı elinde tutar?",
        paragraphs: [
          "Agentın ne zaman cevap vermemesi, ne zaman açıklama istemesi ve hangi işlemleri onaya göndermesi gerektiği kabul testleriyle belirlenir.",
          "Sık gelen bilgi soruları otomatik yanıtlanabilir. Para, erişim veya hassas müşteri kararı içeren adımlarda onay ve kayıt sınırlarını ayrıca kurarız.",
        ],
      },
      {
        heading: "Canlı kullanıma nasıl geçer?",
        paragraphs: [
          "Gerçek görevlerle deneme yapar, çıktıyı ekiple kontrol eder, kullanım rehberini ve ilk destek sorumlusunu netleştiririz. Bakım ve yeni görevler gerekiyorsa ayrıca kapsamlandırılır.",
        ],
      },
    ],
  },
  {
    slug: "sistem-entegrasyonu",
    title: "Mevcut araçlarınıza AI bağlantısı",
    seoTitle: "Mevcut İş Araçlarına AI Entegrasyonu | WhiteGate AI",
    description: "AI uygulamanızı CRM, e-posta, belge ve diğer iş araçlarınıza bağlıyoruz; gereken bilgiyi alıp sonucu doğru yere taşımasını sağlıyoruz.",
    lead: "AI uygulaması şirketinizdeki işi görebilsin. CRM'deki kaydı, e-postadaki talebi ve dosyalardaki bilgiyi gerektiği yerde bir araya getirip sonucu kullandığınız araca taşıyalım.",
    image: "/gate-assets/service-connected-tools-v3.webp",
    imageAlt: "Çalışanın iş uygulaması, veri tablosu ve belgeyi birlikte incelemesi",
    sections: [
      {
        heading: "Bağlantı günlük işte neyi değiştirir?",
        paragraphs: [
          "Müşteri talebi CRM'de açıldığında ilgili belge, sorumlu kişi ve son yazışma uygulamada görünür. AI bunlardan özet hazırlar; sonuç doğru kayda veya ilgili kişiye gider.",
          "Önce hangi kaydın esas alınacağını, hangi bilginin aktarılacağını ve bağlantı kesilirse işin nasıl sürdürüleceğini belirleriz.",
        ],
      },
      {
        heading: "Bağladığımız sistem türleri",
        paragraphs: ["Bağlanacak araçları markalara göre değil, seçilen uygulamanın yapacağı işe göre belirleriz. Gerçek bağlantı imkânı ilgili araçların erişim ve API koşullarına bağlıdır."],
        bullets: [
          "CRM ve ERP sistemleri",
          "E-posta, takvim ve mesajlaşma araçları",
          "Doküman, dosya ve form kaynakları",
          "REST API, webhook ve veri tabanları",
          "Raporlama, dashboard ve bildirim servisleri",
        ],
      },
      {
        heading: "Erişim ve hata durumunda ne olur?",
        paragraphs: [
          "Kimlik doğrulama, erişim yetkisi, veri alanı eşleştirmesi ve hassas bilgi sınırları kurulumun parçasıdır.",
          "Başarısız aktarımın nasıl fark edileceği ve kimin müdahale edeceği teklifte tanımlanır. Gereken yerde tekrar deneme, uyarı ve manuel işlem yolu kurulur.",
        ],
      },
      {
        heading: "Teslim ve kullanıma alma",
        paragraphs: [
          "Bağlantıyı gerçek iş senaryolarıyla doğrular, veri alanlarını ve yetkileri kontrol ederiz. Kullanıcılar bağlantının ürettiği bilgiyi nerede göreceğini ve hata halinde kime başvuracağını bilir.",
        ],
      },
    ],
  },
  {
    slug: "n8n-otomasyon",
    title: "n8n Otomasyon",
    seoTitle: "n8n Otomasyon ve AI Bağlantıları | WhiteGate AI",
    description: "Uygun işlerde n8n ile AI uygulaması, e-posta, CRM ve belgeler arasında görev ve onay bağlantıları kuruyoruz.",
    lead: "Seçilen iş için uygunsa n8n ile AI uygulamasını mevcut araçlarınıza bağlarız. Bilgi bir yerden gelir, gerekli işlem hazırlanır, karar gereken noktada ekibiniz devreye girer.",
    image: "/gate-assets/whitegate-outputs/workflow.png",
    imageAlt: "n8n iş akışı otomasyonu ve entegrasyon örneği",
    sections: [
      {
        heading: "n8n ekibinize nasıl hizmet eder?",
        paragraphs: [
          "Örneğin bir form gönderildiğinde n8n kaydı ilgili araca taşır, AI'a özet hazırlatır ve sonucu kontrol edecek kişiye iletir. Çalışan onayladıktan sonra sonraki adım çalışır.",
          "n8n yalnızca uygun işlerde seçilir. Bağlantıların erişimi, veri koşulları ve bakım sorumluluğu teknoloji kararından önce değerlendirilir.",
        ],
      },
      {
        heading: "Kurulabilecek n8n akışları",
        paragraphs: ["Bunlar olası uygulamalardır; hangi işin kurulacağı kapsamda seçilir."],
        bullets: [
          "Form veya e-postadan CRM kaydı ve görev oluşturma",
          "Belge işleme ve AI destekli sınıflandırma",
          "Teklif, onay ve teslimat bildirimleri",
          "API verisini dönüştürme ve sistemler arasında aktarma",
          "Zamanlanmış rapor, uyarı ve kontrol akışları",
        ],
      },
      {
        heading: "Kontrol ve hata yolu",
        paragraphs: [
          "Erişim yetkileri, hata uyarıları ve tekrar deneme yolu seçilen işin gereğine göre kurulup gerçek örneklerle kontrol edilir.",
          "Kritik kararlarda insan onayı ve işlem kaydı kapsamda açıkça tanımlanır.",
        ],
      },
      {
        heading: "Ekibinize ne teslim edilir?",
        paragraphs: [
          "Onaylanan otomasyon, bağlantı ve yetki listesi, hata halinde izlenecek yol ve kullanım notları teslim edilir. İlk kullanımdaki destek sınırı teklifte yazılır; sürekli bakım gerekiyorsa ayrıca kararlaştırılır.",
        ],
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
