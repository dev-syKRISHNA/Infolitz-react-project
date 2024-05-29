import React, { useState } from 'react';

const HamMenu = () => {

    const [isHamVisible, setIsHamVisible] = useState(false);
    const toggleMenu = () => {
        setIsHamVisible(!isHamVisible);
    };
    return (
        <div className={` ${isHamVisible ? 'bg-[#89BF50ED] bg-opacity-75' : 'bg-transparent'} z-50`}>
            <div className='lg:hidden p-5'>
                <div className='flex flex-row justify-between '>
                    <img src="./assets/DesktopLogo.png" alt="logo" className='w-[95px] h-[61px]' />
                    <div onClick={toggleMenu} className='cursor-pointer flex items-center'>
                        {isHamVisible ? (
                            <img src="./assets/CloseMenu.png" alt="close menu" className='' />
                        ) : (
                            <img src="./assets/HamMenu.png" alt="open menu" className='w-[48px] h-[48px]' />
                        )}
                    </div>
                </div>
                {isHamVisible && (
                    <div className=" py-3 ">
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
    )
}

export default HamMenu
