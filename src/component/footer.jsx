
function Footer() {
    return (
        <footer className=' relative bg-[#89BF50]  flex flex-col'>
            <div className="flex flex-row justify-center gap-52">
                <div className="text-white mt-14 ">
                    <h3 className=" text-[32px] montserrat font-semibold  ">Kontakt</h3>
                    <p className="  text-xl roboto-regular mt-2  ">Egestam Mattsson El & Data AB</p>
                    <p className="  text-xl roboto-regular  ">Ridspögatan 15a</p>
                    <p>213 77 Malmö</p>
                    <div className="montserrat flex flex-col mt-7">
                        <a href="tel:040-6170166">Tel: 040-6170166</a>
                        <a href="mailto:info@emeldata.se"> E-post: info@emeldata.se</a>
                    </div>
                </div>

                <div className='md:hidden sm:hidden 2xl:flex flex-row gap-5 text-white mt-[109px]'>
                    <div className=" flex flex-col gap-3 text-base font-normal">
                        <h3 className=" text-lg font-extrabold">Meny</h3>
                        <p>Hem</p>
                        <p>Hållbarhet</p>
                        <p>Tjänter</p>
                        <p>Kontakta oss</p>
                        <p>Jobba med oss</p>
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


                <div className='flex flex-col gap-2 mt-14 text-white'>
                    <h3 className=" text-[32px] font-semibold ">Gasellvinnare</h3>
                    <img src="./assets/gridImage3.png" alt="images" className="w-[266px] h-[128px]" />
                    <p className=" w-[284px] text-xs leading-[17px]">Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                </div>
            </div>

            <img className=' w-[164px] h-[104px] absolute bottom-20 2xl:right-20  ' src="./assets/footerLogo.png" alt="site logo" />
            <div className="mt-[80px] flex justify-center text-white border-t-2 border-[#FFFFFF1A] py-2  ">
                <p className="py-2">Copyright &copy; 2024 All rights reserved</p>
            </div>

            {/* Small Screen Footer */}

            <div className="md:hidden 2xl:hidden lg:hidden ">
                <div className='2xl:hidden md:hidden sm:flex flex-row gap-5 text-white mt-14'>
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
        </footer>

    )
}

export default Footer