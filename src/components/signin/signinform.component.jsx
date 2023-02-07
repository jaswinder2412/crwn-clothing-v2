import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth, signInWithGooglePopup, signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../forminput/forminput.component"; 
import './signinform.style.scss'
import { UserContext } from "../../contexts/user.contexts";

const defaultFormFields = { 
  email: "",
  password: "", 
};

function SignInForm() {

  const [formfields, setFormfields] = useState(defaultFormFields);
  const [error, seterror] = useState({ name: "", err: false });

  const {  email, password  } = formfields;
 

  const resetformfields = () =>{
    setFormfields(defaultFormFields)
    seterror({ name: " ", err: false });
  }


  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
   
    await createUserDocumentFromAuth(user);
}


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthWithEmailAndPassword(
        email,
        password
      ); 
     // console.log(user); 
      resetformfields(); 

    } catch (error) {
   
        if ((error.code == "auth/wrong-password") || (error.code == "auth/user-not-found")) {
            seterror({ name: "Incorrect Credentials", err: true });
          } else {
            seterror({ name: " ", err: false });
          }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
        <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
 

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            onChange: handleChange,
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            onChange: handleChange,
            value: password,
            required: true,
          }}
        />
    <span>       {error.err && error.name}</span>
<div className="button-container">
      <Button children="Sign In" buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit"/>
      
      <Button  children="Sign In With Goolge" buttonType={BUTTON_TYPE_CLASSES.google}type="button"  onClick={logGoogleUser}/>

</div>
      </form>
    </div>
  );
}

export default SignInForm;
