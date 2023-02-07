
import SignUpForm from '../../components/signup/signup-form.component';
import SignInForm from '../../components/signin/signinform.component';
import './authentication.style.scss'

const SignIn = ()=>{

   
    return (
        <div className='authentication-container'>
        <SignInForm/>
        
            <SignUpForm />
        </div>
    )
}

export default SignIn
