import Header from "../component/Header";
import { useParams } from "react-router-dom";
import { GET_ANIME_DETAIL } from "../lib/getAnimeDetail";
import { AnimeDetailCard } from "../component/card/AnimeDetailCard";
import { disableExperimentalFragmentVariables, useQuery } from "@apollo/client"

export default function Detail(){

    const {animeId} = useParams();
    console.log(animeId)

    const {loading, error, data} = useQuery(GET_ANIME_DETAIL, 
        {
        variables : {findId : animeId}
        })


    // If Fetch Tons data & Loading
    if(loading) return(

        <div>
            Load Data...
        </div>

    ) 
    // Failed to Fetch Data
    else if(error) return(

        <div>
            <Header/>
            Error : {error.message}
        </div>

    ) 
// Success Fetching Data show all Fetched Data
    else return (

        <body className=" bg-slate-900">
            
            <div>
                <div className=" bg-slate-900 p-5">
                {data.Page.media.map((media) => {
                    return <AnimeDetailCard media={media}/>
                })}
                </div>

            </div>

        </body>


    )

}