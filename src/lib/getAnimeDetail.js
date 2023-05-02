import { gql } from "@apollo/client";

export const GET_ANIME_DETAIL = gql`
query getAllAnime( $findId:[Int]){
    Page{
      media(type:ANIME, sort:POPULARITY_DESC, id_in:$findId)
      {
        id
        title{
        english
         }
        coverImage{
          large
        }
        genres
        description
        startDate {
          year
          month
          day
        }
        duration
        episodes
        status
        isAdult
        averageScore
      }
      
    }
  }
  `;