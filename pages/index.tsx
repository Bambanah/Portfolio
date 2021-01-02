import React from "react";

import Layout from "../components/Layout";
import styles from "../components/styles/home.module.scss";

import Hero from "../components/Hero";
import About from "../components/About";
import Separator from "../components/shared/Separator";
import Projects from "../components/Projects";
import Footer from "../components/nav/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Separator className="light-to-dark" />

        <About />
        <Separator className="dark-to-light" />

        <Projects />
        <Separator className="light-to-dark" />

        <Skills className="darkbg" />
        <Separator className="dark-to-light" />

        <Footer />
      </div>
    </Layout>
  );
}
