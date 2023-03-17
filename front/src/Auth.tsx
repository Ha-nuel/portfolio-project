import { useState } from 'react';
import { useMutation } from 'react-query';
import { login, signup } from './api';
import Cookies from 'js-cookie';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: loginUser, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      const { token } = data;
      Cookies.set('jwtToken', token);
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Password'
        required
      />
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { mutate: signupUser, isLoading } = useMutation(signup);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    signupUser({ email, password, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='Email'
        required
      />
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Password'
        required
      />
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Name'
        required
      />
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Signup'}
      </button>
    </form>
  );
};
