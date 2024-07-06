import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function FavoriteCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"> Favorite Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Python Development</td>
                                        <td><Link to="/">Kamlesh</Link></td>
                                        <td>
                                            <button className=" btn btn-danger btn-sm me-3 ">Delete</button>
                                            <button className="btn btn-warning btn-sm">Update</button>
                                        </td>
                                        </tr>
                                    <tr>
                                        <td>YouTube Automation</td>
                                        <td><Link to="/">Akash</Link></td>
                                        <td>
                                            <button className=" btn btn-danger btn-sm me-3 ">Delete</button>
                                            <button className="btn btn-warning btn-sm">Update</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cyber Security</td>
                                        <td><Link to="/">Karan</Link></td>
                                        <td>
                                            <button className=" btn btn-danger btn-sm me-3 ">Delete</button>
                                            <button className="btn btn-warning btn-sm">Update</button>
                                        </td>
                                    </tr>
                                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
    )
}
export default FavoriteCourses;