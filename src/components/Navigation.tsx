import type { NavigationItem } from "@/data/siteContent";
import { ArrowUpRightIcon } from "./Icons";
import styles from "./Portfolio.module.css";

type NavigationProps = {
  items: readonly NavigationItem[];
  email: string;
};

export default function Navigation({ items, email }: NavigationProps) {
  return (
    <header className={styles.navShell}>
      <nav aria-label="Primary navigation" className={styles.navInner}>
        <a className={styles.brand} href="#top">
          <span aria-hidden="true" className={styles.brandMark}>
            SM
          </span>
          <span>Steven Morano</span>
        </a>

        <div className={styles.desktopNav}>
          {items.map((item) => (
            <a className={styles.navLink} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className={styles.navEmail} href={`mailto:${email}`}>
          <span>Email me</span>
          <span className={styles.navArrow}>
            <ArrowUpRightIcon />
          </span>
        </a>

        <div aria-label="Section index" className={styles.mobileIndex}>
          {items.map((item, index) => (
            <a aria-label={item.label} href={item.href} key={item.href}>
              0{index + 2}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
