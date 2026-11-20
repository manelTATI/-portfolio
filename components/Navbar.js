import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>
        Manel Tati
      </Link>
      <nav aria-label="Main navigation">
        <ul className={styles.menu}>
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} ${active ? styles.active : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
