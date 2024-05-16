import React, { useState, useEffect } from 'react';

const StickyNavbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarVisible(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full bg-[#89BF50ED] text-white p-4 top-0 left-0 z-10 transition-transform duration-300 ${isNavbarVisible ? '' : '-translate-y-full'}`}>
            <div className='flex flex-row w-full items-center'>
                <img src="./assets/stickyLogo.png" alt="logo" className='w-[119px] h-[61px] ml-[170px]' />
                <nav className='flex items-center ml-[372px] w-full'>
                    <ul className='flex flex-row space-x-16 inter-font text-2xl text-white font-extralight'>
                        <li className='text-lime-400 mr-11'>Hem</li>
                        <li><a href="#">Hållbarhet</a></li>
                        <li><a href="#">Tjänster</a></li>
                        <li><a href="#">Nyheter</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">Jobba med oss</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default StickyNavbar;
