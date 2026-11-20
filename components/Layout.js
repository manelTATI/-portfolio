import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of a software developer: selected work, background, and contact." />
      </Head>
      <div className={styles.wrapper}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
