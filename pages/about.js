import Head from 'next/head';
import styles from '@/styles/About.module.css';

const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'PHP', 'Dart'] },
  { group: 'Web', items: ['React', 'Next.js', 'Node.js'] },
  { group: 'Mobile', items: ['Flutter'] },
  { group: 'Tools', items: ['Docker'] },
];

const timeline = [
  {
    period: 'Now',
    title: 'Student',
    place: 'ISTIC Borj Cedria',
    detail: 'Institut Supérieur des Technologies de l’Information et de la Communication.',
  },
  {
    period: '2026',
    title: 'CliniLink',
    place: 'Hackathon',
    detail: 'Built a web app for private hospitals: appointments, prescriptions with QR codes, messaging.',
  },
  {
    period: 'May 2024',
    title: 'Internship, end-of-year project (PFA)',
    place: 'OpusLab, startup',
    detail: 'Did my end-of-year project (projet de fin d’année) inside the OpusLab team.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About - Manel Tati</title>
      </Head>

      <section className={`section ${styles.intro}`}>
        <span className="eyebrow">About</span>
        <div className={styles.introGrid}>
          <h1 className={styles.title}>About me</h1>
          <div className={styles.bio}>
            <p>
              I&apos;m Manel, a student at ISTIC Borj Cedria in Tunisia. I like building full
              apps, from the database to the screen.
            </p>
            <p>
              Most of my projects use React and Node.js. At school I also work with Java, PHP,
              Flutter and Docker.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Skills</span>
        <dl className={styles.skills}>
          {skills.map(({ group, items }) => (
            <div key={group} className={styles.skillRow}>
              <dt>{group}</dt>
              <dd>{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <span className="eyebrow">Background</span>
        <ol className={styles.timeline}>
          {timeline.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3 className={styles.role}>{item.title}</h3>
                <p className={styles.place}>{item.place}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
