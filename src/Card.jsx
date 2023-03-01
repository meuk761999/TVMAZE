import React from 'react';
import Interface from './Interface';
import { Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './card.css';
import SummaryPage from './SummaryPage';

function Card(props)
{
    function arrayeleseper(cvalue,index)
    {
        
        return cvalue.concat(" ");
    }
    

 
    return(
        <>
        <Routes>
            {/* <Route path='/' element={<Interface/>}/> */}

            <Route path='/summary' element={ <SummaryPage name={props.sname} sc={props.score} sci={props.imgsrc} genre={props.genre.map(arrayeleseper)} lang={props.lang} type={props.type} schedule={props.schedule} summary={props.summary}></SummaryPage>} />
      
        <Route path='/' element={
             <div className="cards">
            <div className="card bgW">
                <img src={props.imgsrc} alt="CoverImage" className="coverImage" />
                <div className="cardInfo bgW btmBrdr">
                    <span className="cardCotegory bgW">Rating:{(props.score*10).toPrecision(3)}/10</span>
                    <h3 className="cardTitle bgW">{props.sname}</h3>
                    <Link to="http://localhost:3000/summary" target="_self"  >
                    <div className="buttonContainer bgW btmBrdr" > <button className="watchBtn">Summary</button></div>  
                    </Link>
                </div>
            </div>
        </div>
        }></Route>
       

        </Routes>
        
    </>
    );
}
 export default Card;