import React from 'react';

export default function Header(props) {
  let modifiedLocation = props.item.location
  modifiedLocation = modifiedLocation.toUpperCase().split("").join(" ")

  return (
    <div className='cards'>
      <img className='photo' src={`${props.item.imageUrl}`} />
      <div>
        <div className='maps'>
          <img className='icon' src={"/images/location.png"} />
          <p className='country'>{modifiedLocation}</p>
          <a className='link' href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='location'>{props.item.title}</h1>
        <h4 className='date'>{props.item.startDate} - {props.item.endDate}</h4>
        <p className='description'>{props.item.description}</p>
      </div>
    </div>
  );
}