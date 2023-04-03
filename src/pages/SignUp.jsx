import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredentional = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredentional.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            navigate('/ ')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcom Back!</p>
                </header>

                <main>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            id="name"
                            className='nameInput'
                            placeholder='Name'
                            value={name}
                            onChange={onChange}
                        />

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


                        <div className="signUpBar">
                            <p className="signUpText">
                                Sign Up
                            </p>
                            <button className="signUpButton">
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>
                    </form>

                    {/* Google OAuth */}
                    <Link to='/sign-in' className='registerLink'>
                        Sign In Instead
                    </Link>
                </main>
            </div>
        </>
    );
}

export default SignUp;