import Header from "../component/Header";
import { GET_ANIME_DAT } from "../lib/getAnime";
import React, { useContext, useState } from 'react';
import { AnimeCard } from "../component/card/AnimeCard";
import { disableExperimentalFragmentVariables, useQuery } from "@apollo/client"
import { ThemeContext } from "../lib/context/themeContext";



export default function Home(){
    let theme = useContext(ThemeContext);

    const {loading, error, data} = useQuery(GET_ANIME_DAT, 
        {
        variables : {page : 1, perPage : 30}
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

            <div className=" grid grid-cols-2 gap-x-1 gap-y-8 p-5"
            style={{backgroundColor:theme.pagebackgroundColor}}>
            {data.Page.media.map((media) => {
                return <AnimeCard media={media}/>
                
            })}
            </div>

        </div>


    )
        
}