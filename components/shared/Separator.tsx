import React from "react";
import Wave from "../wave/index";
import styles from "../styles/home.module.scss";

interface ISectionProps {
  className?: string;
  fillColor: string;
  bgColor: string;
}

export default function Seperator({ fillColor, bgColor }: ISectionProps) {
  return (
    <div className={styles.separator}>
      {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M0.00,49.98 C134.59,125.82 332.11,2.47 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg> */}
      <Wave
        fill={fillColor}
        background={bgColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
}
