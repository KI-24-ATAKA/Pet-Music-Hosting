import {FiHome, FiUser} from 'react-icons/fi';
import {LuLibrary} from 'react-icons/lu';
import {IoMdTrendingUp} from 'react-icons/io';

import './Footer.scss';

function Footer() {
    return (
        <div className='Footer'>
            <button className='Footer__navigation'>
                <label className='Footer__text'>
                    <FiHome  size={20} />
                    Лента
                </label>
            </button>
            <button className='Footer__navigation'>
                <label className='Footer__text'>
                    <LuLibrary size={20} />
                    Моя музыка
                </label>
            </button>
            <button className='Footer__navigation'>
                <label className='Footer__text'>
                    <IoMdTrendingUp size={20} />
                    Топы
                </label>
            </button>
            <button className='Footer__navigation'>
                <label className='Footer__text'>
                    <FiUser size={20} />
                    Профиль
                </label>
            </button>
        </div>
    );
}

export default Footer;
