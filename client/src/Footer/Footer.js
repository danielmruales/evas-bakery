import React from 'react';
import {SocialIcon} from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='socialContainer'>
            <SocialIcon url='https://github.com/danielmruales/evas-bakery' className='socialIcon' target="_blank norefer noopener"/>
            <SocialIcon url='https://www.twitter.com/EvasBakery' className='socialIcon' target="_blank norefer noopener"/>
            <SocialIcon url='https://www.facebook.com/EvasBakerySLC' className='socialIcon' target="_blank norefer noopener"/>
            <SocialIcon url='https://www.instagram.com/EvasBakery' className='socialIcon' target="_blank norefer noopener"/>
            <SocialIcon url='https://www.yelp.com/biz/evas-bakery-salt-lake-city' className='socialIcon' target="_blank norefer noopener"/>
        </div>
    );
};

export default Footer;