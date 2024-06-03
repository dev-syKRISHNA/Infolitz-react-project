import React from 'react'

const ImageContainer = () => {
    return (
        <div className='relative rounded-b-none 2xl:rounded-t-[35px]'>
            <img src='./assets/mcb.png' alt="Background" className=" lg:h-[577px] rounded-b-none 2xl:rounded-t-[35px]" />
            <div className="absolute inset-0 bg-black opacity-50 2xl:rounded-t-[35px] "></div>
            <div className='absolute inset-0 text-white text-center flex flex-col lg:gap-8 justify-center ml-4 lg:ml-20  items-start '>
                <h1 className=' text-[32px] lg:text-5xl font-normal  ' >Jobba hos oss</h1>
                <p className=' text-left text-xl font-normal my-4 '>Är du intresserad av att vara med och forma framtidens infrastruktur och fastighetslösningar?
                    Bli en del av vårt team & hjälp oss att bygga en hållbar framtid</p>
                <div>
                    <button className='relative bg-[#00354E] px-4 lg:px-8  py-2 flex items-center  rounded-3xl'>
                        Läs mer om lediga tjänster
                        <img src="./assets/after.png" alt="" className="ml-2" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ImageContainer
