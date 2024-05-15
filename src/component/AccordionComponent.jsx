import React, { useState } from 'react';
import '../index.css';

const AccordionComponent = ({ title, description, backgroundColor, textColor }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className='box-border px-60 ' style={{ backgroundColor }}>
            <button
                className='flex justify-between w-full items-center px-12   '
                onClick={() => setAccordionOpen(!accordionOpen)}
            >
                <span className='font-light text-5xl mt-[47px] mb-9 text-white box-border'>{title}</span>
                {accordionOpen ? (
                    <span ><img src="./assets/VectorClose.png" alt="" /></span>
                ) : (
                    <span ><img src="./assets/VectorOpen.png" alt="" /></span>
                )}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
            ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                } `} >
                <div className='overflow-hidden w-[1139px] ml-[50px]  text-xl font-light  box-border  flex flex-col ' style={{ color: textColor }}>{description}
                    <button className='p-1 bg-white rounded-3xl text-[#00354E] w-[244px] h-[43px] mt-6 mb-5 box-border'>
                        Kontakta oss
                    </button>
                </div>

            </div>
        </div>
    );
}

export default AccordionComponent;
