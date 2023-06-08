import { GetServerSideProps } from "next";
import imageLoader from "../../imageLoader";
import { Character } from "../../types";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../styles/Character.module.css'

//NOTE - *******[id]***   dynamic route 

function CharacterPage({ character }: { character: Character }) {
    
    const router = useRouter();
    console.log(router.query)
    
    return (
        <div className={styles.container}>
        <div className={styles.card}>
          <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width="200"
            height= "200"
            />
       
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        
          </div>
          
     </div>
    )
};

// CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
//     return <Layout>{page}</Layout>
// }



export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${context.query.id}`
    );
    const character = await res.json();
    return {
        props: {
            character
        }
    }
};



export default CharacterPage;


