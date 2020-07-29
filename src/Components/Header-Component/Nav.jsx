import React from 'react';
import './Nav.css';

const Header = () => {
    return (
        <div className='header'>
    
        <a className="Name" href="/">VISIONET SYSTEMS</a>
      
      
            <div className='options'>
                    <a className='option' href="/">
                    DataLookup
                    </a>
                    <a className='option' href="faq ">
                    FAQ
                   </a>
            </div>   
      </div>
    );
}

export default Header;