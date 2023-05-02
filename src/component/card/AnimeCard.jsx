import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';
import { ThemeContext } from "../../lib/context/themeContext";

export function AnimeCard({media}){
    let theme = useContext(ThemeContext);

    return (

        <div className="flex flex-row text-whitetext-base m-3 w-auto"
        style={{backgroundColor: theme.headerbackgroundColor,
        color : theme.textcolor}}>

            <div className="flex flex-col items-center pl-2 m-auto gap-y-5 rounded-md bg-opacity-60">
                <CardImage src={media.coverImage.large}/>
                {/* <FavButton></FavButton> */}
            </div>

            <div className="flex flex-col items-start p-0 m-5 gap-y-2 rounded-md bg-opacity-60">
                <CardContent id={media.id}>{media.title.english}</CardContent>
                <CardRating rating={media.averageScore}></CardRating>
                <CardInfo episode={media.episodes}></CardInfo>
                <CardDuration duration={media.duration}></CardDuration>
                <FavButton id={media.id}></FavButton>
            </div>

        </div>
        

    )

}
{/*  */}
export function CardImage({...Attr}){
    return <img {...Attr} className="w-64 h-auto m-9"/>;
}

export function CardContent({id, children}){
    return <Link className="text-blue-400" to={`/My_Anime/${id}`}>{children}</Link>;
} 

export function CardInfo({episode}){
    return <text>Episode : {episode}</text>
}

export function FavButton ({id}){

    const [idList , setidList] = useState(() =>{
        let localStorageValue = localStorage.getItem("animeIDList");
        if(localStorageValue != null){
            return JSON.parse(localStorageValue)
        }
        else {
            return []
        }
    })

    var addToFavorite = () =>{
        let temp = []
        let listTemp = []
        if(localStorage.getItem("animeIDList") != null){
            listTemp = JSON.parse(localStorage.getItem("animeIDList"))
        }
        temp.push(...listTemp)
        temp.push(id)
        
        if(listTemp.includes(id)){
            // localStorage.setItem("animeIDList","")
            console.log(id)
        }
        else{
            setidList(temp)
            localStorage.setItem("animeIDList",JSON.stringify(temp))
        }
        
    }

    if(idList.includes(id)){
        return <text className="text-green-400 font-mono mt-5">Your Favorite Anime</text>
    }
    else{
        
        return <button className="bg-gray-700 border-solid- w-56 h-12 mt-5 border-blue-600 border-4 text-blue-400 bg-opacity-40"
         onClick={addToFavorite}>Add to Favorite</button>
    }

}

export function CardRating({rating}){
    return <text>Rating : {rating / 10}/10</text>
}

export function CardDuration({duration}){
    return <text>Duration : {duration} Minutes</text>
}


