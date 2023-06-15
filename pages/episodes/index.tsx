import React from "react";
import { gql, useQuery } from "@apollo/client";
// import { GET_EPISODE } from '../../graphql/queries';

const GET_EPISODE = gql`
  query getEpisodes {
    episodes {
      results {
        id
        episode
        created
        characters {
          id
          image
          name
        }
      }
    }
  }
`;

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODE);
  console.log("data", data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.episodes.results.map((result: any) => (
        <div key={result.id}>
          {result.characters.map((character) => {
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
  );
};

export default Episodes;
