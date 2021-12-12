import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
const Course = () => {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      Course
      <hr></hr>
      <NavLink to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <NavLink
        style={({isActive}) => {
          return {
            backgroundColor: isActive ? "red" : "white",
            color: isActive ? "white" : "black",
          };
        }}
        to={`/learn/courses/test`}
      >
        tests
      </NavLink>
      <ul>
        <Outlet />
      </ul>
    </div>
  );
};

export default Course;
