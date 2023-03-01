import React,{useState,useEffect} from 'react';
import './interface.css';
import Card from './Card';
import TopBar from './TopBar';





function Interface()
{
    function replicator(cvalue,index)
    {
        return(<Card key={index} imgsrc={cvalue.show.image.medium} score={cvalue.score} sname={cvalue.show.name} link={cvalue.link} genre={cvalue.show.genres} lang={cvalue.show.language} type={cvalue.show.type} schedule={cvalue.show.schedule.time} summary={cvalue.show.summary}/>);
    }

    const [tvmazedata , settvmazeData]=useState([]);
    const getmovies=async()=>
    {
  
      try
       {
        const res=await fetch('https://api.tvmaze.com/search/shows?q=all');
        const actualData= await res.json();
        // console.log(actualData);
        settvmazeData(actualData);

       } 
       catch (error)
       {
        console.log(error);
       }
    }
    useEffect(()=>
    {
      getmovies();
    },[]);



    return(
        <>
        <div className="barContainer">
            <TopBar></TopBar>
        </div>
        <div className="bodyContainer">

    
            
            <div className="cardContainer">
                {
                    tvmazedata.filter(function(cval,index,obj)
                    {
                        return cval.show.image!=null;
                    }).map(replicator)
                    
                }
            </div>
        </div>
        </>
    );

}

export default Interface;