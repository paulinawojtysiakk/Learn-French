"use client";
import React, { Fragment } from "react";
import styles from "src/app/page.module.css";
import styled from "styled-components";
import NavBar from "src/components/organisms/navBar";
import Link from "next/link";
import Footer from "src/components/organisms/footer";
import Image from "next/image";
import LearningImage from "public/images/LearningImage.jpg";
import TeamImage from "public/images/TeamImage.jpg";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--basic-text-color);
`;

const IntroContainer = styled.div`
  display: flex;
  padding:10px;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100vw;
  }
  @media screen and (min-width: 769px) and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100vw;
  }
`;

const Introduction = styled.div`
  margin: 40px;
  max-width: 600px;
  text-align: justify;
  line-height: 2;
`;
const HoverImage = styled(Image)`
transition: transform 0.3s ease, opacity 0.3s ease;

&:hover{
transform: scale(0.98);
opacity: 0.8;
}

  width: 100%;
  max-width: 100vw;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px #2c2d34;

  @media (min-width: 769px) {
    width: auto;
    max-height: 380px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    max-width: 100vw;
  }
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px;

 @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 40px 0;
    padding: 15px;
    max-width: 100vw;
  }
  @media screen and (min-width: 769px) and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100vw;
  }
`;

const ValuesTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ValueElement = styled.p`
  text-align: justify;
  margin: 20px 0;
    line-height: 2;
    
    @media (max-width: 768px){
    margin: 0;
}
`;
const ProgramsContainer = styled.div`
  margin: 50px 10px;
`;

const ProgramsTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  padding: 10px;
`;

const ProgramCard = styled.div`
  background-color: #fffdf6;
  border: 1px solid #ece8d9;
  box-shadow: 2px 2px 2px 2px #fff4e1;
  border-radius: var(--border-radius);
  margin: 30px 0;
  padding: 50px;
  text-align: center;
transition: transform 0.3s ease, opacity 0.3s ease;

&:hover{
transform: scale(1.1);
}

@media (max-width: 768px){
margin: 30px 10px;
}

`;

const ProgramName = styled.h3`
  margin-bottom: 20px;
`;

const ProgramDescription = styled.p`
  line-height: 1.5;
  font-size: 14px;
`;

const About = () => {
  return (
    <div className={styles.wrapper} >
      <NavBar />
      <Wrapper className={styles.main}>
      <IntroContainer>
          <HoverImage
            src={TeamImage}
            alt="Our Team"
          />
          <Introduction>
            <h1>Kim jesteśmy?</h1>
            <p>
              W Learn French wierzymy, że nauka języka jest przygodą, która
              otwiera drzwi do nowych kultur i możliwości. Nasza platforma
              powstała dzięki zaangażowaniu zespołu pasjonatów języka francuskiego,
              którzy chcą inspirować innych do nauki. Oferujemy różnorodne
              kursy, które dostosowujemy do potrzeb uczniów w każdym wieku i na
              każdym poziomie zaawansowania. Nasze podejście kładzie nacisk na
              interaktywność, komunikację oraz praktyczne umiejętności.
            </p>
          </Introduction>
        </IntroContainer>

        <ValuesContainer>
          <ValuesTitle>Nasza Wizja</ValuesTitle>
          <ValueElement>
          Pragniemy stworzyć globalną społeczność uczniów języka francuskiego, którzy dzielą się swoimi doświadczeniami i pasjami związanymi z tym pięknym językiem. Wierzymy, że francuski nie jest tylko narzędziem komunikacji, ale także kluczem do zrozumienia bogatej historii i kultury krajów francuskojęzycznych. Nasza platforma ma na celu połączenie ludzi z różnych zakątków świata, którzy, podobnie jak my, mają zamiłowanie do języka francuskiego i chcą odkrywać jego tajniki oraz subtelności.
      </ValueElement>
          <ValueElement>
          Naszą misją jest stworzenie inspirującej atmosfery, w której każdy uczeń będzie mógł rozwijać swoje umiejętności językowe poprzez różnorodne zajęcia oraz interaktywne podejście do nauki. Uczniowie nie tylko przyswajają wiedzę, ale również wymieniają się zasobami, wspierając się nawzajem na różnych etapach ich językowej podróży. Chcemy, aby nasza platforma stała się miejscem, gdzie mogą nawiązywać przyjaźnie, które przetrwają poza granicami języka, tworząc zróżnicowaną sieć wsparcia i inspiracji. Wierzymy, że nauka języka to nie tylko praca nad słownictwem czy gramatyką, ale również budowanie relacji, które mogą zmienić życie i otworzyć nowe horyzonty.
          </ValueElement>
          <ValueElement>
          Wspólnie dążymy do stworzenia przestrzeni, w której każdy poczuje się swobodnie, aby eksperymentować z językiem, zadawać pytania i odkrywać nowe możliwości. Nasza wizja to miejsce, gdzie każdy pasjonat języka francuskiego może znaleźć swoje miejsce, niezależnie od poziomu umiejętności, i rozwijać się w atmosferze pełnej szacunku, kreatywności oraz pasji.
        </ValueElement>
          
          <HoverImage src={LearningImage} alt="Learning" height="400" style={{ borderRadius: '10px', alignSelf: 'center'}} className="image-hover"/>
          
        </ValuesContainer>
        <ProgramsContainer>
          <ProgramsTitle>Nasze Kursy organizowane w nauczaniu indywidualnym i grupowym</ProgramsTitle>
          <ProgramCard>
            <ProgramName>Podstawowy Kurs Francuskiego</ProgramName>
            <ProgramDescription>
              Nasz podstawowy kurs jest idealny dla tych, którzy dopiero zaczynają
              swoją przygodę z językiem francuskim. Uczestnicy uczą się podstawowej
              gramatyki, słownictwa oraz praktycznych zwrotów.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramName>Kurs Konwersacyjny</ProgramName>
            <ProgramDescription>
              Kurs konwersacyjny skupia się na rozwijaniu umiejętności mówienia. 
              Uczestnicy angażują się w interaktywne dyskusje oraz scenki sytuacyjne.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramName>Kurs Zaawansowany</ProgramName>
            <ProgramDescription>
              Nasz kurs zaawansowany jest przeznaczony dla osób, które już mają
              pewne umiejętności w języku francuskim. Skupia się na złożonej gramatyce
              i zaawansowanym słownictwie.
            </ProgramDescription>
          </ProgramCard>
        </ProgramsContainer>

      </Wrapper>
      <Footer />
    </div>
  );
};

export default About;
