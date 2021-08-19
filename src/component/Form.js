import React from 'react'

class Form extends React.Component {

    render() {

        
        
        return (
            <>
                <div className="col-6 offset-3">
                    <h1 className="mb-5 text-center">Login</h1>
                    <form >

                        <div className="form-group mb-2">
                            <label for="email">Email adress</label>
                            <input type="email" className={`form-control ${this.props.emailIsValid ? "is-valid" : "is-invalid"}`} placeholder="Enter email" autoComplete="off" onChange={this.props.onChangeEmail}  />
                        </div>

                        <div className="form-group mb-2">
                            <label for="password">Password</label>
                            <input type="password" id="password" className={`form-control ${this.props.passwordIsValid ? "is-valid" : "is-invalid"}`} placeholder="Enter password" checked='true' onInput={this.props.onChangePassword} />
                        </div>

                        <div className="form-check mb-2">
                            <input type="checkbox" id="form-check" className="form-check-input " onInput={this.props.onChangeRememberMe} />
                            <label for="form-check">Remember me</label>
                        </div>

                        <button onClick={this.props.onSubmit}>Submit</button>

                    </form>
                </div>


                {/* <form>
                    <div className="form-group">
                        <label for="Email1">Email address</label>
                        <input type="email" className="form-control" id="Email1" placeholder="Enter email">
                    </div>
                        <div className="form-group">
                            <label for="Password1">Password</label>
                            <input type="password" className="form-control" id="Password1" placeholder="Password">
                            
                        </div>


                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form> */}
            </>
        )
    }
}

export default Form