import type { ReactNode } from "react";
import styles from "./effects.module.css";

// Decorative effects are CSS-only. The server HTML remains readable by agents,
// and the reveal completes even when client scripts cannot load.
export default function MachineLayout({ children }: { children: ReactNode }) {
  return <>
    {children}
    <div className={styles.reveal} aria-hidden="true" data-machine-reveal="" />
    <div className={styles.scanlines} aria-hidden="true" />
  </>;
}
