import React, { useContext } from "react";
import photo from "../../assets/animated (3).gif";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { auth } from "../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";


const Register = () => {   
    const { registerWithEmailPassword, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        // console.log(`Submitted - Name: ${name}, Email: ${email}, Password: ${password}, Photo URL: ${photoURL}`);
        const user = {name,email,photoURL }
        
        registerWithEmailPassword(email, password)
            .then(() => {
                toast.success("Successfully registered");
                updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
                // POST request to backend
                axios.post("http://localhost:5000/users",user)
                .then (res => console.log(res))
                .catch(err => console.log(err))             
              
                //reset
                form.reset();
                navigate(location?.state || "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Successfully logged in");
                const user = {
                    name : auth?.currentUser?.displayName,
                    email : auth?.currentUser?.email,
                    photoURL : auth?.currentUser?.photoURL
                }
                
                // POST request to backend
                axios.post("http://localhost:5000/users",user)
                .then (res => console.log(res))
                .catch(err => console.log(err))  
                // navigate 
                navigate(location?.state || "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Toaster
                position="top-right"
                toastOptions={{   
                    success: { style: { background: "green", color: "#fff" } },
                    error: { style: { background: "red", color: "#fff" } },
                }}
            />
            <div className="flex flex-row-reverse h-full w-full overflow-hidden rounded-xl shadow-md">
                {/* Design side */}
                <div className=" hidden items-center justify-center md:flex md:w-[50%]">
                    <div className="w-[80%] ">
                        <img className="rounded-full" src={photo} alt="Registration Visual" />
                    </div>
                </div>

                {/* Form side */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                    <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-cyan-600">
                        Sign Up
                    </h2>

                    <form onSubmit={handleRegister} className="flex w-full flex-col items-center justify-center gap-4">
                        <input
                            className="w-[80%] rounded-lg border border-cyan-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 md:w-[60%] dark:text-zinc-400"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                        <input
                            className="w-[80%] rounded-lg border border-cyan-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 md:w-[60%] dark:text-zinc-400"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <input
                            className="w-[80%] rounded-lg border border-cyan-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 md:w-[60%] dark:text-zinc-400"
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <input
                            className="w-[80%] rounded-lg border border-cyan-600 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 md:w-[60%] dark:text-zinc-400"
                            type="text"
                            placeholder="Photo URL"
                            name="photoURL"
                        />
                        <p className="text-[14px] text-gray-400">
                            Already have an account? <a href="/login" className="text-cyan-600">Log in</a>
                        </p>
                        <input 
                            type="submit"  
                            className="uppercase w-[80%] rounded-lg bg-cyan-600 px-6 py-2 font-medium text-white outline-none hover:bg-cyan-600 md:w-[60%]" 
                            value="Register"
                        />
                    </form>

                    {/* Divider */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1 border-cyan-600" />
                        <div className="mx-4 text-cyan-600">OR</div>
                        <hr className="flex-1 border-cyan-600" />
                    </div>

                    {/* Sign in with Google */}
                    <button 
                        onClick={handleGoogleSignIn} 
                        className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-cyan-600"
                    >
                        <div className="relative z-20 flex h-full items-center bg-cyan-600 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-cyan-600">
                            Sign up with
                        </div>
                        <span className="flex h-full items-center px-4 text-xl font-bold text-cyan-600 duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
