import React from 'react'
import { Form } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    toggleComponents = () => {
        if (!this.state.showFirst) {
          localStorage.setItem('showFirst', true);
        } else {
          localStorage.removeItem('showFirst');
        }
        this.setState({ showFirst: !this.state.showFirst });
      };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

    login = event => {
        event.preventDefault();
        localStorage.setItem('username',this.state.username)
        this.setState({ password: '' })
        
        window.location.reload();
      }
    
    render () {
        return (
        <div>
            <Form className = 'formLogin' onSubmit={this.login}>

                <Input 
                    type = "text"
                    name = "username"
                    placeholder = "username"
                    value = {this.state.username}
                    onChange = {this.handleChanges}/>

                <Input 
                    type = "text"
                    name = "password"
                    placeholder = "password"
                    value = {this.state.password}
                    onChange = {this.handleChanges}/>

                <Button type = "submit">Login</Button>

            </Form>
        </div>
        )
    }
}



export default Login;