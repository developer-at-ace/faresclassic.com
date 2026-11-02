import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import styles from "./information-page.module.css";

export default function InformationPage({ eyebrow, title, intro, children }) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <article className={styles.article}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p className={styles.intro}>{intro}</p>}
          <div className={styles.content}>{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
