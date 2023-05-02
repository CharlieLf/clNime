import { ThemeContext } from "../lib/context/themeContext";
import { useContext } from "react";

export default function Header(){
    let theme = useContext(ThemeContext);

    return(
        <div className="flex py-12 relative m-0" 
        style={{backgroundColor:theme.headerbackgroundColor,
        color:theme.textcolor}} >
            
            <div className="flex absolute top-8 left-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSav67To5aeozsRZuoFDEE6Mc4VYW-BU6L1sQ&usqp=CAU" 
                alt="Not Found" className="w-10 ml-12" />
            </div>

            <div className="flex top-8 right-8 absolute gap-10">
                <a href="/home">Home Page</a>
                <a href="/search">Search</a>
                <a href="/favorite">Favorite_Anime</a>
            </div>
        </div>
    )

}