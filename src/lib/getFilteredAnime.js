import { gql } from "@apollo/client";

export const GET_FILTERED_ANIME = gql`
  query getAllAnime($typeGet:MediaType){
    Page{
      media(type:$typeGet, sort:POPULARITY_DESC)
      {
        id
        title{
        english
         }
        coverImage{
          large
        }
        episodes
        duration
        averageScore
      }
      
    }
  }
  `;