import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">LMS System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About Us</Link>
                    <a className="nav-link" href="#">Courses</a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Teacher
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                            <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item fw-bold" to="/teacher-dashboard"> Dashboard </Link></li>
                            <li><a className="dropdown-item text-danger" href="/teacher-login"> Logout </a></li>
                            
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                            <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item fw-bold" to="/user-dashboard"> Dashboard </Link></li>
                            <li><a className="dropdown-item text-danger" href="/user-login"> Logout </a></li>
                            
                        </ul>
                    </li>
                     
                    
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;


