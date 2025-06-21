import './style/Login.css';
Add comment
More actions


import rvLogo from '../assets/spk.jpg';





function Login({ onLoginSuccess }) {


  const handleSubmit = (e) => {


    e.preventDefault();


    // Simulate login success (add real validation if needed)


    onLoginSuccess();


  };





  return (


    <div className="Login">


      <div className="center-box">


        <img src={rvLogo} alt="RV Logo" className="logo" />


        <h1>SPK Logistics</h1>


        <h2>Login</h2>


        <form onSubmit={handleSubmit}>


          <label htmlFor="username">Username:</label>


          <input type="text" id="username" name="username" required />





          <label htmlFor="password">Password:</label>


          <input type="password" id="password" name="password" required />





          <button type="submit">Login</button>


        </form>


      </div>
    </div>
  );
}
export default Login;