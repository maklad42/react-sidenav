import React, {useState} from 'react';

const SideNav = (props) => {

  return (
    <div className="sidenav" style={{ width: props.width, paddingTop: '20px' }}>
      <button onClick={props.closeNav}>X</button>
      <a href="#section">Music</a>
      <a href="#section">Books</a>
      <a href="#section">Games</a>
      <a href="#section">About</a>
    </div>
  );
};

export default SideNav;
