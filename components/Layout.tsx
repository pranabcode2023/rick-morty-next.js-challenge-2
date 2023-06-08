// import Link from "next/link";
// import styles from '../styles/Navbar.module.css'

// function Layout({ children }: { children: React.ReactNode }) {
//     return (
// <div className={styles.Navbar} >
//     <nav>
//         <ul>
//          <li>
//            <Link href="/">Home</Link>
//           </li>
//          <li>
//         <Link href="/about">About Us</Link>
//       </li>
//       <li>
//         <Link href="/blog/hello-world">blah blah </Link>
//       </li>
//     </ul>
//   </nav>
//         {children}
//  </div>
// );
// };

// export default Layout



import Link from "next/link";
import styles from '../styles/Navbar.module.css'

function Layout({ children }: { children: React.ReactNode }) {
    return (
    <div className={styles.Navbar} >
          <div className= {styles.topnav}>
           <Link className={styles.active} href="/">Home</Link>
           <Link href="/characters">Characters</Link>
           <Link href="/contact">Contact</Link>
        <div className={styles.searchContainer}>
          <form >
             <input type= "text" placeholder="Search.." name="search"></input>
             <button type="submit">Search</button>
          </form>
        </div>
  </div>
    
    {children} 

</div>
    
);
};

export default Layout