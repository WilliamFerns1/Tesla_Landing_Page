import { auth, googleProvider, githubProvider } from "./config.js" 
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth"
import Home from "../Home.jsx"

import { Link, useNavigate } from "react-router-dom" // Import useNavigate hook
import { useState, useEffect } from "react"


export default function SignIn({ onSignIn }) {

  const [ value, setValue ] = useState()
  const [ error, setError ] = useState({ signIn: null, signUp: null }) // Initialize error state to null for both forms

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const email = localStorage.getItem("email")
      if (email) {
        setValue(email)
        onSignIn(email)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [onSignIn])

  const handleEmailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`User signed in with email:`, userCredential.user.email)
        setValue(userCredential.user.email)
        localStorage.setItem("email", userCredential.user.email)
        onSignIn(userCredential.user.email) // Call onSignIn callback function
        setError({ signIn: null, signUp: null }) // Clear error state on successful sign-in for both forms
      })
      .catch((error) => {
        console.error(`Error signing in with email:`, error)
        setError({ signIn: "Invalid credentials", signUp: null }) // Set error state for sign-in form only
      })
  }

  const handleEmailSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`User signed up with email:`, userCredential.user.email)
        setValue(userCredential.user.email)
        localStorage.setItem("email", userCredential.user.email)
        onSignIn(userCredential.user.email) // Call onSignIn callback function
        setError({ signIn: null, signUp: null }) // Clear error state on successful sign-up for both forms
      })
      .catch((error) => {
        console.error(`Error signing up with email:`, error)
        setError({ signIn: null, signUp: "Invalid credentials" }) // Set error state for sign-up form only
      });
  }
  
  const handleClick = (provider) => {
    let authProvider;
    switch (provider) {
      case 'google':
        authProvider = googleProvider;
        break;
      case 'github':
        authProvider = githubProvider;
        break;
      default:
        console.error(`Unknown provider: ${provider}`);
        return;
    }
    signInWithPopup(auth, authProvider).then((data) => {
      console.log(`User signed in with ${provider}:`, data.user.email)
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      onSignIn(data.user.email) // Call onSignIn callback function
      setError({ signIn: null, signUp: null }) // Clear error state on successful sign-in for both forms
    }).catch((error) => {
      console.error(`Error signing in with ${provider}:`, error)
      if (provider === 'github') {
        setError({ signIn: null, signUp: "Invalid credentials" }) // Set error state for sign-up form only
      } else {
        setError({ signIn: "Invalid credentials", signUp: null }) // Set error state for sign-in form only
      }
    })
  }

  const navigate = useNavigate() // Use useNavigate hook to navigate to home page

  useEffect(() => {
    console.log("localStorage:", localStorage.getItem("email"))
    if (value) {
      console.log("Redirecting to home page...")
      navigate("/home") // Navigate to home page
    }
  }, [value, navigate])

  useEffect(() => {
    if (error.signIn && error.signIn.code === "auth/account-exists-with-different-credential") {
      fetchSignInMethodsForEmail(auth, error.signIn.email).then((methods) => {
        setError({ signIn: `This email is already associated with a different sign-in method: ${methods.join(", ")}`, signUp: null }) // Set error state for sign-in form only
      }).catch((error) => {
        console.error(`Error fetching sign-in methods for email:`, error)
        setError({ signIn: "Invalid credentials", signUp: null }) // Set error state for sign-in form only
      })
    }
  }, [error.signIn])

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleEmailSignUp(email, password)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleEmailSignIn(email, password)
  }

  return (
    <div className="auth-container">
      {value ? (
        navigate("/home") // Navigate to home page
      )
        : (
          <div className="auth-component">
            <form className="sign-up" onSubmit={handleRegisterSubmit}>
              
              <h1>Register<Link className="close-auth" to="/home">
                &times;
              </Link></h1>
              <div className="sign-in-methods-container">
                <div className="google-sign-in">
                  <button onClick={() => handleClick('google')}>
                    <i className='bx bxl-google google-icon' ></i>
                  Sign in with Google
                  </button>
                </div>

                <div className="github-sign-in">
                  <button onClick={() => handleClick('github')}>
                    <i className='bx bxl-github github-icon '></i>
                    Sign in with GitHub
                  </button>
                </div>
              </div>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button className="auth-register-buttons" type="submit">Register</button>
              {error.signUp && <p className="error-message">{error.signUp}</p>} {/* Display error message for sign-up form only */}
            </form>
            <form className="sign-in" onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button id="log-in-button" className="auth-register-buttons" type="submit">Login</button>
              {error.signIn && <p className="error-message">{error.signIn}</p>} {/* Display error message for sign-in form only */}
            </form>
          </div>
        )
      }
    </div>
  )
}