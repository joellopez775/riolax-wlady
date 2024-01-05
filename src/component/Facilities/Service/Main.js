import React from 'react'
import Bredcom from '../../Bradcom/Main'
import First from '../../Menservice/First';
import Luxury from '../../Menhome/Luxury'
import Book from '../../Menhome/Book';
import Testimonial from '../../Menhome/Testimonial';

const Main = () => {

  return (
    <>
        <main>
           <Bredcom title={"Service"} subtitle={"Home"} newtitle={"Service"} />
           <First/>
           <Luxury/>
           <Book/>
           <Testimonial/>
        </main>
    </>
  )
}

export default Main