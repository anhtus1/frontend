import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState({username: event.target.value})
    // }
    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }


    // đa hình
    handleChange(event) {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`) //URL có tên người dùng
            //this.setState({showSuccessMessage: true})
            //this.setState({hasLoginFailed: false})
        }
            
        else {
            console.log('Failed')
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessMessage: false})
        }
            
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}


export default LoginComponent