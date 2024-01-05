import React from 'react'
import Headerthree from '../Menhomethree/Headerthree';
import Sliderthree from '../Menhomethree/Sliderthree';
import Most from '../Menhome/Most';
import Explore from '../Menhome/Explore';
import Rooms from '../Menhome/Rooms';
import Luxury from '../Menhome/Luxury';
import Prices from '../Menhome/Prices';
import Newtest from '../Menhomethree/Newtest';
import Book from '../Menhome/Book';
import Take from '../Menhome/Take';
import Latest from '../Menhome/Latest';
import Brand from '../Menhome/Brand';

const Main = () => {

return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 pl-0 pr-0">
                   <Headerthree/>
                </div>
                <div className="col-xl-10 col-lg-9 pl-0 pr-0">
                    <Sliderthree/>
                    <Most/>
                    <Explore/>
                    <Rooms/>
                    <Luxury/>
                    <Prices/>
                    <Newtest/>
                    <Book/>
                    <Take/>
                    <Latest/>
                    <Brand/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main