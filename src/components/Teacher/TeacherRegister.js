function TeacherRegister(){
    return(
        <div className="container mt-5">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card">
                            <h3 className="card-header">Teacher Register</h3>
                            <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Full name</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"/>
                                </div>
                                <div className="mb-3">
                                    <label for="interests" className="form-label">Skills</label>
                                    <textarea name="interests" className="form-control" id="interests"></textarea>
                                    <div id="emailHelp" class="form-text">Please maintion the your skills like: Python, Django, PhP, Html etc.</div>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default TeacherRegister;