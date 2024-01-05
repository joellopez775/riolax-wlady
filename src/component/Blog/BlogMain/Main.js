import { Link } from 'react-router-dom'
import React from 'react'
import Bredcom from '../../Bradcom/Main'
import First from '../../Menblog/First';

const Main = () => {
  return (
    <>
        <main>
            <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content search-popup">
                        <div className="text-center">
                            <Link to="#" className="close2" data-dismiss="modal" aria-label="Close">× close</Link>
                        </div>
                        <div className="row search-outer">
                            <div className="col-md-11"><input type="text" placeholder="Search for products..." /></div>
                            <div className="col-md-1 text-right"><Link to="#"><i className="fa fa-search" aria-hidden="true"></i></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Bredcom title={"Blog"} subtitle={"Home"} newtitle={"Blog"}/>
            <First/>
        </main>

    </>
  )
}

export default Main