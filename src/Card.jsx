import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <div>
            <div className="Container-fluid">
        <div className="row">
            
                <div className="col-10 gy-3 col-md-4 mx-auto">

                    <div className="card">
                      <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="./about" className="btn btn-primary">Go somewhere</NavLink >
                        </div>
                    </div>

                </div>
        </div>
        </div>
        </div>
    )
}

export default Card;
