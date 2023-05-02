import { gql } from "@apollo/client";

export const GET_ANIME_DAT = gql`
  query getAllAnime($page:Int, $perPage:Int){
      Page(page:$page, perPage:$perPage){
        media(type:ANIME, sort:POPULARITY_DESC)
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