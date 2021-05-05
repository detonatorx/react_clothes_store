import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function SignUp() {
  const [userAuth, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = userAuth;

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
      dispatch({ type: 'SET_CURRENT_USER', payload: userAuth });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setUser({ ...userAuth, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userAuth.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userAuth.email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userAuth.password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userAuth.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
