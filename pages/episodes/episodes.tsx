import React, { useEffect } from 'react'


import { gql, useQuery } from '@apollo/client';

const GET_EPISODE = gql`
query getEpisode{
  characters{
      results{
          image
          name
          gender
          location{
              name
          }
          episode{
            name
            created
            characters{
                name
                image
            }
            
          }
      }
  }
}

`;

function Episodes({}) {
  // const { loading, error, data } = useQuery(GET_EPISODE);

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // return (
  //   <select name='character' onChange={ characters}>
  //     {data.dogs.map((Characters) => (
  //       <option key={characters.name} value={characters.results}>
  //         {characters.results}
  //       </option>
  //     ))}
  //   </select>
  // );
}

export default  Episodes;



