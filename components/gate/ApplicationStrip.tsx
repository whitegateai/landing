import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
const applications = [
  { name: "Gmail", logo: "gmail-mark.png" },
  { name: "Google Drive", logo: "google-drive-mark.png" },
  { name: "Slack", logo: "slack-logo.svg" },
  { name: "Notion", logo: "notion.svg" },
  { name: "HubSpot", logo: "hubspot.svg" },
];

export function ApplicationStrip() {
  return (
    localizeTree(<section className="application-strip" aria-label="Uygulama katmanı">
      <div className="application-strip-viewport">
        <div className="application-strip-track">
          {[false, true].map((duplicate) => (
            <ul className="application-strip-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
              {applications.map(({ name, logo }) => (
                <li className="application-strip-item" key={name}>
                  <img src={`/gate-assets/brand-logos/${logo}`} alt="" loading="lazy" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>, getLocale())
  );
}
