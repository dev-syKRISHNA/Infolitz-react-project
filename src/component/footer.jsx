import React from 'react'

const Footer = () => {
    return (
        <footer >

            {/* Mobile Footer */}
            <div className=' md:hidden  bg-[#89BF50] py-3 w-full '>
                <img src="./assets/footerLogo.png" alt="" className='w-[164px] h-[104px]  top-[13px] ml-5' />
                <div className="text-white mt-7 ml-5 ">
                    <h3 className=" text-[32px] montserrat font-semibold  ">Kontakt</h3>
                    <p className="  text-xl roboto-regular mt-2  ">Egestam Mattsson El & Data AB</p>
                    <p className="  text-xl roboto-regular  ">Ridspögatan 15a</p>
                    <p>213 77 Malmö</p>
                    <div className="montserrat flex flex-col mt-7">
                        <a href="tel:040-6170166">Tel: 040-6170166</a>
                        <a href="mailto:info@emeldata.se"> E-post: info@emeldata.se</a>
                    </div>
                </div>
                <div className='border-t-[#FFFFFF1A] border-[0.5px] my-6 '></div>
                <div className='flex flex-row gap-5 text-white  ml-5'>
                    <div className=" flex flex-col gap-3 text-base font-normal">
                        <h3 className=" text-lg font-extrabold">Meny</h3>
                        <p>Vårt erbjudande</p>
                        <p>Hållbarhet</p>
                        <p>Jobba hos oss</p>
                        <p>Om oss</p>
                        <p>Kontakta oss</p>
                    </div>
                    <div className=" flex flex-col gap-3 text-base font-normal">
                        <h3 className=" text-lg font-extrabold">Din integritet</h3>
                        <p>Integritetspolicy</p>
                        <p>Cookiepolicy</p>
                        <div className="flex  items-center gap-2">
                            <img src="./assets/vector.png" alt="facebook logo" />
                            <span className='logoText'>Facebook</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='hidden md:block relative bg-[#89BF50] w-full h-[373px] lg:h-[498px]'>
                <div className="flex flex-row justify-center gap-5 lg:gap-16 xl:gap-52 xl:px-5 px-2">
                    <div className="text-white mt-14 ">
                        <h3 className="  text-2xl xl:text-[32px] montserrat font-semibold  ">Kontakt</h3>
                        <div className=' flex flex-col gap-2 my-2'>
                            <p className="  text-base lg:text-xl roboto-regular   ">Egestam Mattsson El & Data AB</p>
                            <p className="  text-base lg:text-xl roboto-regular  ">Ridspögatan 15a</p>
                            <p className="  text-base lg:text-xl roboto-regular  ">213 77 Malmö</p>
                        </div>

                        <div className="montserrat flex flex-col mt-5 text-base">
                            <a href="tel:040-6170166">Tel: 040-6170166</a>
                            <a href="mailto:info@emeldata.se"> E-post: info@emeldata.se</a>
                        </div>
                    </div>

                    <div className=' flex flex-row gap-2 xl:gap-14 text-white mt-[90px]  box-border'>
                        <div className=" flex flex-col gap-3 text-base font-normal ">
                            <h3 className=" text-lg font-semibold xl:font-extrabold">Meny</h3>
                            <div className='text-base font-normal flex flex-col gap-3 w-[120px]'>
                                <p>Hem</p>
                                <p>Hållbarhet</p>
                                <p>Tjänter</p>
                                <p>Kontakta oss</p>
                                <p>Jobba med oss</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 text-base font-normal">
                            <h3 className=" text-lg font-extrabold">Din integritet</h3>
                            <p>Integritetspolicy</p>
                            <p>Cookiepolicy</p>
                            <div className="flex  items-center gap-2">
                                <img src="./assets/vector.png" alt="facebook logo" />
                                <span className='logoText'><a href="https://www.facebook.com/p/Egestam-Mattsson-El-Data-AB-100054391965658/?locale=sv_SE">Facebook</a></span>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-2 mt-[88px] xl:mt-14 text-white '>
                        <h3 className=" text-xl xl:text-[32px] font-semibold ">Gasellvinnare</h3>
                        <img src="./assets/gridImage3.png" alt="images" className="w-[266px] h-[128px]" />
                        <p className="hidden lg:block w-[284px] text-xs leading-[17px] ">Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                    </div>
                </div>
                <img className=' md:w-[164px] md:h-[104px] xl:w-[164px] xl:h-[104px]  lg:w-[121px] lg:h-[77px] absolute bottom-5 right-5  lg:bottom-14 lg:right-20  ' src="./assets/footerLogo.png" alt="site logo" />
            </div>
        </footer>
    )
}

export default Footer
