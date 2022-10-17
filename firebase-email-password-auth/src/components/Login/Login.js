import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';


const auth = getAuth(app);

const Login = () => {

    const [success, setSuccess] = useState(false);

    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error => {
            console.log('error', error);
        })

    }

    const handleEmailBlur = (event) => {
        const email =event.target.value;
        setUserEmail(email);
        console.log(email);

    }

    const handleForgetPassword = () => {
        if(!userEmail){
            alert('Please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(result =>{
            alert('Password reset email send please check your email')
        })
        .catch( error =>{
            console.log('error: ', error);
        })
    }

    return (
        <div className='w-25 mx-auto'>
            <h3 className='text-success'>Please login!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Enter Your Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your Password</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div>
                <button className='btn btn-primary' type='submit'>Log in</button>
            </form>
            {
                success && <h5 className='text-info'>Successfully Loged In</h5>
            }
            <p>New to this website Please <Link to='/register'>Register</Link> </p>
            <p> <small>Forget Password ? <button onClick={handleForgetPassword} type='button' className='btn btn-link'>Reset Password</button></small> </p>
        </div>
    );
};

export default Login;