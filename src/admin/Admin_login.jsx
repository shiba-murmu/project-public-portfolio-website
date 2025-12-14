import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../firebase/auth";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

function Admin_login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isSelect, setIsSelect] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const auth = getAuth();
    console.log('current user : ', auth.currentUser)


    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const result = await loginUser(email, password);
            console.log("Login successful:", result); 
            toast.success("Login successful!");
            navigate('/admin-dashboard');
            // Redirect based on user type after successful login
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid email or password.");
            toast.error("Login failed. Please try again.");
        }
        // true = User selected by default
    };

    const Redirect = () => {
        if (isSelect) {
            navigate('/user-dashboard')
        } else {
            navigate('/admin-dashboard')
        }
    };


    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-(--page-background,transparent)">
            {/* Left — Visual / Illustration */}
            <aside className="order-2 md:order-1 flex items-center justify-center p-8 bg-transparent">
                <div className="flex flex-col items-center gap-6">
                    {/* Spinner SVG (visible on md and up) */}
                    <div className="hidden md:block">
                        {/* elastic-spin uses raw CSS above and respects var(--muted-text) fill */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="elastic-spin h-50 w-50"
                            fill="var(--muted-text)"
                            aria-hidden="true"
                        >
                            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                        </svg>
                    </div>

                    {/* Fallback simple spinner for small screens */}
                    <div className="block md:hidden">
                        <div className="spin" aria-hidden="true" />
                    </div>

                    {/* Short marketing line */}
                    <div className="text-center max-w-xs">
                        <h2 className="text-2xl md:text-4xl font-bold">Welcome Back</h2>
                        <p className="mt-2 text-md md:text-lg text-(--muted-text)">
                            Access your dashboard securely.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Right — Login Form */}
            <main className="order-1 md:order-2 flex items-center justify-center p-6">
                <div className="w-full max-w-lg">
                    <div className="mb-6 text-center">
                        <h1 className="text-4xl font-extrabold">Login</h1>
                        <p className="text-md md:text-lg mt-2 text-(--muted-text)">Access your account !</p>

                        <div className="relative mt-4 inline-flex rounded-full bg-(--muted-text)/5 p-1">

                            {/* Sliding highlight */}
                            <div
                                className={`absolute top-1 left-1 h-[80%] w-[48%] rounded-full transition-all duration-300`}
                                style={{
                                    background: "var(--button-background)",
                                    transform: isSelect ? "translateX(0)" : "translateX(100%)",
                                }}
                            ></div>

                            {/* USER btn */}
                            <button
                                type="button"
                                onClick={() => setIsSelect(true)}
                                className={`
            relative z-10 mr-1 px-4 py-1 rounded-full text-sm font-medium hover:cursor-pointer hover:opacity-95
            ${isSelect ? "text-(--button-text-color)" : ""}
        `}
                            >
                                User
                            </button>

                            {/* ADMIN btn */}
                            <button
                                type="button"
                                onClick={() => setIsSelect(false)}
                                className={`
            relative z-10 ml-1 px-6 py-1 text-center items-center rounded-full text-sm font-medium hover:cursor-pointer hover:opacity-95
            ${!isSelect ? "text-(--button-text-color)" : ""}
        `}
                            >
                                Admin
                            </button>
                        </div>
                    </div>


                    <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-md md:text-lg mb-3">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg input-focus"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Password */}
                            <div
                                className={`
      flex flex-col gap-3 relative 
      transition-all duration-300 
      ${isSelect
                                        ? "opacity-0 -translate-y-3 pointer-events-none"
                                        : "opacity-100 translate-y-0"
                                    }
    `}
                            >
                                <label htmlFor="password" className="block text-md md:text-lg font-medium">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg input-focus pr-12"
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute cursor-pointer right-3 top-[47px] md:top-13 text-(--muted-text)"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="..." />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="..." />
                                        </svg>
                                    )}
                                </button>
                            </div>



                            {/* Actions */}
                            <div
                                className={`
      flex items-center justify-between text-sm 
      transition-all duration-300
      ${isSelect
                                        ? "opacity-0 -translate-y-2 pointer-events-none"
                                        : "opacity-100 translate-y-0"
                                    }
    `}
                            >
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4" />
                                    <span>Remember me</span>
                                </label>
 
                                <a href="#" className="text-sm underline" onClick={(e) => e.preventDefault()}>
                                    Forgot password?
                                </a>
                            </div>


                            {/* Submit — uses your button CSS vars for color */
              /* we keep color usage to CSS variables only (no hardcoded hex) */}
                            <button
                                type="submit"
                                className="mt-4 w-full py-3 rounded-2xl font-semibold cursor-pointer"
                                style={{
                                    backgroundColor: "var(--button-background)",
                                    color: "var(--button-text-color)",
                                }}
                            >
                                Login
                            </button>
                            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

                            {/* small helper text */}
                            <p className="mt-3 text-center text-sm md:text-md text-(--muted-text)">
                                By continuing you agree to our Terms and Privacy.
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Admin_login;
