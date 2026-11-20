import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/Projects.module.css';

const projects = [
  {
    year: '2026',
    title: 'CliniLink',
    description:
      'Made for a hackathon. A web app for private hospitals: patients book appointments and see their medical folder, doctors write prescriptions and certificates as PDFs with a QR code that a pharmacy can check, and patients can message their doctor.',
    image: '/images/project-1.svg',
    tags: ['Next.js', 'React', 'Prisma', 'NextAuth', 'Docker'],
    repo: 'https://github.com/manelTATI/clinilink',
  },
  {
    year: '2026',
    title: 'iMessage clone',
    description:
      'A real-time chat app inspired by iMessage. Private and group chats, photos and videos, read receipts, typing indicator, and video calls between two browsers.',
    image: '/images/project-2.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    repo: 'https://github.com/manelTATI/IMessage',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Manel Tati</title>
      </Head>
      <section className={styles.header}>
        <span className="eyebrow">Projects</span>
        <h1 className={styles.title}>What I&apos;ve built</h1>
        <p className={styles.lead}>The code for both is on my GitHub.</p>
      </section>
      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i + 1} {...project} />
        ))}
      </div>
    </>
  );
}
