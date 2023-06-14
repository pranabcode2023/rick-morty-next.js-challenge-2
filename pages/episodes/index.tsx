import React from 'react';
import { gql, useQuery } from '@apollo/client';
import  { GET_EPISODE } from '../../graphql/queries';


// const GET_EPISODE = gql`
//   query getEpisodes {
//     episodes {
//       results {
//         episode
//         created
//         characters {
//           image
//           name
//         }
//       }
//     }
//   }
// `;

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


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const URL=process.env.NEXT_PUBLIC_DB_CONNECT as string;
//   const res = await fetch( URL);
//   const { info, results }: GetCharacterResults = await res.json();
//   return {
//       props: {
//         characters: results,
//         info,
//       }
//   }
// };

export default Episodes;

  
  
  
  
  


