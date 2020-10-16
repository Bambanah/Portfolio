import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";

import styles from "../components/styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.hero_text} data-shadow="hello!">
          hello!
        </h1>
        <div className={styles.blurb}>
          <p>My name's Lachie.</p>
          <p>I'm a recent CS graduate from QUT, with minors in UX and AI.</p>
          <p>
            Why don't you{" "}
            <Link href="/projects">
              <a>check out my projects?</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
