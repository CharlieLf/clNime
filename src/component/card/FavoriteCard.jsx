import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';
import { ThemeContext } from "../../lib/context/themeContext";
import { useContext } from "react";

export function FavoriteCard({media}){
    let theme = useContext(ThemeContext);
    let check;

    var searched = JSON.parse(localStorage.getItem("animeIDList"))
    let isTrue = searched.includes(media.id)

    if(isTrue){
        return (

            <div className="flex flex-row text-whitetext-base m-3 w-auto"
            style={{backgroundColor: theme.headerbackgroundColor,
            color : theme.textcolor}}>
    
                <div className="flex flex-col items-center pl-2 m-auto gap-y-5 rounded-md bg-opacity-60">
                    <CardImage src={media.coverImage.large}/>
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
    return

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

    var deleteFromFavorite = () =>{
        let temp = []
        let listTemp = JSON.parse(localStorage.getItem("animeIDList"))
        temp.push(...listTemp)
        let filteredPeople = temp.filter((ids) => {
            return ids !== id;
        });

        if(listTemp.includes(id)){
            // localStorage.setItem("animeIDList","")
            setidList(filteredPeople)
            localStorage.setItem("animeIDList",JSON.stringify(filteredPeople))
            window.location.reload(false)
            
        }
        else{
            console.log(id)
        }
        
    }

    return <button className="bg-gray-700 border-solid- w-56 h-12 mt-5 border-red-800 border-4 text-red-400 bg-opacity-40"
     onClick={deleteFromFavorite}>Delete From List</button>
}

export function CardRating({rating}){
    return <text>Rating : {rating / 10}/10</text>
}

export function CardDuration({duration}){
    return <text>Duration : {duration} Minutes</text>
}


