import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function SignIn() {
  const [user, setUser] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({
        email: '',
        password: '',
      });

      console.log('login ok');
      dispatch({ type: 'SET_CURRENT_USER', payload: user });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={user.email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={user.password}
          required
          onChange={handleChange}
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
}
