/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const StickyNavbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isHamVisible, setIsHamVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarVisible(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsHamVisible(!isHamVisible);
    };

    return (
        <div className={`fixed w-full bg-[#89BF50] text-white box-border top-0 left-0 z-50 transition-transform duration-300 ${isNavbarVisible ? '' : '-translate-y-full'} max-h-[99px]`}>
            <div className='hidden lg:flex flex-row w-full items-center p-[19px] lg:px-14 xl:px-36 z-50'>
                <img src="./assets/stickyLogo.png" alt="logo" className='w-[95px] h-[61px]' />
                <div className="flex items-center ml-[372px] w-full">
                    <ul className="hidden lg:flex space-x-14 xl:space-x-16 absolute right-[160px] xl:text-2xl text-white font-extralight inter-font">
                        <li className="text-lime-400 mr-11">Hem</li>
                        <li><a href="#">Hållbarhet</a></li>
                        <li><a href="#">Tjänster</a></li>
                        <li><a href="#">Nyheter</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">Jobba med oss</a></li>
                    </ul>
                </div>
            </div>
            <div className=' lg:hidden  bg-[#89BF50]'>
                <div className='flex flex-row justify-between h-[97px] mx-5'>
                    <img src="./assets/stickyLogo.png" alt="logo" className='w-[95px] h-[61px] mt-5' />
                    <div onClick={toggleMenu} className='cursor-pointer flex items-center'>
                        {isHamVisible ? (
                            <img src="./assets/CloseMenu.png" alt="close menu" className='' />
                        ) : (
                            <img src="./assets/HamMenu.png" alt="open menu" className='w-[48px] h-[48px]' />
                        )}
                    </div>
                </div>
                {isHamVisible && (
                    <div className=" py-3 mx-5 h-[585px] ">
                        <ul className="flex flex-col items-center text-[#00354E] font-semibold text-xl inter-font">
                            <li className='border-[#00354E] border-y-[1px] py-3 flex justify-between w-full'>Hem
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                            <li className='border-[#00354E] border-b-[1px] py-3 flex justify-between w-full'>Hållbarhet
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                            <li className='border-[#00354E] border-b-[1px] py-3 flex justify-between w-full'>Tjänster
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                            <li className='border-[#00354E] border-b-[1px] py-3 flex justify-between w-full'>Nyheter
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                            <li className='border-[#00354E] border-b-[1px] py-3 flex justify-between w-full'>Kontakt
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                            <li className='border-[#00354E] border-b-[1px] py-3 flex justify-between w-full'>Jobba med oss
                                <img src="./assets/FloatNavArrow.png" alt="" className='w-[8px] h-[16px]' />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StickyNavbar;
