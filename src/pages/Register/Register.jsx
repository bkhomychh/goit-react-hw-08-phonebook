import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      default:
        console.log('This field does not exist');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const credentials = {
      name,
      email,
      password,
    };
    dispatch(authOperations.register(credentials));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
