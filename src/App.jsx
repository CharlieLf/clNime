import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Search from './page/Search';
import Favorite from './page/Favorite';
import noPage from './page/noPage';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Detail from './page/Detail';
import { THEME, ThemeContext } from './lib/context/themeContext';
import React, { useState } from 'react';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App() {

  let [currTheme, setcurrTheme] = useState(THEME.dark);

  let changeTheme = ()=>{
    if(currTheme === THEME.light) setcurrTheme(THEME.dark);
    else setcurrTheme(THEME.light);
  }

  return (
    
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={currTheme}>
      {currTheme === THEME.light ? 
      <button onClick={changeTheme} 
      className='bg-transparent absolute ml-8 mt-24'>☀️☀️☀️</button> : 
      <button onClick={changeTheme} 
      className='bg-transparent absolute ml-8 mt-24'>🌚🌚🌚</button>}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/favorite" element={<Favorite/>}></Route>
            <Route path="/My_Anime/:animeId" element={<Detail />}></Route>
            <Route path="/*" element={noPage()}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
