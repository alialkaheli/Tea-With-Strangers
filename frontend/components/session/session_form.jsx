import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        city_name: "",
        fname: "",
        image: "",
        profPic: 0
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
      }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.form(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    };

    demoLogin(){
        if (this.props.formType === "Sign In"){
          return(
            <input className="submit-box"
          onClick={() => {
            this.setState  ({
              email: "Guest@guest.com",
              password: "Guest123"})
              this.handleSubmit()
            }
          }
          type="submit"
          value="Demo Login"
          />
        )
      }
    }

    render(){
      console.log(this.state);
        // let fname = ""
        // let city = ""
        // if(this.props.formType == 'signup'){
        //     fname = <label>
        //             First Name: 
        //             <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
        //         </label>
        //     city = <label>
        //             City: 
        //             <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
        //         </label>
        // }
    
        // return(
        //     <div>
        //         <form onSubmit={this.handleSubmit}>
        //             {fname}
        //             <br />
        //             <label>
        //                 Email: 
        //                 <input type="text" value={this.state.email} onChange={this.update('email')}/>
        //             </label>
        //             <br />
        //             <label>
        //                 Password: 
        //                 <input type="password" value={this.state.password} onChange={this.update('password')}/>
        //             </label>
        //             <br />
        //             {city}
        //             <br />
        //             <input type="submit" value={this.props.formType} />
        //         </form>

        //     </div>
        // )
        let error =""
        if(!!this.renderErrors() === true){
            error = <h1 className="error-m">{this.renderErrors()}</h1>
        }
        if(this.props.formType ==='Sign Up'){
            return <div className="signup-container">
                {error}
                <form onSubmit={this.handleSubmit}>
                  <h1 className="signin">Join game time!</h1>
                  <p className="signin-m">
                    Many strangers had played basketball games with
                    each other. Create an account and you'll be on
                    your way to join basketball games.
                  </p>

                  <label>
                    <input id="testid" placeholder="First Name" className="input-box" type="text" value={this.state.fname} onChange={this.update("fname")} />
                  </label>
                  <br />
                  <label>
                    <input placeholder="Email Address" className="input-box" type="text" value={this.state.email} onChange={this.update("email")} />
                  </label>
                  <br />
                  <label>
                    <input placeholder="Password" className="input-box" type="password" value={this.state.password} onChange={this.update("password")} />
                  </label>
                  <br />
                  <label>
                    <input placeholder="City" className="input-box" type="type" value={this.state.city_name} onChange={this.update("city_name")} />
                  </label>
                  <br />
                  <p>Select a profile image:</p>

                  <div onChange={this.update("image")} value={this.state.image} className="options-profile-img">
                    <div onClick={() => this.setState({
                          profPic: 0,
                          image:
                            "https://www.freevector.com/uploads/vector/preview/3290/FreeVector-Mickey-Mouse-And-Donald-Duck.jpg"
                        })} className={"profile-image-div " + (this.state.profPic === 0 ? "selected-class" : "")}>
                      <img src="https://www.freevector.com/uploads/vector/preview/3290/FreeVector-Mickey-Mouse-And-Donald-Duck.jpg" />
                    </div>
                    <div onClick={() => this.setState({
                          profPic: 1,
                          image:
                            "http://hatobuilico.com/wp-content/uploads/2018/06/basketball-ball-clip-art-basketball-hoop-pictures-free-clipart.jpg"
                        })} className={"profile-image-div " + (this.state.profPic === 1 ? "selected-class" : "")}>
                      <img src="http://hatobuilico.com/wp-content/uploads/2018/06/basketball-ball-clip-art-basketball-hoop-pictures-free-clipart.jpg" />
                    </div>
                    <div onClick={() => this.setState({
                          profPic: 2,
                          image:
                            "https://www.fg-a.com/sports/basketball-fire-black-2018.jpg"
                        })} className={"profile-image-div " + (this.state.profPic === 2 ? "selected-class" : "")}>
                      <img src="https://www.fg-a.com/sports/basketball-fire-black-2018.jpg" />
                    </div>
                    <div onClick={() => this.setState({
                          profPic: 3,
                          image:
                            "https://i.pinimg.com/236x/8c/f1/00/8cf100dc34ff8f0ae71a2ffb25859fb5--sylvester-tweety-classic-cartoons.jpg"
                        })} className={"profile-image-div " + (this.state.profPic === 3 ? "selected-class" : "")}>
                      <img src="https://i.pinimg.com/236x/8c/f1/00/8cf100dc34ff8f0ae71a2ffb25859fb5--sylvester-tweety-classic-cartoons.jpg" />
                    </div>
                    <div onClick={() => this.setState({
                          profPic: 4,
                          image:
                            "https://www.wentzville.k12.mo.us/cms/lib/MO02202303/Centricity/Domain/107/mean-basketball_right.png"
                        })} className={"profile-image-div " + (this.state.profPic === 4 ? "selected-class" : "")}>
                      <img src="https://www.wentzville.k12.mo.us/cms/lib/MO02202303/Centricity/Domain/107/mean-basketball_right.png" />
                    </div>
                  </div>

                  <br />
                  <input height="40" className="submit-box" type="submit" value="Join To Play" />
                  <br />
                  <p className="switch">{this.props.navLink}</p>
                </form>
              </div>;
        }else{
            return(
            <div className="signin-container">
            {error}
                <form onSubmit={this.handleSubmit}>
                    <h1 className="signin">Sign in stranger!</h1>
                    <p className="signin-m">It's good to have you back. Sign in here and sign up for your next tea time!</p>
                    
                    <label>
                        <input className="input-box" type="text" placeholder="Email Address" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br />
                    <label> 
                        <input className="input-box" type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br />
                    <input className="submit-box"type="submit" value={this.props.formType} />
                    <br />
                    <div >{this.demoLogin()}</div>
                    <p className="switch">{this.props.navLink}</p>
                    
                </form>

            </div>
            )
        }
    
    }
}

export default SessionForm;