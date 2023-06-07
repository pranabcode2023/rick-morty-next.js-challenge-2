import Link from "next/link";
import styles from '../styles/Navbar.module.css'

function Layout({ children }: { children: React.ReactNode }) {
    return (
<div className={styles.Navbar} >
    <nav>
        <ul>
         <li>
           <Link href="/">Home</Link>
          </li>
         <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">blah blah </Link>
      </li>
    </ul>
        </nav>
        {children}
 </div>
);
};

export default Layout