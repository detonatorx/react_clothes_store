import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default function SignUp() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      console.log('reg ok');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
