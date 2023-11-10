// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../firebase";

// import Login from '../components/icons/undraw_authentication_re_svpt.svg'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { currentUser, login, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    <div>
      <section className="grid lg:grid-cols-2 items-center justify-center  ">
        <div className=" flex flex-col items-center justify-center " >
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
                  Login to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                <div className="rounded-md shadow-sm space-y-5">
                  <div>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  </div>
                  <div className='relative block w-full ' >
                    <input
                      id="password"
                      name="password"
                      type= { showPassword ? "text" : "password" }
                      autoComplete="current-password"
                      required
                      className=" relative block w-full px-3 py-2 placeholder-gray-500 rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="text-gray-400"
                        />
                      </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Don't have an account? Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex h-[550px] bg-gradient-to-tr from-blue-100 to-white p-20 " >
          {/* <img src={Login} alt="log in" className=" w-[600px] h-[300px] " /> */}
        </div>
      </section>
    </div>
  );
};

export default SignIn;