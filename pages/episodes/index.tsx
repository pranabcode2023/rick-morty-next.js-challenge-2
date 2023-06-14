import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_EPISODE = gql`
  query getEpisodes {
    episodes {
      results {
        episode
        created
        characters {
          image
          name
        }
      }
    }
  }
`;

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODE);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      
        {data.episodes.results.map((result: any) => (
          <option key={result.characters.name} value={result.characters.name}>
            {result.characters.name}
          </option>
        ))}
      
    </div>
  );
};

export default Episodes;

  
  
  
  
  


