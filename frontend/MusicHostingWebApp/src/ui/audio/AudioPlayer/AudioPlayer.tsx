import React from 'react';

function AudioPlayer() {
    const [isOpen, setIsOpen] = React.useState(false);

    return(
        <div className='AudioPlayer'>
            <div className='AudioPlayer__slider'>
                <input type='range' />
            </div>
            <div className='AudioPlayer__audio-controls'>
                {/*<img />*/}
                <div className='AudioPlayer__info'></div>
                <button className='AudioPlayer__open'></button>
                <button className='AudioPlayer__add'></button>
                <button className='AudioPlayer__play'></button>
                <button className='AudioPlayer__close'></button>
            </div>
        </div>
    );
};

export default AudioPlayer;
