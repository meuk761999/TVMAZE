import React from 'react';
import './summaryPage.css';


const SummaryPage = (props) => 
{
  return (
    <>
  <hider style={props.style}>
    <div className="summaryheadingImageContainer">
      <div className="summaryseriesdata">
        <div className="summaryheadingContainer"><h1 className='summarywebSeries'>{props.name}</h1></div>
        <div className="summarydata">
          <div className="summarytitlevaluecontainers"><div className="summarytitle">Score: </div><div className="summaryvalue">{props.sc}</div></div>
          <div className="summarytitlevaluecontainers"><div className="summarytitle">Genre:</div><div className="summaryvalue">{props.genre}</div></div>
          <div className="summarytitlevaluecontainers"><div className="summarytitle">Language:</div><div className="summaryvalue">{props.lang}</div></div>
          <div className="summarytitlevaluecontainers"><div className="summarytitle">Type:</div><div className="summaryvalue">{props.type}</div></div>
          <div className="summarytitlevaluecontainers"><div className="summarytitle">Schedule</div><div className="summaryvalue">{props.schedule}</div></div>
        </div>  
      </div>
      <div className='summaryimgContainer'><img className='summarywebseriesimg' src={props.sci} alt="Cover Image" /></div>
    </div>

    <div className="summarycontainer">
      <h2 className=''>Summary</h2>
      <div className="summarypara">
      {props.summary}
      </div>
    </div>
  </hider>
    </>
  )
}

export default SummaryPage