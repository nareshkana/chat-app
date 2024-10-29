import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!fullName || !username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    // Handle signup logic here (e.g., API call)
    console.log('Form submitted:', { fullName, username, password });
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fullName' className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              id='fullName'
              placeholder='John Doe'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label htmlFor='username' className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              id='username'
              placeholder='john.doe'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label htmlFor='password' className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label htmlFor='confirmPassword' className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full input input-bordered h-10'
            />
          </div>
          <GenderCheckbox/>


          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account?
          </a>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
