import styles from "../components/styles/home.module.scss";

export default function Hero() {
  return (
    <div>
      <h1 className={styles.hero_text} data-shadow="hello!">
        hello!
      </h1>
    </div>
  );
}
