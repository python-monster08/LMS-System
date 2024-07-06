import { Link } from "react-router-dom";

function TeacherSidebar(){
    return(
        <div className="card">
            <h5 className="card-header">Teacher Dashboard</h5>
            <ul class="list-group list-group-flush">
                <Link to="/teacher-dashboard" class="list-group-item list-group-item-action active" aria-current="true">Dashboard</Link>
                <Link to="/add-courses" class="list-group-item list-group-item-action " aria-current="true">Add Courses</Link>
                <Link to="/my-courses" class="list-group-item list-group-item-action " aria-current="true">My Courses</Link>
                <Link to="/my-users" class="list-group-item list-group-item-action " aria-current="true">My Users</Link>
                <Link to="/profile-settings" class="list-group-item list-group-item-action " aria-current="true">Profile Settings</Link>
                <Link to="/change-password" class="list-group-item list-group-item-action " aria-current="true">Change Password</Link>
                <Link to="/teacher-login" class="list-group-item list-group-item-action text-danger " aria-current="true">Logout</Link>
            </ul>
        </div>
    );
}

export default TeacherSidebar;