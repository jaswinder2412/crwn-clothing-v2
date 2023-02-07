import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../forminput/forminput.component";
import './signup-form.style.scss'

import { UserContext } from "../../contexts/user.contexts";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
 
  const [formfields, setFormfields] = useState(defaultFormFields);
  const [error, seterror] = useState({ name: "", err: false });

  const { displayName, email, password, confirmPassword } = formfields;

  
  const resetformfields = () =>{
    setFormfields(defaultFormFields) 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      seterror({ name: "Password do not match", err: true });
      return;
    } else {
      seterror({ name: "", err: false });
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      
      resetformfields()
    } catch (error) {
      if ((error.code == "auth/email-already-in-use")) {
        seterror({ name: "Email already in use", err: true });
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
      <h2>Don't have an account ?</h2>
        <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            onChange: handleChange,
            value: displayName,
            required: true,
          }}
        />

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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
            required: true,
          }}
        />

    <span>{error.err && error.name}</span>    

      <Button children="Submit" buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit"/>
      </form>
    </div>
  );
}

export default SignUpForm;
