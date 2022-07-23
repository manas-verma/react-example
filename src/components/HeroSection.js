import React from 'react';

function Button(isPrimary, text) {
    const buttonStyle = isPrimary ? 'btn--primary' : 'btn--outline'
    return (
        <Button
                className='btns'
                buttonStyle={buttonStyle}
                buttonSize='btn--large'
        >
            {text}
        </Button>
    );
}

function HeroSection() {
    const getStarted = <>GET STARTED</>
    const watchTrailer = <>WATCH TRAILER <i className='far fa-play-circle' /></>
    return (
        <div className='here-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                {Button(false, {getStarted})}
                {Button(true, {watchTrailer})}
            </div>
        </div>
    );
}

export default HeroSection;