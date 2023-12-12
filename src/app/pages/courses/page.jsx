import * as React from "react";
import NavBar from "src/components/organisms/navBar";
import CoursesList from "src/app/student/course/list";

const CoursesPage = () => {
  return (
    <>
      <NavBar />
      <CoursesList />
    </>
  );
};

export default CoursesPage;