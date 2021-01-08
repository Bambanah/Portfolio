import React from "react";

import Link from "next/link";
import styles from "../components/styles/home.module.scss";
import Separator from "./shared/Separator";

export default function About() {
  return (
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
  );
}
