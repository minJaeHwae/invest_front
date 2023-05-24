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
        <Link href="#properties">properties</Link>
        <Link href="#communities">communities</Link>
      </div>
      <Link href="/#invest" className='btn'>Get started</Link>
    </div>
  );
}

export default Header;