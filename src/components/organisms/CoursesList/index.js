"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonText from "src/components/atoms/Button";
import LoginPage from "/src/app/pages/login/page.jsx";
import RegistrationPage from "/src/app/pages/registration/page.jsx";
import BasicAlert from "src/components/atoms/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createClient } from "@supabase/supabase-js";

const Wrapper = styled.div`
  padding: 15px 30px;
  color: var(--basic-text-color);
`;
const CoursesTitle = styled.h2`
  padding-bottom: 40px;
`;
const CoursesBox = styled.ul`
  max-width: 1000px;
  text-align: justify;
  padding: 30px 40px;
  margin: 30px 0;
  border-radius: 8px;
  border: solid 1px whitesmoke;
  box-shadow: 2px 2px 2px 2px #fcf4d9;
  background-color: white;
`;
const ImageContainer = styled.div`
  display: flex;
`;
const DetailsContainer = styled.ul`
  padding: 0 20px;
`;
const CourseEl = styled.li`
  list-style: none;
  padding: 10px 0;
  margin-top: 10px;
`;
const SignupButton = styled(ButtonText)`
  margin: 20px 0;
  background-color: #5072a7;
`;
const Img = styled.img`
  max-width: 150px;
  max-height: 120px;
  background-color: white;
  priority={false}
`;
const SignupAlert = styled(BasicAlert)`
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1;
`;

const ListOfCourses = [
  {
    img: "/images/A1-level.png",
    title: "Kurs A1",
    length: "40 lekcji",
    time: "środa 17:00 oraz piątek 16:00",
    description:
      "Ten kurs nauczy cię podstaw językowych. Są to przede wszystkim sformułowania dotyczące życia codziennego, przedstawianie siebie i innych, formułowanie pytań odnoszących się do życia prywatnego oraz dotyczących miejsca zamieszkania, posiadanych rzeczy i innych osób. Nabędziesz równiez umiejętność przeprowadzenia prostej rozmowy.",
  },
  {
    img: "/images/A2-level.png",
    title: "Kurs A2",
    length: "50 lekcji",
    time: "poniedziałek 19:00 oraz piątek 17:30",
    description:
      "Ten kurs nauczy cię podstaw gramatycznych. Podczas zajęć nauczysz się rozumieć zwroty i często używane wyrażenia dotyczące życia codziennego (np. bardzo podstawowe informacje dotyczące życia osobistego, rodziny, zakupów, otoczenia i pracy). Dodatkowo, nauczysz się porozumiewać w prosty sposób w codziennych sytuacjach, wymagających jedynie bezpośredniej wymiany zdań na znane tematy. ",
  },
  {
    img: "/images/B1-level.png",
    title: "Kurs B1",
    length: "50 lekcji",
    time: "wtorek 17:30 oraz czwartek 17:00",

    description:
      "Ten kurs nauczy cię budowania rozbudowanych zdań. Będziesz rozumieć główne przesłanie prostych tekstów na znane sobie tematy, w tym dotyczących pracy, edukacji lub czasu wolnego. Nauczysz się tworzyć proste i spójne teksty na tematy znane lub leżące we własnym obszarze zainteresowań oraz opisywać doświadczenia, wydarzenia, pragnienia i aspiracje i  zwięźle przedstawić swoje opinie i plany.",
  },
  {
    img: "/images/B2-level.png",
    title: "Kurs B2",
    length: "60 lekcji",
    time: "poniedziałek 17:00 oraz czwartek 18:00",

    description:
      "Ten kurs nauczy cię płynnego wypowiadania się. Na zajęciach nauczysz się rozumieć znaczenie głównych wątków zawartych w złożonych wypowiedziach na tematy konkretne i abstrakcyjne, w tym merytoryczne dyskusje z zakresu jej specjalności. Bedziesz w stanie porozumiewać się na tyle płynnie i spontanicznie, by przeprowadzić rozmowę z rodzimym użytkownikiem danego języka, bez specjalnego wysiłku żadnej ze stron oraz formułować przejrzyste, szczegółowe wypowiedzi, jednocześnie  wyjaśniając swój punkt widzenia na dany temat oraz rozważając wady i zalety różnych możliwości.",
  },
];

const CourseItem = ({ course, handleOpenSignup }) => (
  <CoursesBox>
    <ImageContainer>
      <Img src={course.img} alt={course.title}></Img>
      <DetailsContainer>
        <h3>{course.title}</h3>
        <CourseEl>Kurs trwa: {course.length}</CourseEl>
        <CourseEl>Zajęcia odbywają się w: {course.time}</CourseEl>
      </DetailsContainer>
    </ImageContainer>
    <CourseEl>{course.description}</CourseEl>
    <SignupButton
      variant="contained"
      text="Zapisuję się!"
      onClick={handleOpenSignup}
    />
  </CoursesBox>
);

const CourseList = ({ courses, handleOpenSignup }) => (
  <div>
    {courses.map((course, index) => (
      <CourseItem
        key={index}
        course={course}
        handleOpenSignup={handleOpenSignup}
      />
    ))}
  </div>
);

const CoursesList = () => {
  const [showSignup, setShowSignup] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOpenSignup = () => {
    setShowSignup(true);
  };
  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  const supabaseURL = "https://grzsoccvxlecdfdlexrl.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyenNvY2N2eGxlY2RmZGxleHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTExNjAsImV4cCI6MjA0MjMyNzE2MH0.xxdTk_R4WU_r9TH4sFoP5a-X5ufP1VunC2biVaUZH4c";

  const supabase = createClient(supabaseURL, supabaseAnonKey);

  const submitToSupabase = async () => {
    const { data, error } = await supabase
      .from("online-courses-students")
      .insert([
        {
          name,
          email,
          phone_number: phoneNumber,
        },
      ]);
    if (error) {
      alert("Błąd w zapisywaniu na kurs, spróbuj ponownie.", error);
    } else {
      alert("Super, zostałeś zapisany na kurs!", data);
    }
  };

  return (
    <Wrapper>
      <CoursesTitle>Tutaj możesz zapisać się na kursy online:</CoursesTitle>

      <CourseList courses={ListOfCourses} handleOpenSignup={handleOpenSignup} />
      <Dialog
        open={showSignup}
        onClose={handleCloseSignup}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseSignup();
          },
        }}
      >
        <DialogTitle
          style={{
            color: "var(--basic-text-color)",
            margin: "20px 0",
            textAlign: "center",
          }}
        >
          Zapisz się na kurs poniżej
        </DialogTitle>

        <DialogContent>
          <DialogContentText style={{ color: "var(--basic-text-color)" }}>
            Aby zapisać się na wybrany kurs online, podaj swoje dane kontaktowe.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Imię i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Adres email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Numer telefonu"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phoneNumber"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0 20px 0",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={submitToSupabase}
            style={{ backgroundColor: "#5072a7" }}
          >
            Zapisuję się!
          </Button>
          <Button
            variant="contained"
            onClick={handleCloseSignup}
            style={{ padding: "5px 35px", backgroundColor: "#5072a7" }}
          >
            Anuluj
          </Button>
        </DialogActions>
      </Dialog>

      {showAlert && (
        <SignupAlert
          severity="success"
          text="Zapisałeś się na kurs"
          onClose={() => setShowAlert(false)}
        />
      )}
    </Wrapper>
  );
};

export default CoursesList;
