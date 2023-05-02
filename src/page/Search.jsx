import Header from "../component/Header";
import { disableExperimentalFragmentVariables, useQuery } from "@apollo/client"
import React, { useContext, useState, useEffect } from 'react';
import { FilteredCard } from "../component/card/FilteredCard";
import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { GET_FILTERED_ANIME } from "../lib/getFilteredAnime";


export default function Search(){


    let [findAnime, setFindAnime] = useState("")

    let onchangeHandle = (e) =>{
        setFindAnime(e.target.value)
        console.log(findAnime)
    }

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

        <div className="absolute min-h-screen bg-slate-900 min-w-full">
        <Header />
        <div className="flex flex-row min-w-full justify-center mt-16 text-lg font-mono">
            <form >
                <text className="text-white">Search :  
                <input type="search" className="bg-gray-400 h-9 w-96 px-6 rounded-lg"
                value={findAnime}
                onChange={onchangeHandle} /></text>
            </form>
        </div>

        <div className=" grid grid-cols-2 gap-x-1 gap-y-8 bg-slate-900 p-5">
            {data.Page.media.map((media) => {
                return <FilteredCard media={media} filterTitle={findAnime}/>
                
            })}
            </div>

        </div>


    )

}

        