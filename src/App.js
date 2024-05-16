/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.css';
import Description from './component/Description';
import ImageContainer from './component/ImageContainer';
import Footer from './component/footer';
import StickyNavbar from './component/StickyNavbar';


function App() {
  return (
    <>
      <div className='relative h-[667px] md:h-[854px] lg:h-[978px] 2xl:h-[1080px] '>
        <video src="./assets/homeVideo.mp4" autoPlay loop muted className='absolute inset-0 object-cover w-full h-[667px] md:h-[854px] lg:h-[978px] 2xl:h-[1080px] '></video>
        <div className='absolute top-0  w-full h-full bg-[#00354E] opacity-60'></div>
        <div className=' absolute top-[38px]  flex flex-row w-full items-center'>
          <img src="./assets/desktopLogo.png" alt="logo" className='  w-[266px] h-[167px]  ml-[170px]' />
          <nav className=' flex  items-center ml-[372px] w-full' >
            <ul className=' flex flex-row  space-x-16 absolute right-[160px] inter-font text-2xl text-white font-extralight'>
              <li className=' text-lime-400 mr-11'>Hem</li>
              <li><a href="#">Hållbarhet</a></li>
              <li><a href="#">Tjänster</a></li>
              <li><a href="#">Nyheter</a></li>
              <li><a href="#">Kontakt</a></li>
              <li><a href="#">Jobba med oss</a></li>
            </ul>
          </nav>
        </div>
        <StickyNavbar/>
        <div className=' flex flex-col  absolute top-[410px]  w-full text-white items-center text-start'>
          <h1 className=' text-[64px] '>EL, Teknik & Installationer för  <span className='block'>framtiden med  <span className=' text-lime-400'>hållbara framsteg</span></span> </h1>
          <h2 className=' text-xl font-medium w-[800PX] relative right-[90px]'>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson  expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</h2>
        </div>

      </div>

      <div className=' w-full h-[526px]  bg-[#CCCCCC] '>
        <div className='flex content-center ml-[210px] pt-[110px] box-border items-center'>
          <img src="./assets/arrow.png" alt="arrow button" />
          <h1 className='font-bold text-[40px] text-[#00354E] pl-4'>Välkommen till EM El & Data AB </h1>
        </div>

        <p className=' w-[1165px] h-[300px] ml-[210px]  box-border text-2xl py-10 text-[#00354E] font-normal leading-[42px]'>
          Egestam & Mattsson grundades 2012, vi är experter inom el- och datanätverksinstallationer.
          <span className='block'>Ett entreprenörsdrivet företag som drivs med ett team engagerade medarbetare. Vi kombinerar</span>
          <span className='block'>gedigen teknisk kunskap med ett starkt engagemang för hållbarhet, fokuserade på att leverera</span>
          <span className='block'>miljövänliga och innovativa lösningar för fastigheter och infrastruktur.</span>
        </p>
      </div>

      <Description />

      <div className='w-full h-[435px] bg-[#89BF50]/[14%] flex justify-center items-center'>
        <div className='w-[953px] h-[337px] flex flex-col justify-center items-center '>
          <p className='  line-clamp-4 text-[#00354E] px-4 text-center font-normal text-2xl'>Norden ställer om till klimatneutrala samhällen. Egestam & Mattsson bistår dig som kund i att utveckla fastigheter och infrastruktur som förbättrar samhällets funktion nu och för framtiden.</p>
          <a href="" className='mt-[33px] underline text-[#00354E] text-[16px] font-normal cursor-pointer'>Så här jobbar vi med hållbarhet</a>
        </div>
      </div>

      <div className='w-full  h-[596px] py-8 px-6  flex flex-row gap-16 justify-around items-center '>
        <div className=' w-[610px]'>
          <h2 className='text-5xl font-normal text-[#00354E]'>Energieffektiva lösningar inom elinstallation</h2>
          <p className='text-lg font-normal leading-7d my-14 text-[#00354E]'>Eftersom energikostnaden är löpande blir energioptimering en investering
            både för dig och för miljön. Genom att underhålla, uppgradera och
            digitalisera fastigheter kan vi minska din energianvändning.  Låt oss på
            Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
          </p>
          <button className='w-[420px] h-11 bg-[#89BF50] rounded-[54px] text-white py-2 px-14 absolute '>Så här jobbar vi med energioptimering</button>
          <img src="./assets/after.png" alt="after" className=' relative left-[380px] top-4' />
        </div>
        <img src="./assets/solarImage.jpeg" alt="SolarImage" className=' w-[520px] h-[300px] ' />

      </div>

      <div className=' w-full flex flex-row gap-52 items-center justify-center'>
        <div className=' w-[575px] px-5  '>
          <img src="./assets/award.jpeg" alt="award" width="558px" height="344px" className=' 2xl:w-[558px] h-[344px] object-cover rounded-[10px] ' />
          <h4 className='text-5xl font-bold text-[#003A3A] mt-10 '>VÅRT MOTTO</h4>
          <h5 className=' text-xl font-normal leading-8 my-3'>Kontrollerad riskhantering med förankring i god affärsetik</h5>
          <p className=' text-xl roboto-light leading-6 text-left  text-[#00354E] my-6'>Egestam och Mattsson strävar efter att generera stark avkastning genom en stabil ekonomisk tillväxt. Vår verksamhet präglas av en noggrant kontrollerad riskhantering med förankring i god affärsetik. Ett centralt fokus i vår affärsstrategi är att aktivt minska vår miljöpåverkan, vilket vi ser som en avgörande aspekt för att främja en hållbar framtid.</p>
        </div>
        <div className=''>
          <ImageContainer />
        </div>

      </div>

      <div className=' px-5 py-10'>
        <h1 className=' roboto-bold text-5xl px-[177px] pb-10 text-[#003A3A] ' >Nyheter</h1>
        <div className=' grid 2xl:grid-cols-3 px-[177px] gap-28'>
          <div className=' w-[350px]'>
            <img src="./assets/gridImage1.png" alt="" />
            <p className='text-[11px] font-bold text-[#727272] mt-3'>NYHTER</p>
            <p className='text-[10px] font-semibold text-[#727272] mt-3'>2023-11-21 08:00</p>
            <h2 className=' text-[32px] font-bold text-[#00354E] leading-[38px] mt-3'>Optimerade miljöer för ett hållbart liv</h2>
            <p className='text-base font-normal leading-[26px] text-[#00354E] mt-5 '>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt; &gt;
              </button>
            </div>
          </div>

          <div className=' w-[350px]' >
            <img src="./assets/gridImage2.jpeg" alt="" />
            <p className='text-[11px] font-bold text-[#727272] mt-3'>NYHTER</p>
            <p className='text-[10px] font-semibold text-[#727272] mt-3'>2023-11-21 08:00</p>
            <h2 className=' text-[32px] font-bold text-[#003A3A] leading-[38px] mt-3'>Elektrifiering och framtidssäkring </h2>
            <h2 className=' text-xl font-normal text-[#003A3A] '>Mattsson leder vägen i digitaliseringens era</h2>
            <p className='text-base font-normal leading-[26px] text-[#000000] mt-5 '>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt; &gt;
              </button>
            </div>
          </div>
          <div className=' w-[350px]'>
            <img src="./assets/gridImage3.png" alt="" />
            <h2 className=' text-[32px] font-bold text-[#003A3A] leading-[38px] mt-[75px]'>Vinnare av DI-GASELL</h2>
            <h2 className=' text-xl font-normal text-[#003A3A] mt-3'>Egestam och Mattsson</h2>
            <h2 className=' text-xl font-normal text-[#003A3A] mt-3'>utmärker sig återigen</h2>
            <p className='text-base font-normal leading-[22px] text-[#000000] mt-5 '>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.</p>
            <div className=' flex justify-end  p-6'>
              <button className=' text-[#00354E]'>
                Läs mer &gt; &gt;
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className='px-[195px] flex gap-28'>
        <div>
          <h2 className=' text-5xl font-semibold text-[#003A3A] mb-8'>Projekt</h2>
          <div className=' flex gap-28 '>
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

        <div className='flex flex-col gap-2'>
          <h2 className=' text-5xl font-semibold text-[#00354E] mb-8'>Hör av dig till oss</h2>
          <div className=' w-[391px] flex flex-col gap-4 '>
            <img src="./assets/projeckt2.jpg" alt="Projekt" />
            <h3 className=' text-[22.85px] font-normal text-[#00354E] '>Behöver du hjälp med något ?Kontakta oss idag!</h3>
          </div>
          <div className=' flex gap-3'>
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

      <div className='relative h-[637px] '>
        <img src="./assets/bottomImage.jpeg" alt="bottomImage" className=' h-[637px] w-full object-cover ' />
        <div className='absolute inset-0 bg-[#00354E] opacity-40'></div>
        <div className='flex flex-row absolute inset-0 items-center justify-around'>
          <div className=' relative w-[910px] text-white flex flex-col gap-3'>
            <h3 className=' text-xl font-semibold '>Vi gör skillnad</h3>
            <h1 className=' text-4xl font-bold'>Egestam & Mattsson satsar på en hållbar affär</h1>
            <p className='  text-[32px] font-normal w-[665px]'>Hållbar framtid en del ev vår affär vår policy för att bidra till de Globala Målen</p>
            <p className='text-base font-normal leading-[30px]'>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av sin affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
            <div className=' flex justify-center'>
              <button className='  w-[242px] h-[60px] border-solid border-[3px] '>
                Hållbarhet
              </button>
            </div>

          </div>
          <div className=' w-[772px] h-[441px] '>
            <img src="./assets/bottomImage2.jpeg" alt="" />
          </div>
        </div>

      </div>

      <Footer />
    </>

  );
}

export default App;
