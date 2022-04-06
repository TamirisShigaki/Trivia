import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../Redux/actions';

export default function Login(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 0 && email.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [name, email]);

  const token = useSelector((state) => state.token);
  useEffect(() => {
    console.log(token);
  }, [token]);

  async function handleBtnclick() {
    dispatch(getToken());
    const { history: { push } } = props;
    push('/game');
  }

  function handleBtnSettings() {
    const { history: { push } } = props;
    push('/settings');
  }

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
        onClick={ handleBtnclick }
      >
        Play
      </button>

      <button
        data-testid="btn-settings"
        type="button"
        onClick={ handleBtnSettings }
      >
        Settings
      </button>
    </div>);
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
