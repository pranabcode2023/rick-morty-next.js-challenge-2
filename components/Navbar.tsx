import React, { useState } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform search logic here using the searchTerm state
    console.log("Searching for:", searchTerm);
    setSearchTerm("");
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.navbar} >
      <div className={styles.topnav}>
        <Link className={styles.active} href="/">Home</Link>
        <Link href="/characters">List of Characters</Link>
        <Link href="/episodes/episodes">Episodes</Link>
        <Link href="/favourite/favourite">Favourites</Link>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


