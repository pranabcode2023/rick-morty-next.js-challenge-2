import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import { GET_EPISODE } from '../../graphql/queries';


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
          <div key={result.characters.name}>
            <p>
            {result.characters.name}
            </p>
           
          </div>
        ))}
      
    </div>
  );
};


export default Episodes;

  
  
  
  
  


