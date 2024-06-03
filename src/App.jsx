/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import StickyNavbar from './component/StickyNavbar'
import ImageContainer from './component/ImageContainer'
import Description from './component/Description'
import Footer from './component/footer'
import HamMenu from './component/HamMenu'


const App2 = () => {
  return (
    <>

      <div className='relative h-[667px] sm:h-[667px] md:h-[854px] lg:h-[978px] xl:h-[1080px]'>
        <video src="./assets/homeVideo.mp4" autoPlay loop muted className='absolute inset-0 object-cover w-full h-[667px] sm:h-[667px] md:h-[854px] lg:h-[978px] xl:h-[1080px]'></video>
        <div className='absolute top-0  w-full h-full bg-[#00354E] opacity-60'></div>
        <div className='absolute top-0 w-full lg:hidden z-50'>
          <HamMenu />
        </div>
        <div className=' relative z-10'>
          <div className='hidden lg:flex flex-row w-full items-center p-5 md:py-6 lg:px-14 xl:px-36 lg:py-9  z-50'>
            <img src="./assets/desktopLogo.png" alt="logo" className='  w-[137PX] h-[69PX] md:w-[182px] md:h-[115px] 2xl:w-[266px] 2xl:h-[167px]  ' />
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

          <div className=' flex flex-col items-center h-full w-full pt-32'>
            <div className='w-full flex flex-col items-center md:w-full  text-center md:text-start px-10 md:px-16  my-32 text-white'>
              <h1 className='  uppercase md:normal-case md:text-[64px] md:max-w-[850px] lg:max-w-[1100px] leading-[30px] md:leading-[70px]'>EL, Teknik & Installationer för framtiden med
                <br className='lg:hidden' />
                <span className='text-[#89BF50]  uppercase md:normal-case font-bold hidden md:inline'> hållbara framsteg</span>
              </h1>
              <h1 className='text-[#89BF50] uppercase md:normal-case font-bold  md:hidden '>hållbara framsteg</h1>
              <p className=' text-[12px]  px-3  md:text-xl font-normal md:font-normal  mt-5 md:leading-[30px] sm:max-w-[500px] md:max-w-[860px] lg:max-w-[1100px]'>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
            </div>
          </div>
        </div>
      </div>
      <StickyNavbar />


      <div className='md:hidden'>
        <Description />

      </div>

      <div className='bg-white md:bg-[#CCCCCC] px-5  py-8 xl:py-[70px] '>
        <div className='xl:ml-[85px]'>
          <div className='flex gap-4 md: items-center justify-normal md:justify-start   md:ml-[90px]  lg:ml-[210px]'>
            <img src="./assets/arrow.png" alt="arrow button" className='w-[32px] h-[32px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]' />
            <h1 className='font-bold text-lg md:text-[32px] lg:text-[40px] text-[#00354E] '>Välkommen till EM El & Data AB</h1>
          </div>
          <p className=' md:mx-[165px] lg:ml-[210px] text-base md:text-xl lg:text-2xl    px-4 lg:py-10 md:py-3  text-[#00354E] font-normal leading-6 md:leading-[30px] lg:leading-[42px] max-w-[1240px]'>
            Egestam & Mattsson grundades 2012, vi är experter inom el- och datanätverksinstallationer.
            Ett entreprenörsdrivet företag som drivs med ett team engagerade medarbetare. Vi kombinerar
            gedigen teknisk kunskap med ett starkt engagemang för hållbarhet, fokuserade på att leverera
            miljövänliga och innovativa lösningar för fastigheter och infrastruktur.
          </p>
        </div>

      </div>

      <div className='hidden md:block'>
        <Description />
      </div>

      <div className='w-full h-[435px] bg-[#89BF50] md:bg-[#89BF50]/[14%]  flex justify-center items-center'>
        <div className='w-[953px] h-[337px] flex flex-col justify-center items-center '>
          <p className='  md:line-clamp-4 text-white md:text-[#00354E] px-4 text-center font-normal text-2xl'>Norden ställer om till klimatneutrala samhällen. Egestam & Mattsson bistår dig som kund i att utveckla fastigheter och infrastruktur som förbättrar samhällets funktion nu och för framtiden.</p>
          <a href="" className='mt-[33px] underline  text-white md:text-[#00354E] text-[16px] font-normal cursor-pointer'>Så här jobbar vi med hållbarhet</a>
        </div>
      </div>

      <div>
        <div className='flex flex-col md:hidden w-full  lg:h-[596px] py-8 px-6  lg:flex  lg:flex-row gap-16 justify-around items-center '>
          <div className='order-2 lg:order-1 xl:w-[610px] '>
            <div className='max-w-[520px]'>
              <h2 className='text-[32px] md:text-5xl font-normal text-[#00354E]'>Energieffektiva lösningar inom elinstallation</h2>
              <p className='text-lg font-normal md:leading-7d  my-5 md:my-14 text-[#00354E] '>Eftersom energikostnaden är löpande blir energioptimering en investering
                både för dig och för miljön. Genom att underhålla, uppgradera och
                digitalisera fastigheter kan vi minska din energianvändning.  Låt oss på
                Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
              </p>
            </div>

            <div className=' flex flex-col md:flex-row items-center relative max-w-max max-h-max justify-center'>
              <button className='md:w-[450px] md:h-12 bg-[#89BF50] rounded-[54px] text-white py-2 px-14 flex  items-center gap-[2px] justify-between '>Så här jobbar vi med energioptimering
                <img src="./assets/after.png" alt="after" className=' ' />
              </button>
            </div>
          </div>
          <img src="./assets/solarImage.jpeg" alt="SolarImage" className=' order-1 lg:order-2 w-[520px] h-[300px] object-cover' />
        </div>

        <div className='hidden md:block lg:hidden pb-8'>
          <div className='relative'>
            <img src="./assets/solarImage.jpeg" alt="SolarImage" className='  w-full h-[433px] object-cover' />
            <div className='absolute inset-0 bg-[#00354E] opacity-60 mix-blend-multiply' ></div>
            <div className='absolute inset-0 text-white max-w-[700px] ml-10 flex flex-col gap-3 my-10'>
              <h1 className='text-[48px] font-normal'>Energieffektiva lösningar inom elinstallation</h1>
              <p className='text-lg font-normal'>Eftersom energikostnaden är löpande blir energioptimering en investering
                både för dig och för miljön. Genom att underhålla, uppgradera och
                digitalisera fastigheter kan vi minska din energianvändning. Låt oss på
                Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
              </p>
              <button className='w-[450px] h-12 bg-[#89BF50] rounded-[54px] text-white py-2 px-14 flex  items-center gap-[2px] justify-between '>Så här jobbar vi med energioptimering
                <img src="./assets/after.png" alt="after" className=' ' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=' hidden md:flex justify-center 2xl:hidden'>
        <div className='relative rounded-[28px]'>
          <img src="./assets/mcb.png" alt="" className='w-[762px] h-[361px] object-cover rounded-[28px]' />
          <div className='absolute inset-0 bg-[#00354E] opacity-60 rounded-[28px]'></div>
          <div className=' flex flex-col justify-center px-14 gap-6  absolute inset-0 text-white '>
            <h1 className=' text-[48px] font-normal '>Jobba hos oss</h1>
            <p className=' text-xl font-normal '>Är du intresserad av att vara med och forma framtidens infrastruktur och fastighetslösningar? Bli en del av vårt team & hjälp oss att bygga en hållbar framtid</p>
            <button className='relative bg-[#00354E] px-4   py-2 flex items-center  rounded-3xl w-[268px] h-[33px]'>
              Läs mer om lediga tjänster
              <img src="./assets/after.png" alt="" className="ml-2" />
            </button>
          </div>

        </div>

      </div>


      <div className=' flex flex-col md:flex-row   lg:gap-52 items-center justify-around py-16'>
        <div className=' md:w-[451px] lg:w-[575px] px-5  '>
          <div className='flex justify-center '>
            <img src="./assets/award.jpeg" alt="award" className=' w-[363px] h-[266px] xl:w-[558px] xl:h-[300px]  xl:object-cover rounded-[10px] ' />
          </div>
          <div className='flex flex-col gap-2 mt-6 px-3 md:px-5 lg:px-10 lg:ml-10 xl:ml-0 xl:px-0'>
            <h4 className='text-xl md:text-[32px] xl:text-5xl font-bold text-[#003A3A]   '>VÅRT MOTTO</h4>
            <h5 className=' text-lg font-normal leading-8  '>Kontrollerad riskhantering med förankring i god affärsetik</h5>
            <p className=' md:text-sm lg:text-xl  roboto-light lg:leading-6 text-left  text-[#00354E]  '>Egestam och Mattsson strävar efter att generera stark avkastning genom en stabil ekonomisk tillväxt. Vår verksamhet präglas av en noggrant kontrollerad riskhantering med förankring i god affärsetik. Ett centralt fokus i vår affärsstrategi är att aktivt minska vår miljöpåverkan, vilket vi ser som en avgörande aspekt för att främja en hållbar framtid.</p>
          </div>

        </div>
        <div className='md:hidden 2xl:block py-5'>
          <ImageContainer />
        </div>
        <div className='hidden md:flex flex-col 2xl:hidden '>
          <div className=' w-[391px] flex flex-col gap-7 '>
            <img src="./assets/projeckt2.jpg" alt="Projekt" className='w-[338px] h-[183px] xl:w-[447px] xl:h-[260px]' />
            <h2 className=' text-[32px] xl:text-5xl font-semibold text-[#00354E] '>Hör av dig till oss</h2>
            <h3 className=' text-[20px] font-normal text-[#00354E] my-1 '>Behöver du hjälp med något ?Kontakta oss idag!</h3>
          </div>
          <div className=' flex flex-col gap-3 my-2'>
            <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6 w-[263px]'>
              Hitta till vårt kontor
              <img src="./assets/after.png" alt="" />
            </button>
            <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6 w-[197px]'>
              Ring oss direkt
              <img src="./assets/after.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className=' py-10  px-5 '>
        <h1 className=' roboto-bold  text-4xl lg:text-5xl px-5 xl:px-[177px] pb-10 text-[#003A3A] hidden md:block ' >Nyheter</h1>
        <div className=' grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3  xl:px-[177px] lg:gap-28  items-center px-5'>
          <div className=' md:w-[350px]'>
            <img src="./assets/gridImage1.png" alt="" />
            <p className='text-[11px] font-bold text-[#727272] mt-3 hidden md:block'>NYHTER</p>
            <p className='text-[10px] font-semibold text-[#727272] mt-3 hidden md:block'>2023-11-21 08:00</p>
            <h2 className=' text-[32px] font-bold text-[#00354E] leading-[38px] mt-3'>Optimerade miljöer för ett hållbart liv</h2>
            <p className=' text-sm md:text-base font-normal leading-[26px] text-[#00354E] mt-5 '>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt;&gt;
              </button>
            </div>
          </div>

          <div className=' md:w-[350px]' >
            <div className='flex flex-row md:hidden'>
              <img src="./assets/arrow.png" alt="" className='w-[30px] h-[36px]' />
              <h1 className=' roboto-bold  text-4xl lg:text-5xl px-5 xl:px-[177px] pb-10 text-[#003A3A] md:hidden  ' >Nyheter</h1>
            </div>
            <img src="./assets/gridImage2.jpeg" alt="" />
            <p className='text-[11px] font-bold text-[#727272] mt-3'>NYHTER</p>
            <p className='text-[10px] font-semibold text-[#727272] mt-3'>2023-11-21 08:00</p>
            <h2 className=' text-xl  md:text-[32px] font-bold text-[#003A3A] leading-[38px] mt-3'>Elektrifiering och framtidssäkring </h2>
            <h2 className=' text-xl font-normal text-[#003A3A] '>Mattsson leder vägen i digitaliseringens era</h2>
            <p className='text-sm md:text-base font-normal leading-[26px] text-[#000000] mt-5 '>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt;&gt;
              </button>
            </div>
          </div>
          <div className=' md:w-[350px]'>
            <img src="./assets/gridImage3.png" alt="" />
            <h2 className=' text-xl  md:text-[32px] font-bold text-[#003A3A] leading-[38px] mt-[75px]'>Vinnare av DI-GASELL</h2>
            <h2 className=' text-xl font-normal text-[#003A3A] mt-3'>Egestam och Mattsson</h2>
            <h2 className=' text-xl font-normal text-[#003A3A] mt-3'>utmärker sig återigen</h2>
            <p className='text-sm md:text-base font-normal leading-[22px] text-[#000000] mt-5 '>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt;&gt;
              </button>
            </div>
          </div>

        </div>
      </div>


      <div className='hidden px-[50px] lg:px-[195px] my-12 lg:flex lg:gap-28  '>
        <div>
          <h2 className=' text-5xl font-semibold text-[#003A3A] mb-8'>Projekt</h2>
          <div className=' flex gap-7 lg:gap-28 '>
            <div className=' w-[391px] flex flex-col gap-4 '>
              <img src="./assets/Projekt.jpg" alt="Projekt" />
              <h2 className=' text-xs font-semibold text-[#727272] '>Malmö, Södertälje</h2>
              <h3 className=' text-[22.85px] font-normal text-[#003A3A] '>Konstent att bygga prisvärda & hållbara förskolor</h3>
            </div>
            <div>
              <div className=' w-[391px] flex flex-col gap-4 '>
                <img src="./assets/Projekt.jpg" alt="Projekt" />
                <h2 className=' text-xs font-semibold text-[#727272] '>Malmö, Södertälje</h2>
                <h3 className=' text-[22.85px] font-normal text-[#003A3A] '>Konstent att bygga prisvärda & hållbara förskolor</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden 2xl:flex flex-col '>
          <h2 className=' text-5xl font-semibold text-[#00354E] mb-8'>Hör av dig till oss</h2>
          <div className=' w-[391px] flex flex-col gap-4 '>
            <img src="./assets/projeckt2.jpg" alt="Projekt" className='' />
            <h3 className=' text-[22.85px] font-normal text-[#00354E] my-1 '>Behöver du hjälp med något ?Kontakta oss idag!</h3>
          </div>
          <div className=' flex gap-3 mt-2'>
            <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6'>
              Hitta till vårt kontor
              <img src="./assets/after.png" alt="" />
            </button>
            <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6'>
              Ring oss direkt
              <img src="./assets/after.png" alt="" />
            </button>
          </div>
        </div>
      </div>


      <div className='hidden md:block'>
        <div className='relative h-[431px] lg:h-[562px] xl:h-[637px] w-full '>
          <img src="./assets/bottomImage.jpeg" alt="bottomImage" className=' h-full w-full object-cover  ' />
          <div className='absolute inset-0 bg-[#00354E] opacity-75  mix-blend-multiply'></div>
          <div className='absolute inset-0 w-full  flex flex-row  items-center align-middle lg:gap-5 justify-center p-5'>
            <div className=' relative lg:w-[910px] text-white lg:flex lg:flex-col lg:gap-3'>
              <h3 className='hidden  lg:block text-xl font-semibold '>Vi gör skillnad</h3>
              <h1 className=' text-[32px] lg:text-4xl font-bold py-1'>Egestam & Mattsson satsar på en hållbar affär</h1>
              <div className='flex flex-row lg:flex-col gap-3  '>
                <div className=''>
                  <p className='  md:text-xl lg:text-[30px] font-normal '>Hållbar framtid en del ev vår affär vår policy för att bidra till de Globala Målen</p>
                  <div className='hidden md:flex lg:justify-center lg:hidden'>
                    <button className='  w-[242px] h-[60px] border-solid border-[3px] my-10 '>
                      Hållbarhet
                    </button>
                  </div>
                </div>
                <p className='md:text-xs lg:text-base font-normal lg:leading-[30px] md:max-w-[470px] lg:max-w-max lg:w-full'>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av sin affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
              </div>
              <div className='hidden lg:flex lg:justify-center'>
                <button className='  w-[242px] h-[60px] border-solid border-[3px] '>
                  Hållbarhet
                </button>
              </div>
            </div>
            <div className=' '>
              <img src="./assets/bottomImage2.jpeg" alt="" className='hidden lg:block lg:w-[335px] lg:h-[177px] 2xl:w-[770px] 2xl:h-[400px]' />
            </div>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className='flex flex-col gap-4 justify-start mx-5'>
          <img src="./assets/bottomImage2.jpeg" alt="" className=' w-[340px] h-[177px]' />
          <h1 className='text-xl font-semibold'>Vi gör skillnad</h1>
          <h2 className='text-xl font-medium text-[#00354E] w-[330px]'>Hållbar framtid en del ev vår affär vår policy för att bidra till de Globala Målen</h2>
          <p className='text-base font-normal text-[#00354E] leading-[30px]'>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av sin affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
        </div>
        <div className='flex justify-center mx-5'>
          <button className='  w-[242px] h-[60px] border-solid border-[3px] border-[#89BF50] text-[#89BF50] text-xl font-bold rounded-[20px]  montserrat '>
            Hållbarhet
          </button>
        </div>
      </div>

      <div className='flex flex-col my-5 mx-5 md:hidden '>
        <div className=' flex flex-col gap-4 '>
          <img src="./assets/projeckt2.jpg" alt="Projekt" className='w-[279px] h-[186px]' />
          <h2 className=' text-[32px] font-normal text-[#00354E] '>Hör av dig till oss</h2>
          <h3 className=' text-base font-normal text-[#00354E] my-1 '>Behöver du hjälp med något ?Kontakta oss idag!</h3>
        </div>
        <div className=' flex flex-col  gap-3 mt-2'>
          <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6 w-[233px]'>
            Hitta till vårt kontor
            <img src="./assets/after.png" alt="" />
          </button>
          <button className=' bg-[#00354E] text-white flex justify-around rounded-3xl gap-2 items-center text-base py-2 px-6 w-[198px]'>
            Ring oss direkt
            <img src="./assets/after.png" alt="" />
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>





    </>
  )
}

export default App2
