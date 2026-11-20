import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Manel Tati</title>
      </Head>

      <section className={styles.hero}>
        <div>
          <span className="eyebrow">Student at ISTIC Borj Cedria, Tunisia</span>
          <h1 className={styles.headline}>
            Hi, I&apos;m Manel. I build <em>web and mobile</em> apps.
          </h1>
          <p className={styles.intro}>
            I&apos;m a student at ISTIC Borj Cedria. I mostly work with JavaScript (React,
            Next.js, Node.js), and I also write Java, PHP and Flutter. Lately I made a hospital
            app for a hackathon and a real-time chat app.
          </p>
          <div className={styles.ctas}>
            <Link href="/projects" className="button">
              See my projects
            </Link>
            <Link href="/contact" className="button button-ghost">
              Contact me
            </Link>
          </div>
        </div>

        <figure className={styles.photo}>
          <Image
            src="/images/profile.svg"
            alt="Manel Tati"
            width={600}
            height={750}
            priority
            sizes="(max-width: 720px) 60vw, 320px"
            className={styles.avatar}
          />
        </figure>
      </section>
    </>
  );
}
