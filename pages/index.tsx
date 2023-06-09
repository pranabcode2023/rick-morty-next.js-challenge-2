// import { useState } from 'react';
// import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';
// import { Character, GetCharacterResults, Info } from '../types';
// // import imageLoader from '../imageLoader';



// const Home: NextPage<{ characters: Character[], info?: Info }> = ({ characters, info }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [charList, setCharList] = useState(characters);
//   const [paginationInfo, setPaginationInfo] = useState(info);

//   const handleNextPage = async () => {
//     if (paginationInfo && paginationInfo.next) {
//       const res = await fetch(paginationInfo.next);
//       const { results, info: nextInfo }: GetCharacterResults = await res.json();
//       setCurrentPage(prevPage => prevPage + 1);
//       setCharList(results);
//       setPaginationInfo(nextInfo);
//     }
//   };

//   const handlePrevPage = async () => {
//     if (paginationInfo && paginationInfo.prev) {
//       const res = await fetch(paginationInfo.prev);
//       const { results, info: prevInfo }: GetCharacterResults = await res.json();
//       setCurrentPage(prevPage => prevPage - 1);
//       setCharList(results);
//       setPaginationInfo(prevInfo);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.Header}>
//         <h1>Rick & Morty Next.js Challenge</h1>
//       </div>

//       <div className={styles.grid}>
//         {charList.map((character) => (
//           <div key={character.id} className={styles.card}>

//             <Image
//               // loader={imageLoader}
//               unoptimized
//               src={character.image}
//               alt={character.name}
//               width="200"
//               height="200"
//             />
//              <h3>{character.name}</h3>
//              <Link href={`/characters/${character.id}`}>
//              <button>see more</button>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className={styles.pagination}>
//         <button onClick={handlePrevPage} disabled={!paginationInfo?.prev}>
//           Previous
//         </button>
//         <button onClick={handleNextPage} disabled={!paginationInfo?.next}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// // export const getStaticProps: GetStaticProps = async (context) => {
// //   const res = await fetch('https://rickandmortyapi.com/api/character');
// //   const { info, results }: GetCharacterResults = await res.json();

// //   return {
// //     props: {
// //       characters: results,
// //       info,
// //     },
// //   };
// // };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch( "https://rickandmortyapi.com/api/character");
//   const { info, results }: GetCharacterResults = await res.json();
//   return {
//       props: {
//         characters: results,
//         info,
//       }
//   }
// };

// export default Home;



import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
  
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </div>
    
  )
}

export default Home