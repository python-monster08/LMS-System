import { Link } from "react-router-dom";
function Home(){
    return (
        <div className="container mt-4">
            {/* Latest Courses Start */}
            <h3 className="pb-1 mb-4">Latest Courses <a href="/about" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
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
                            <img src="logo512.png" className="card-img-top" alt="..."/>
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
                            <img src="logo512.png" className="card-img-top" alt="..."/>
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
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest Courses End */}

            {/* Popular Courses Start */}
            <h3 className="pb-1 mb-4 mt-5">Popular Courses <a href="/about" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
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
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <a href="/about" className="btn btn-primary">Show Detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
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
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Course title </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popular Courses End */}

            {/* Popular Teachers Start */}
            <h3 className="pb-1 mb-4 mt-5">Popular Teachers <a href="/about" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popular Teachers End */}

            {/* Featured Teachers Start */}
            <h3 className="pb-1 mb-4 mt-5">Featured Teachers <a href="/about" className="float-end">See All</a></h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/about"> 
                            <img src="logo512.png" className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><a href="/about"> Teacher Name </a></h5>
                            <Link to="/about" className="btn btn-primary">Show Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured Teachers End */}

            {/* Student Testimonial Start */}
            <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
            <div id="carouselExampleAutoplaying" class="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
                <div class="carousel-item">
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

            {/* Student Testimonial End */}

        </div>
    );
}

export default Home;
