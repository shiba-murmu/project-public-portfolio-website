import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from '../firebase/config.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

// Header / Back button — kept outside parent component
const Header = () => (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start">
        <section className="md:p-5 md:pl-5 w-full text-center">
            <span className="text-2xl md:text-4xl">Add user</span>
        </section>

        <section className="flex w-full h-full items-center md:justify-center text-sm md:text-md gap-4">
            <Link to={"/admin-dashboard"}>
                <button
                    className="inline-flex items-center gap-2 rounded-full py-2 px-4 cursor-pointer"
                    style={{ background: "var(--button-background)", color: "var(--button-text-color)" }}
                    aria-label="Back to admin dashboard"
                >
                    back admin dashboard
                </button>
            </Link>
        </section>
    </div>
);

// User form — outside parent so it doesn't get remounted accidentally
function UserForm({ name, email, setName, setEmail, onSubmit }) {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-10 gap-6">
            <form className="w-full max-w-md flex flex-col gap-4" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)"
                />

                {/* <input
                    type="text"
                    name="role"
                    value={"user"}
                    disabled
                    placeholder="Role = user (by default)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--button-background)"
                /> */}


                <button
                    type="submit"
                    className="rounded-lg px-4 py-2 cursor-pointer"
                    style={{ background: "var(--button-background)", color: "var(--button-text-color)" }}
                >
                    Add User
                </button>
            </form>
        </div>
    );
}

export default function Add_user() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // small client-side validation
        if (!name.trim() || !email.trim()) {
            // replace with toast or UI feedback in real app
            console.warn("Name and email are required");
            toast.error("Name and email are required");
            return;
        }

        // add user to Firestore
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: name.trim(),
                email: email.trim(),
                role: "user",
                createdAt: serverTimestamp()
            });
            
            toast.success("User added successfully");

            // reset form if needed
            setName("");
            setEmail("");
            setRole("");
        } catch (error) {
            console.error("Error adding user:", error);

            // helpful user-facing messages
            if (error.code === "permission-denied") {
                toast.error("Permission denied — check Firestore rules or auth.");
            } else {
                toast.error("Error adding user");
            }
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-start items-center px-10 md:px-0">
            <Header />
            <UserForm
                name={name}
                email={email}
               
                setName={setName}
                setEmail={setEmail}
                
                onSubmit={handleSubmit}
            />
        </div>
    );
}
