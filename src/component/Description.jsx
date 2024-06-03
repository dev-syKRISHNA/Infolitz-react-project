import React from 'react';
import '../index.css';
import AccordionComponent from './AccordionComponent';

const Description = () => {
    return (
        <>
            <div className='w-full box-border md:hidden'>
            <AccordionComponent
                title='Nybyggnation'
                description='Vid nybyggnation, oavsett om det gäller bostäder, kommersiella lokaler eller kontor, är kvalitetsinstallationer av el och datanätverk kritiska. Dessa installationer omfattar en rad tjänster från belysning och uppvärmning till avancerade datanätverk och kommunikationssystem. Integration av moderna teknologier som smarta hem- och kontorslösningar, samt energieffektiva installationer, är centrala för att skapa en hållbar, säker och effektiv miljö anpassad för framtida behov. Som experter på området är Egestam & Mattsson de du kan lita på för att leverera högkvalitativa installationer. Kontakta oss för  att ta det första steget mot en framtidssäker fastighet.'
                backgroundColor='#00354E'
                textColor='#FFFFFF'
            />
            <AccordionComponent
                title='Renovering'
                description='Egestam och Mattsson erbjuder omfattande tjänster för renovering inom el och installation, anpassade för både bostäder och kommersiella fastigheter. Vår expertis täcker allt från uppgradering av befintliga elsystem till installation av moderna, energieffektiva lösningar. Vi förstår vikten av att kombinera funktionalitet med estetik och arbetar nära våra kunder för att säkerställa att varje projekt möter deras specifika behov och önskemål. Vårt team är specialiserat på att leverera högkvalitativa resultat, från planering till slutförande, med fokus på säkerhet, hållbarhet och teknisk innovation. Kontakta oss för att diskutera dina renoveringsbehov och få en skräddarsydd offert från branschens experter.'
                backgroundColor='#89BF50'
                textColor='#00354E'
                titleColor='#00354E'
            />
            <AccordionComponent
                title='Installation'
                description='Egestam och Mattsson erbjuder specialanpassade installationstjänster för moderna värmesystem, smarta hem, effektiva kontorslösningar, avancerade säkerhetssystem och omfattande datainstallationer. Vår breda erfarenhet garanterar installationer som inte bara ökar komforten utan även energieffektiviteten och säkerheten i din fastighet. Vi engagerar oss i ett nära samarbete med våra kunder för att förstå deras unika behov, säkerställa funktionell och estetiskt tilltalande design och implementera de senaste innovationerna. Från grundlig planering till precision i utförandet, är vårt expertteam dedikerat till detaljer och de högsta standarderna av säkerhet och hållbarhet. Kontakta Egestam och Mattsson för att utforska hur vi kan transformera ditt utrymme till en intelligent och energismart miljö.                '
                backgroundColor='#00354E'
                textColor='#FFFFFF'
            />
        </div>
        <div className='w-full box-border hidden md:block'>
            <AccordionComponent
                title='Nybyggnation'
                description='Vid nybyggnation, oavsett om det gäller bostäder, kommersiella lokaler eller kontor, är kvalitetsinstallationer av el och datanätverk kritiska. Dessa installationer omfattar en rad tjänster från belysning och uppvärmning till avancerade datanätverk och kommunikationssystem. Integration av moderna teknologier som smarta hem- och kontorslösningar, samt energieffektiva installationer, är centrala för att skapa en hållbar, säker och effektiv miljö anpassad för framtida behov. Som experter på området är Egestam & Mattsson de du kan lita på för att leverera högkvalitativa installationer. Kontakta oss för  att ta det första steget mot en framtidssäker fastighet.'
                backgroundColor='#00354E'
                textColor='#FFFFFF'
            />
            <AccordionComponent
                title='Renovering'
                description='Egestam och Mattsson erbjuder omfattande tjänster för renovering inom el och installation, anpassade för både bostäder och kommersiella fastigheter. Vår expertis täcker allt från uppgradering av befintliga elsystem till installation av moderna, energieffektiva lösningar. Vi förstår vikten av att kombinera funktionalitet med estetik och arbetar nära våra kunder för att säkerställa att varje projekt möter deras specifika behov och önskemål. Vårt team är specialiserat på att leverera högkvalitativa resultat, från planering till slutförande, med fokus på säkerhet, hållbarhet och teknisk innovation. Kontakta oss för att diskutera dina renoveringsbehov och få en skräddarsydd offert från branschens experter.'
                backgroundColor='#89BF50'
                textColor='#00354E'
            />
            <AccordionComponent
                title='Installation'
                description='Egestam och Mattsson erbjuder specialanpassade installationstjänster för moderna värmesystem, smarta hem, effektiva kontorslösningar, avancerade säkerhetssystem och omfattande datainstallationer. Vår breda erfarenhet garanterar installationer som inte bara ökar komforten utan även energieffektiviteten och säkerheten i din fastighet. Vi engagerar oss i ett nära samarbete med våra kunder för att förstå deras unika behov, säkerställa funktionell och estetiskt tilltalande design och implementera de senaste innovationerna. Från grundlig planering till precision i utförandet, är vårt expertteam dedikerat till detaljer och de högsta standarderna av säkerhet och hållbarhet. Kontakta Egestam och Mattsson för att utforska hur vi kan transformera ditt utrymme till en intelligent och energismart miljö.                '
                backgroundColor='#00354E'
                textColor='#FFFFFF'
            />
        </div>
        </>
    );
}

export default Description;
