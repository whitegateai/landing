import type { ReactNode } from "react";
import styles from "./effects.module.css";
import { getLocale } from "@/lib/locale-server";

// Decorative effects are CSS-only. The server HTML remains readable by agents,
// and the reveal completes even when client scripts cannot load.
export default function MachineLayout({ children }: { children: ReactNode }) {
  return <>
    {children}
    <div className={styles.reveal} aria-hidden="true" data-machine-reveal="">
      <div className={styles.boot}>
        <div className={styles.bootLabel} lang="en">
          <span>WHITEGATE AI</span>
          <small>{getLocale() === "en" ? "INITIALIZING MACHINE VIEW" : "MAKİNE GÖRÜNÜMÜ AÇILIYOR"}</small>
          <i />
        </div>
      </div>
    </div>
    <div className={styles.scanlines} aria-hidden="true" />
    <div className={styles.shutdown} aria-hidden="true" data-machine-shutdown="">
      <div className={`${styles.boot} ${styles.shutdownScreen}`}>
        <div className={`${styles.bootLabel} ${styles.shutdownLabel}`}>
          <span lang="en">WHITEGATE AI</span>
          <small>{getLocale() === "en" ? "RETURNING TO HUMAN VIEW" : "İNSAN GÖRÜNÜMÜNE DÖNÜLÜYOR"}</small>
        </div>
      </div>
    </div>
  </>;
}
