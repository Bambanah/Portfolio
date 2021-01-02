import React from "react";
import styles from "../styles/home.module.scss";

interface ISectionProps {
  className?: string;
}

export default function Seperator({ className }: ISectionProps) {
  return (
    <div className={`${styles.separator} ${styles[className]}`}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M0.00,49.98 C134.59,125.82 332.11,2.47 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </div>
  );
}
