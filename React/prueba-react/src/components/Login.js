import React, { Component } from 'react';
class LoginButton extends Component {
    render() {
        return (
            <button>Iniciar Sesión</button>
        )
    }
}
class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Buenos días, Usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {loginUsuario: this.props.loginUsuario}
    }

    render() {
        return (
            <div>
              {this.state.loginUsuario
                    ? <LogoutButton />
                    : <LoginButton />}

            </div>
        )
    }
}
export default Login

