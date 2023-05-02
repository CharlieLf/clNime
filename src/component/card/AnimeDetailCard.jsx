import { useContext } from "react";
import { Link } from "react-router-dom";

export function AnimeDetailCard({media}){


    return (
        
        <div className="flex flex-col text-white bg-black text-lg m-0 p-5 gap-8 font-mono">

            <div className="flex flex-row gap-8">

                <div className="flex flex-col">
                    <CardImage src={media.coverImage.large}/>
                </div>
                    
                <div className="flex flex-col gap-3">
                    <CardContent>{media.title.english}</CardContent><br></br>
                    <CardRating rating={media.averageScore}></CardRating>
                    <CardInfo episode={media.episodes}></CardInfo>
                    <CardDuration duration={media.duration}></CardDuration>
                    <CardRelease date={media.startDate}></CardRelease>
                    <CardRestrict adult={media.isAdult}></CardRestrict>

                </div>

            </div>

            <text>{media.description}</text>

        </div>

    )


}

export function CardImage({...Attr}){
    return <img {...Attr} className="w-52"/>;
}

export function CardContent({children}){
    return <h2 className="text-3xl bold">{children}</h2>;
} 

export function CardGenre ({genre}){
    return (
        genre.map((genre) =>{
            return (<eachGenre oneGenre={genre}></eachGenre>)
        })
    )
}

export function eachGenre ({oneGenre}){
    return(
        <p>{oneGenre}</p>
    )
}

export function CardRelease({date}){
    return <text>Release Date : {date.day} - {date.month} - {date.year} (DD/MM/YYYY)</text>
}

export function CardRating({rating}){
    return <text>Rating : {rating / 10}/10</text>
}

export function CardDuration({duration}){
    return <text>Duration : {duration} Minutes</text>
}

export function CardInfo({episode}){
    return <text>Episode : {episode}</text>
}

export function CardRestrict({adult}){

    let ageRestrict;
    if(adult == true){
        ageRestrict = "18+"
    }
    else{
        ageRestrict = "13+"
    }

    return <text>Age : {ageRestrict}</text>

}
