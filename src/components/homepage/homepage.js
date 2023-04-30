// import React from 'react'
// import "./homepage.css"

// const Homepage = ({setLoginUser}) => {
//   return (
//     <div className='homepage'>
//         <h1> Hello Homepage</h1>
//         <div className=' button' onClick={()=>setLoginUser({})}>Logout</div>

//     </div>
//   )
// }

// export default Homepage


import React from "react"
import "./homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Homepage = ({ setLoginUser }) => {
    return (

        <div className="homepage">

            <form>
               
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail3" placeholder="Enter your age" />
                    </div>
                </div>
                {/* <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div> */}
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">gender</legend>
                        <div class="col-sm-12">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    female
                                </label>
                            </div>

                        </div>
                    </div>
                </fieldset>
                {/* <div class="form-group row">
                    <div class="col-sm-2">Checkbox</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                        </div>
                    </div>
                </div> */}

            </form>
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
