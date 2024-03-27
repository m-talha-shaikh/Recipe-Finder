import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Home.css'

import Form from './Form'
import Category from './Category'
import Header from './Header'
import Listing from './Listing'
import TopPicks from './TopPicks'

export default function Home() {

	  const [search, setSearch] = useState("random");
	  const [list, setList] = useState([]);
	  const [pickedItem, setPickedItem] = useState(null);

	return (
		<div id="home-large">
			<div id="home">
         <Header />
          <Form 

                search={search}
                setToRandom={(e) => {
                  setSearch("random");
                }}      
                setToSearched={() => {
                  setSearch("searched");
                }}
                fillTheList={(recipes) => {
                  setList(recipes);
                }}

                />
          <Category />   
      </div>
{/*			{(list.length === 0) && <TopPicks />}*/}

      		<Listing

              list={list}
              search={search}
              setToRandom={(e) => {
                setSearch("random");
              }} 
              setToSearched={(e) => {
                setSearch("searched");
              }}
              setToPicked={(e) => {
                setSearch("picked");
              }}
              setToPickedItem={(e) =>{
                  setPickedItem(e);
              }}
              pickedItem={pickedItem}
               />
		</div>
	)

}
