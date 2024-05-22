import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:4000/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/home');
            }
            else{
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="text-center d-flex justify-content-center align-items-center vh-100 background ">
                <div className="p-4 rounded-2xl h-[500px] backdrop-blur-sm bg-white/50" style={{width : '30%'}}>
                    <h2 className='mt-2 text-5xl font-semibold text-green-500 mb-14'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full p-3 mt-3 text-lg font-bold text-white bg-green-400 rounded-lg hover:bg-green-500">Login</button>
                    </form>
                    {/* TO add ' appostopee */}
                    <div className='flex items-center justify-center gap-2 mt-10'>
                    <p className=''>Don&apos;t have an account?</p>
                    <Link to='/register' className="text-blue-500 underline">Register</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login