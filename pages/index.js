import Head from "next/head";
import styles from "../styles/Home.module.css";
import ManualHeader from "../components/ManualHeader";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManualHeader />
      Hello!
    </div>
  );
}
