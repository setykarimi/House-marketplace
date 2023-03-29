import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcom Back!</p>
                </header>

                <main>
                    <form>
                        <input
                            type="email"
                            id="email"
                            className='emailInput'
                            placeholder='Email'
                            value={email}
                            onChange={onChange}
                        />

                        <div className="passwordInputDiv">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='passwordInput'
                                placeholder='Password'
                                id='password'
                                value={password}
                                onChange={onChange}
                            />

                            <img
                                src={visibilityIcon}
                                alt="Show password"
                                className='showPassword'
                                onChange={() => setShowPassword(prev => !prev)}
                            />
                        </div>

                        <Link to='/forgot-password' className='forgotPasswordLink'>
                            Forgot Password
                        </Link>


                        <div className="signInBar">
                            <p className="signInText">
                                Sign In
                            </p>
                            <button className="signInButton">
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>
                    </form>

                    {/* Google OAuth */}
                    <Link to='/sign-up' className='registerLink'>
                        Sign Up Instead
                    </Link>
                </main>
            </div>
        </>
    );
}

export default SignIn;