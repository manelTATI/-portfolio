import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ index, year, title, description, image, tags = [], demo, repo }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={`Preview of ${title}`}
          fill
          sizes="(max-width: 720px) 100vw, 480px"
          className={styles.img}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{String(index).padStart(2, '0')}</span>
          <span>{year}</span>
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.tags}>{tags.join(' / ')}</p>
        <div className={styles.links}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              View live
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
