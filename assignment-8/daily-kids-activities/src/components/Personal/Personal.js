import { faLocation, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Personal.css';


const Personal = () => {

   const [good, setGood] = useState([]);

    const addBreak = (good) =>{
        // console.log(e.target.value);
        }
    return (
        <div className='personal'>
                <div className='my-info'>
                    <div>
                        <img src="./IMG_6221.jpg" alt="" />
                    </div>
                    <div className='info-text'>
                        <h5>Kazi Tanvirul Islam</h5>
                        <p><FontAwesomeIcon icon={faLocationPinLock}></FontAwesomeIcon> Rajshahi, Bangladesh</p>
                    </div>
                </div>
                <div className='background'>
                   <div>
                        <p>Last Certification</p>
                        <p>Business Graduate</p>
                   </div>
                    <div>
                        <p>Profession (Full Time)</p>
                        <p>Treader</p>
                    </div>
                    <div>
                        <p>Profession (Part Time)</p>
                        <p> Amazon FBA</p>
                    </div>
                </div>
            <h5>Add A Break</h5>
            <button className='btn-break'>
                <p>10 m</p>
            </button>
            <button className='btn-break'>
                <p>15 m</p>
            </button>
            <button className='btn-break'>
                <p>20 m</p>
            </button>
            <button className='btn-break'>
                <p>25 m</p>
            </button>
            
        </div>
    );
};

export default Personal;