import { Link } from 'react-router-dom'
import React from 'react'
import Bradcom from '../Bradcom/Main'
import First from '../Mencontact/First'
import Newsletter from '../Menpages/Menfaq/Newsletter'


const Main = () => {
  return (
    <>
        <main>
            <Bradcom title={"Contact"} subtitle={"Home"} newtitle={"Contact"}/>
            <First/>
            <Newsletter/>
        </main>
    </>
  )
}

export default Main