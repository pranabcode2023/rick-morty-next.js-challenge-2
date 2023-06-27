import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_EPISODE } from "../../graphql/queries";
import styles from "../../styles/Episodes.module.css";

// const GET_EPISODE = gql`
//   query getEpisodes {
//     episodes {
//       results {
//         id
//         episode
//         created
//         characters {
//           id
//           image
//           name
//         }
//       }
//     }
//   }
// `;

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODE);
  console.log("data", data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      <h1>Episodes</h1>
      <div className={styles.grid}>
        {data.episodes.results.map((result: any) => (
          <div key={result.id}>
            {result.characters.map((character: any) => {
              return (
                <div key={character.id}>
                  <p>{result.created}</p>
                  <p>{character.name}</p>
                  <img src={character.image} alt={character.name}></img>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
