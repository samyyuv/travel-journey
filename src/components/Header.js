import React from 'react';

export default function Header() {
  return (
    <nav className='header'>
      <img className='logo' src={"/images/earth-globe.png"} />
      <h1 className='logo-name'>my travel journal</h1>
    </nav>
  );
}