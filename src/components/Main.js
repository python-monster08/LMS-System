import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import CourseDetail from "./CourseDetail";
import { Routes as Switch, Route } from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherDashboard from './Teacher/TeacherDashboard';


function Main() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        {/* User or Student */}
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/favorite-courses" element={<FavoriteCourses />} />
        <Route path="/recommended-courses" element={<RecommendedCourses />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Teacher */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Switch>
      <Footer />
    </div> 
  );
}

export default Main;
