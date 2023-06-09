import { useState } from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/CharacterList.module.css'
import { Character, GetCharacterResults, Info } from '../../types';
// import imageLoader from '../imageLoader';




const CharacterList: NextPage<{ characters: Character[], info?: Info }> = ({ characters, info }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [charList, setCharList] = useState(characters);
  const [paginationInfo, setPaginationInfo] = useState(info);

  const handleNextPage = async () => {
    if (paginationInfo && paginationInfo.next) {
      const res = await fetch(paginationInfo.next);
      const { results, info: nextInfo }: GetCharacterResults = await res.json();
      setCurrentPage(prevPage => prevPage + 1);
      setCharList(results);
      setPaginationInfo(nextInfo);
    }
  };

  const handlePrevPage = async () => {
    if (paginationInfo && paginationInfo.prev) {
      const res = await fetch(paginationInfo.prev);
      const { results, info: prevInfo }: GetCharacterResults = await res.json();
      setCurrentPage(prevPage => prevPage - 1);
      setCharList(results);
      setPaginationInfo(prevInfo);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <h1>Rick & Morty Next.js Challenge</h1>
      </div>

      <div className={styles.grid}>
        {charList.map((character) => (
          <div key={character.id} className={styles.card}>

            <Image
              // loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width="200"
              height="200"
            />
             <h3>{character.name}</h3>
             <Link href={`/characters/${character.id}`}>
             <button>see more</button>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={!paginationInfo?.prev}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!paginationInfo?.next}>
          Next
        </button>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch('https://rickandmortyapi.com/api/character');
//   const { info, results }: GetCharacterResults = await res.json();

//   return {
//     props: {
//       characters: results,
//       info,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const URL=process.env.NEXT_PUBLIC_DB_CONNECT as string;
  const res = await fetch( URL);
  const { info, results }: GetCharacterResults = await res.json();
  return {
      props: {
        characters: results,
        info,
      }
  }
};

export default CharacterList;