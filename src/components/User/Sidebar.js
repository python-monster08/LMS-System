import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="card">
            <h5 className="card-header">User Dashboard</h5>
            <ul class="list-group list-group-flush">
                <Link to="/user-dashboard" class="list-group-item list-group-item-action active" aria-current="true">Dashboard</Link>
                <Link to="/my-courses" class="list-group-item list-group-item-action " aria-current="true">My Courses</Link>
                <Link to="/favorite-courses" class="list-group-item list-group-item-action " aria-current="true">Favorite Course</Link>
                <Link to="/recommended-courses" class="list-group-item list-group-item-action " aria-current="true">Recommended Courses</Link>
                <Link to="/profile-settings" class="list-group-item list-group-item-action " aria-current="true">Profile Settings</Link>
                <Link to="/change-password" class="list-group-item list-group-item-action " aria-current="true">Change Password</Link>
                <Link to="/user-login" class="list-group-item list-group-item-action text-danger " aria-current="true">Logout</Link>
            </ul>
        </div>
    );
}

export default Sidebar;