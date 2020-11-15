import React from 'react';
import { serviceRequest } from '../../service/serviceRequest';
import logo from '../../../assets/images/sample.png'

class AppComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      userDetail: [],
      error: "",
      username: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  handleUsernameChange(e: any) {
    this.setState({ username: e.target.value });

  }
  handleEmailChange(e: any) {
    this.setState({ password: e.target.value });
  }

  /**User login */
  async login(event: any) {
    event.preventDefault();

    console.log(this.state)
    const options: any = {
      method: "post",
      url: 'https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth',
      data: { username: this.state.username, password: this.state.password }
    };
    /**I was  getting forbidden error while calling api thats way commented code*/
    let res: any;// = await serviceRequest.request(options);
    console.log(res)
    if (!res) {
      this.setState({
        error: "Incorrect Email or password"
      })
    }
    const successResponse = {
      data: {
        activeUsers: 231,
        inactiveUsers: 454,
        userLogs: [
          {
            firstName: 'Mark',
            lastName: 'Otto',
            phoneNumber: '928-339-5901',
            Address: '1221 Clarksburg Park Road, JBPHH, Hawaii-96860'
          },
          {
            firstName: 'Job',
            lastName: 'Thornton',
            phoneNumber: '528-329-5924',
            Address: '3698'
          },
          {
            firstName: 'Florence',
            lastName: 'freebies',
            phoneNumber: '343-123-5457',
            Address: '3816 Melody Lane, Midlothian, Virginia-23113'
          }
        ]
      }
    };
    this.props.history.push({
      pathname: '/users',
      state: successResponse.data
    });
    this.setState({
      isDashboard: true
    })
  };
  public render() {
    return (
      <div className="row p-3">
        <div className="col-lg-7" id="myContainer">
          <img src={logo} alt="No image found" />
          <div className="my-text-center1">
            Welcome Back!
                </div>

          <div className="my-text-center2">
            <span> Lead paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Duis mollis, est non commodo luctus.</span>
          </div>


        </div>
        <div className="col-lg-5">
          <div className="form-center">
            <form className="text-center" onSubmit={this.login}>
              <h3 className="primary">Let's Get Started</h3>
              <div className="form-group">
                <input type="email" name="username"
                  onChange={this.handleUsernameChange}
                  className="form-control border-radius" id="email"
                  placeholder="example@gmail.com" />
              </div>
              <div className="form-group">
                <input type="password" name="password"
                  className="form-control border-radius" id="pwd"
                  onChange={this.handleEmailChange}
                  placeholder="********" />
              </div>
              <div className="text-danger">{this.state.error}</div>

              <button type="submit" className="btn-xl">Sign In</button>
            </form>
          </div>

        </div>
      </div>

    );
  }
}
export default AppComponent
