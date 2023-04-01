import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './pages/login/login';
import reportWebVitals from './reportWebVitals';

const handleSubmit = (event: String) => {
  // handle form submission logic here
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Form onSubmit={handleSubmit} />
  </React.StrictMode>,
);


reportWebVitals();
