import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail(){
    let {course_id} = useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" class="img-thumbnail" alt="Course Image"/>
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Course Discription Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolore error ipsum officiis quisquam deleniti repellat aut suscipit ratione veritatis. Iusto repellendus animi, qui ullam porro sapiente cum illo id error laborum placeat sit ad corrupti quas consequatur sunt quis hic, vel vero. Unde eaque magnam mollitia quis, commodi ipsa sit suscipit vel provident enim architecto nisi soluta quisquam consectetur, maiores, iusto inventore. Maxime, temporibus molestiae molestias dolores sequi unde quod fuga reprehenderit non neque quo dicta eum repellat natus placeat ullam veritatis est enim expedita, voluptate quae eaque laborum voluptatum tempore. Facere dolores accusamus exercitationem perspiciatis quos nostrum maiores!</p>
                    <p className="fw-bold"> Course By: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold"> Duration: 8 Hours 30 Minuts</p>
                    <p className="fw-bold"> Total Enrolled: 499 Students</p>
                    <p className="fw-bold"> Rating: 4.5/5</p>
                </div>
            </div>
            {/* Course Videos */}
            <div class="card mt-4">
                <div className="card-header">
                    <h5>Course Videos</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Introduction 
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Project Setup 
                        <span className="float-end">
                            <span className="me-5">2 Hour 40 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Start with functions
                        <span className="float-end">
                            <span className="me-5">3 Hour 45 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Start with Classes 
                        <span className="float-end">
                            <span className="me-5">4 Hour 30 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Start with exception Handling 
                        <span className="float-end">
                            <span className="me-5">5 Hour 00 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                    <li class="list-group-item">Start with file Handling 
                        <span className="float-end">
                            <span className="me-5">4 Hour 50 Minuts</span>
                            <button className="btn btn-danger"><i class="bi bi-youtube"></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            {/* Latest Courses Start */}
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"> 
                            <img src="/logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/detail/1"> Course title </a></h5>
                            <Link to="/detail/1" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="/logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="/logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="/logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Courses End */}
        </div>   
    );
}
export default CourseDetail;