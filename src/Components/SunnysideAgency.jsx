import React from "react";
import "../css/SunnySideAgency.css";
import Hamburger from '../img/agency/icon-hamburger.svg';
import Orange from '../img/agency/mobile/image-header.jpg';
import OrangeDsk from '../img/agency/desktop/image-header.jpg';
import Arrow from '../img/agency/icon-arrow-down.svg';
import Egg from '../img/agency/mobile/image-transform.jpg';
import Wine from '../img/agency/mobile/image-stand-out.jpg';
import Cherry from '../img/agency/mobile/image-graphic-design.jpg';
import Orange2 from '../img/agency/mobile/image-photography.jpg';
import FB from '../img/agency/icon-facebook.svg';
import Insta from '../img/agency/icon-instagram.svg';
import Pin from '../img/agency/icon-pinterest.svg';
import Twi from '../img/agency/icon-twitter.svg';

const SunnySideAgency = () => {
    return (
        <div className='sunny-side-body'>
            <div className="title-bar">
                <label className='title-heading'>sunnyside</label>
                {/* <img src={Hamburger} alt='menu' className='menu-icon' /> */}
            </div>
            <div className='body-header'>
                <div className='body-header-title'>WE ARE CREATIVES</div>
                <div>
                    <img className='body-image-arrow' alt='arrow' src={Arrow} />
                    
                    <picture>
                        <source media="(min-width: 900px)" srcset={OrangeDsk} />
                        <img src={Orange} alt="Orange" />
                    </picture>

                </div>
            </div>
            <div className='card-container'>
                <div className='card-first'>
                    <div className='card-title'>Transform Your Brand</div>
                    <div className='card-desc'>We are a full-service creative agency specializing in helping brands grow fast.
                     Engage your clients through compelling visuals that do most of the marketing for you.</div>
                </div>
                <div className='card-second'>
                    <img className='card-image' alt='egg' src={Egg} />
                </div>
            </div>
            <div className='card-container'>
                <div className='card-first'>
                    <img className='card-image' alt='egg' src={Wine} />
                </div>
                <div className='card-second'>
                    <div className='card-title'>Stand out to the right audience</div>
                    <div className='card-desc'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, 
                                                we’ll build and extend your brand in digital places.</div>
                </div>
            </div>
            <div className='card-container'>
                <div className='card-first'>
                    <img className='card-image' alt='egg' src={Cherry} />
                    <div className='card-img-txt'>
                        <div className='card-title'>Graphic Design</div>
                        <div className='card-desc'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</div>
                    </div>
                </div>
                <div className='card-second'>
                    <img className='card-image' alt='egg' src={Orange2} />
                    <div className='card-img-txt'>
                        <div className='card-title'>Photography</div>
                        <div className='card-desc'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footer-title'>Sunnyside</div>
                <div className='social-container'>
                    <a href='#'><img className='icons' src={FB} alt='facebook'/></a>
                    <a href='#'><img className='icons' src={Insta} alt='Instagram'/></a>
                    <a href='#'><img className='icons' src={Pin} alt='Pinterest'/></a>
                    <a href='#'><img className='icons' src={Twi} alt='Twitter'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default SunnySideAgency;