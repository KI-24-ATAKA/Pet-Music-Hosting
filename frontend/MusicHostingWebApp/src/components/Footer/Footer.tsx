import React from 'react';
import {FiHome, FiUser} from 'react-icons/fi';
import {LuLibrary} from 'react-icons/lu';
import {IoMdTrendingUp} from 'react-icons/io';

import './Footer.scss';

function Footer() {
    const ref = React.useRef(null);

    const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
        const activeFooterAction = event.currentTarget;
        if (ref.current) {
            const footer:HTMLElement = ref.current;
            const lebels = footer.querySelectorAll('*');
            lebels.forEach( lebel => {
                if (lebel instanceof HTMLElement) {
                    lebel.style.color = '';
                }
            });
        }
        activeFooterAction.style.color = '#ad6de4';
    };

    return (
        <footer 
            className='Footer'
            ref={ref}
        >
            <div className='Footer__navigation'>
                <label
                    className='Footer__text'
                    onClick={handleClick}
                >
                    <FiHome size={20} />
                    Лента
                </label>
            </div>
            <div className='Footer__navigation'>
                <label
                    className='Footer__text'
                    onClick={handleClick}
                >
                    <LuLibrary size={20} />
                    Моя музыка
                </label>
            </div>
            <div className='Footer__navigation'>
                <label 
                    className='Footer__text'
                    onClick={handleClick}
                >
                    <IoMdTrendingUp size={20} />
                    Топы
                </label>
            </div>
            <div className='Footer__navigation'>
                <label
                    className='Footer__text'
                    onClick={handleClick}
                >
                    <FiUser size={20} />
                    Профиль
                </label>
            </div>
        </footer>
    );
}

export default Footer;
