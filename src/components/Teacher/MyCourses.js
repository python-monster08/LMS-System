import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function MyCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"> My Courses</h5>
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
                                        <td>Polity</td>
                                        <td><Link to="/">Ashis Sir</Link></td>
                                        <td>
                                            <button className=" btn btn-danger btn-sm me-3 ">Delete</button>
                                            <button className="btn btn-warning btn-sm">Update</button>
                                        </td>
                                        </tr>
                                    <tr>
                                        <td>History</td>
                                        <td><Link to="/">Tarun Sir</Link></td>
                                        <td>
                                            <button className=" btn btn-danger btn-sm me-3 ">Delete</button>
                                            <button className="btn btn-warning btn-sm">Update</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td><Link to="/">Arzoo Mam</Link></td>
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
export default MyCourses;