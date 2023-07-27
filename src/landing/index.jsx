import './index.css'
import logo from './Media/logo.svg'
import bkg from './Media/bkg.svg'


function Landing() {


    return (
      <div className='landing-section'>

          <div className='login-section'>
            <img src={logo} alt="quickyscience-logo" />

            <div className='login-input-area'>
                <h1>Log In</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" />
                </div>
                <button>Login</button>
            </div>

            <p>Change Password?</p>
          </div>

          <div className='bkg-section'>
            <img src={bkg} alt="" />
          </div>

      </div>
    )
}

export default Landing
