import { faBookReader, faChildren } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='icon'>
                <FontAwesomeIcon icon={faChildren}></FontAwesomeIcon>
                </div>
            <h2 className='club-name'>KIDS-DAILY-ACTIVITIES-CLUB</h2>
        </div>
            <div>
                <h3>Distribution of kids daily activities time frame</h3>
            </div>
        </div>
        
    );
};

export default Header;