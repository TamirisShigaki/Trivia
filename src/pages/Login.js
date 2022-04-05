import React, { useEffect, useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (name.length > 0 && email.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
    console.log('aqui');
  }, [name, email]);
  return (
    <div>
      <label htmlFor="login-name">
        <input
          data-testid="input-player-name"
          id="login-name"
          name="name"
          value={ name }
          onChange={ ({ target }) => { setName(target.value); } }
        />
      </label>

      <label htmlFor="login-email">
        <input
          data-testid="input-gravatar-email"
          id="login-email"
          name="email"
          value={ email }
          onChange={ ({ target }) => { setEmail(target.value); } }
        />
      </label>

      <button
        data-testid="btn-play"
        disabled={ isDisable }
        type="button"
      >
        Play
      </button>
    </div>);
}
