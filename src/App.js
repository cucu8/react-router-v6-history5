import { useState } from "react";
import { Route, Routes, Link, Navigate , useLocation} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import UserDetail2 from "./pages/UserDetail2";
import UserDetail3 from "./pages/UserDetail3";
import Dashboard from "./pages/Dashboard";
import { generatePath } from "react-router-dom";
import Learn from "./pages/Learn";
import Course from "./pages/Course";
import CourseId from "./pages/CourseId";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const testPath = generatePath("/test/asdasd", { id: 45555 });
  console.log("oluşturdugumuz test path : ", testPath);
  return (
    <div className="App">
      <div>
        <Link to="/">-Home-</Link>
        <Link to="/about">-About-</Link>
        <Link to="/user">-User-</Link>
        <Link to="/learn/courses">-Learn-</Link>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User isLoggedIn={isLoggedIn} />}>
          {/* EĞERKİ USER COMPONENTİNİN ALTINDA İLGİLİ PATH BULAMAZ İSE ROUTE İNDEXDEKİ ELEMENTİ RENDER EDER. */}
          <Route index element={<h1> Tanımlanamayan route</h1>} />
          <Route path="detail" element={<UserDetail />} />
          <Route path="detail2" element={<UserDetail2 />} />
          <Route path="detail3/:userId" element={<UserDetail3 />} />
        </Route>
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Course />}>
            <Route path=":courseId" element={<CourseId />} />
          </Route>
        </Route>
        {/* navigate ile nereye yönlenmesinisi istersek oraya yönlenmdirebiliriz. */}
        <Route path="/mypages" element={<Navigate replace to="/learn" />} />
        <Route path="dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
