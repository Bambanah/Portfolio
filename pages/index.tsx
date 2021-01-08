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
        <Separator fillColor="#141414" bgColor="#1d1d1d" />

        <About />
        <Separator fillColor="#1d1d1d" bgColor="#141414" />

        <Projects />
        <Separator fillColor="#141414" bgColor="#1d1d1d" />

        <Skills className="darkbg" />
        <Separator fillColor="#1d1d1d" bgColor="#141414" />

        <Footer />
      </div>
    </Layout>
  );
}
