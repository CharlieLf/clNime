import Header from "../component/Header";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_ANIME } from "../lib/getFilteredAnime";
import { FavoriteCard } from "../component/card/FavoriteCard";

export default function Favorite(){

    const {loading, error, data} = useQuery(GET_FILTERED_ANIME, 
        {
            variables : {typeGet : "ANIME"}
        })

    // If Fetch Tons data & Loading
    if(loading) return(

        <div>
            <Header/>
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

        <div>
        <Header />

            <div className=" grid grid-cols-1 gap-x-1 gap-y-8 bg-slate-900 p-5">
            {data.Page.media.map((media) => {
                return <FavoriteCard media={media}/>
                
            })}
            </div>

        </div>


    )

}