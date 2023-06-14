import { gql } from "@apollo/client";

export const GET_EPISODE = gql`
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