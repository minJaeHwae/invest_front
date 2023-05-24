import Link from 'next/link';
import styles from './Header.module.sass'

function Header({
  night = false
}) {
  return (
    <div 
      className={styles.header} 
      style={{
        color: night ? 'var(--prim)' : 'var(--seco)',
        textShadow: night ?  "var(--seco) 1px 1px 0" : ""
      }}
    >
      <div className={styles.nav}>
        <Link href="/">RECP</Link>
        <Link href="/">page 1</Link>
        <Link href="/">page 2</Link>
      </div>
      <button className='btn'>Get started</button>
    </div>
  );
}

export default Header;