import React from 'react';
import {SocialIcon} from 'react-social-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='socialContainer'>
            <SocialIcon url='https://github.com/danielmruales/evas-bakery' className='socialIcon'/>
            <SocialIcon url='https://www.twitter.com/EvasBakery' className='socialIcon'/>
            <SocialIcon url='https://www.facebook.com/EvasBakerySLC' className='socialIcon'/>
            <SocialIcon url='https://www.instagram.com/EvasBakery' className='socialIcon'/>
            <SocialIcon url='https://www.yelp.com/biz/evas-bakery-salt-lake-city' className='socialIcon'/>
        </div>
    );
};

export default Footer;