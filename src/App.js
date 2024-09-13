
import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {actionURL,trendingUrl,originalsURL,horroURL,DocumURL} from './urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={trendingUrl} title="Trendings"/>
        <RowPost url={actionURL} title="Action" isSmall/>
        <RowPost url={originalsURL} title="MovieFlix Original"/>
        <RowPost url={horroURL} title="Horror"/>
        <RowPost url={DocumURL} title="Documentaries"/>

    </div>
  );
}

export default App;
