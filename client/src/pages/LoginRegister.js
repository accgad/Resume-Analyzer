import { useState } from 'react';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Login' : 'Register'} logic goes here.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        {!isLogin && (
          <>
            <input type="text" placeholder="Full Name" required /><br /><br />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <br />
      <button onClick={handleToggle}>
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default LoginRegister;
