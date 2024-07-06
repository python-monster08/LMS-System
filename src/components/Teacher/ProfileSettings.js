import { Link } from "react-router-dom";
import { Routes as Switch, Route } from 'react-router-dom';
import TeacherSidebar from "./TeacherSidebar";

function ProfileSettings(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Profile Settings</h5>
                    <div className="card-body">
                    <div class="mb-3 row mt-4">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
                        <div class="col-sm-10">
                        <input type="text" readnly class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row mt-4">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" readnly class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="uploadfile" class="col-sm-2 col-form-label">Profile Picture</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control" id="uploadfile" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="interests" className="col-sm-2 col-form-label">Interests</label>
                        <div class="col-sm-10">
                            <textarea name="interests" className="form-control" id="interests"></textarea>
                            <div id="emailHelp" class="form-text">Please maintion the your interested courses name like: Python, Django, PhP, Html etc.</div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm">Update</button>
                    </div>
                </div>
                
                </section>
            </div>
        </div>
    );
}

export default ProfileSettings;