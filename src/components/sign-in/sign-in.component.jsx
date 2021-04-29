import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default function SignIn() {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" label="email" required />
        <FormInput type="password" name="password" label="password" required />
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
      </form>
    </div>
  );
}
