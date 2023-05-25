import Header from './Header'
import Form from './Form'
import Listing from './Listing'
import { useState } from 'react'


export default function App(){

  const [search, setSearch] = useState("random");
  const [list, setList] = useState([]);
  const [pickedItem, setPickedItem] = useState(null);

  return(
    <>

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