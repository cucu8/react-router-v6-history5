import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CourseId = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  return (
    <div>
      <h1>Url params is :{courseId}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", {
            state: { courseName: courseId, price: 599 },
          });
        }}
      >
        Course Price
      </button>
      <Link
        to="/dashboard"
        state={{
          courseName: "test name",
          price: 1000,
        }}
      >
     
        test Price link
      </Link>
      <li>course-1</li>
      <li>course-2</li>
      <li>course-3</li>
      <li>course-4</li>
    </div>
  );
};

export default CourseId;
