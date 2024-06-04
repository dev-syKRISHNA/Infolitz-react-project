import React, { useState } from 'react';
import '../index.css';

const AccordionComponent2 = ({ title, description, backgroundColor, textColor, titleColor, buttonColor,buttonText }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className='box-border xl:px-60 ' style={{ backgroundColor }}>
            <button
                className='flex justify-between w-full items-center px-5 md:px-20 outline-none '
                onClick={() => setAccordionOpen(!accordionOpen)}
            >
                <span className=' font-light lg:font-light  text-[35px] lg:text-5xl mt-[30px] lg:my-[47px] mb-4 lg:mb-9 text-white box-border' style={{color: titleColor}}>{title}</span>
                {accordionOpen ? (
                    <span ><img src="./assets/Frameclose.svg" alt=""  /></span>
                ) : (
                    <span ><img src="./assets/Frameopen.svg" alt=""  /></span>
                )}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                } `} >
                <div className='overflow-hidden lg:w-[1139px] md:ml-[50px] px-7 text-base md:text-xl font-light   box-border  flex flex-col' style={{ color: textColor }}>{description}
                    <div className='flex  justify-center md:justify-start my-6'>
                    <button className='p-1 bg-white rounded-3xl text-[#00354E] font-semibold w-[244px] h-[43px]  box-border' style={{backgroundColor: buttonColor, color: buttonText}}>
                        Kontakta oss
                    </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AccordionComponent2;
