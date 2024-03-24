import Header from './Header'
import Form from './Form'
import Listing from './Listing'
import { useState } from 'react'

import TopPicks from './components/TopPicks'
import Home from './component/Home'



import './app.css'

export default function App(){

  const [search, setSearch] = useState("random");
  const [list, setList] = useState([]);
  const [pickedItem, setPickedItem] = useState(null);

  return(
    <>

      <Header />
      <Home />
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

      {(list.length === 0) && <TopPicks />}

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

    </>
  )

}