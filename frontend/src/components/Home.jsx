import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center vh-100 background ">
        <h1 className='font-mono text-4xl text-pink-500 text-semibold'>Congratulations Login Success ✌️</h1>
        <Link to='/login' className="my-5 bg-green-400 btn hover:bg-green-500 h-[8vh] w-[25vh] flex items-center justify-center text-white rounded-xl text-lg">Logout</Link>
    </div>
  )
}

export default Home