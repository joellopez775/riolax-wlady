import React from 'react'
import Bredcom from '../Bradcom/Main'
import First from '../Menpages/Menfaq/First'
import Newsletter from '../Menpages/Menfaq/Newsletter'
import Teem from '../Menpages/Menfaq/Teem'

const Main = () => {

  return (
    <>
        <main>
            <Bredcom title={"Faq"} subtitle={"Home"} newtitle={"Faq"}/>
            <First/>
            <Newsletter/>
            <Teem/>
        </main>
    </>
  )
}

export default Main