import React from 'react';
import './HexagonComb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faHome,
  faUmbrella,
  faBuilding,
  faUserShield,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const HexagonHoneycomb = () => {
  const icons = [
    faCar,
    faHome,
    faUmbrella,
    faBuilding,
    faUserShield,
    faBriefcase,
  ];

  return (
    <div className='hero-body'>
      <div className='hero-section'>
        <div className='hexagon-container'>
          <div className='row-1'>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faCar} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faHome} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faUmbrella} className='icon' />
            </div>
          </div>
          <div className='row-2'>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faBuilding} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faUserShield} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faBriefcase} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faCar} className='icon' />
            </div>
          </div>
          <div className='row-3'>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faHome} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faUmbrella} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faBuilding} className='icon' />
            </div>
          </div>
          <div className='row-4'>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faUserShield} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faBriefcase} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faCar} className='icon' />
            </div>
            <div className='hexagon'>
              <FontAwesomeIcon icon={faHome} className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonHoneycomb;
