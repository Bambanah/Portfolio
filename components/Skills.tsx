import React from "react";
import styles from "./styles/home.module.scss";

interface ISectionProps {
  className?: string;
}

export default function Skills({ className }: ISectionProps) {
  return (
    <div className={`${styles.section} ${styles.skills} ${styles[className]}`}>
      <h1>Skills go here</h1>
    </div>
  );
}
