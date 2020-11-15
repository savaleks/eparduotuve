import React from "react";
import './login.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from '../../components/custom-button/custom-button .component';
import {loginWithGoogle} from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props) {
        super(props);
    

    this.state = {
        email: '',
        password: ''
    }
}

handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
}

handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value})
}

render() {
    return (
        <div className='login'>
            <h2>As turiu paskyra</h2>
            <span>Prisijungti su el.pastu ir slaptazodziu</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                handleChange={this.handleChange} 
                label="el.pastas" 
                required />
                
                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password} 
                handleChange={this.handleChange} 
                label="slaptazodis" 
                required />
                <div className='buttons'>
                    <CustomButton type="submit">Prisijungti</CustomButton>
                    <CustomButton onClick={loginWithGoogle} isGoogleSignIn>
                    Prisijungti su Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}
}

export default Login;