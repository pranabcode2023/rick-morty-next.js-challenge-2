// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.Navbar} >
          <div className= {styles.topnav}>
           <Link className={styles.active} href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/contact">Contact</Link>
        <div className={styles.searchContainer}>
          <form >
             <input type= "text" placeholder="Search.." name="search"></input>
             <button type="submit">Search</button>
          </form>
        </div>
  </div>
</div>
  );
};
export default Navbar;
