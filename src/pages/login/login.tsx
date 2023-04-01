import React from 'react';
import logo from '../../logo.svg';
import '../../styles/login/login.css';
import '../../styles/common/titles.css';
import { useState } from 'react';

interface FormProps {
  onSubmit: (email: string, password: string) => void;
}

interface FormProps {
  onSubmit: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Email:
        <input className="form__input" type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label className="form__label">
        Password:
        <input className="form__input" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button className="form__button" type="submit">Log In</button>
    </form>
  );
};

export default Form;
