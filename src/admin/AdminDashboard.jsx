import React from "react";
import { Link } from "react-router-dom";
import UserProfileData from "./UserProfileData";
import UserAboutMeData from "./UserAboutMeData";


function UserProject() {
    <>
        <div>
            User Project...
        </div>
    </>
}

function AdminList() {
    return (
        <>
            <span className="text-2xl text-(--muted-text)">Admin : 2</span>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left text-xs">
                    <thead class="bg-gray-100 text-gray-700">
                        <tr>

                            <th class="p-3 font-semibold">S.NO</th>
                            <th class="p-3 font-semibold">ID</th>
                            <th class="p-3 font-semibold">Name</th>
                            <th class="p-3 font-semibold">Email</th>
                            <th class="p-3 font-semibold">Role</th>
                            <th class="p-3 font-semibold">Actions</th>
                            <th class="p-3 font-semibold"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="border-b">
                            <td class="p-3">1</td>
                            <td class="p-3">alskdflasdf3242</td>
                            <td class="p-3">John Doe</td>
                            <td class="p-3">john@example.com</td>
                            <td class="p-3">Admin</td>
                            <td class="p-3">Edit</td>
                            <td class="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    Remove
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3">2</td>
                            <td class="p-3">asdkfnaskdnfk9q3485</td>
                            <td class="p-3">Alice</td>
                            <td class="p-3">alice@example.com</td>
                            <td class="p-3">Admin</td>
                            <td class="p-3">Edit</td>
                            <td class="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
function UserList() {
    return (
        <>
            <span className="text-2xl text-(--muted-text)">Users : 2</span>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left text-xs">
                    <thead class="bg-gray-100 text-gray-700">
                        <tr>
                            <th class="p-3 font-semibold">S.NO</th>
                            <th class="p-3 font-semibold">ID</th>
                            <th class="p-3 font-semibold">Name</th>
                            <th class="p-3 font-semibold">Email</th>
                            <th class="p-3 font-semibold">Password</th>
                            <th class="p-3 font-semibold">Date</th>
                            <th class="p-3 font-semibold">Role</th>
                            <th class="p-3 font-semibold"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="border-b">
                            <td class="p-3">1</td>
                            <td class="p-3">alskdflasdf3242</td>
                            <td class="p-3">John Doe</td>
                            <td class="p-3">john@example.com</td>
                            <td class="p-3">alskdflasdf3242</td>
                            <td class="p-3">12/02/2023</td>
                            <td class="p-3">User</td>
                            <td class="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    Remove
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3">2</td>
                            <td class="p-3">asdkfnaskdnfk9q3485</td>
                            <td class="p-3">Alice</td>
                            <td class="p-3">alice@example.com</td>
                            <td class="p-3">alskdflasdf3242</td>
                            <td class="p-3">12/02/2023</td>
                            <td class="p-3">User</td>
                            <td class="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


function Profile() {
    return (
        <>
            <div>
                Profile data
            </div>
        </>
    )
}

function AdminFirstOverview() {
    // admin header card and main area....

    return (
        <>
            <header className="bg-(--card-background,transparent)/60 backdrop-blur-sm rounded-2xl px-4 py-6 md:px-8 md:py-8 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-extrabold">Admin dashboard</h1>
                        <p className="mt-1 text-sm md:text-base text-(--muted-text)">
                            Manage users, admins and quick actions — fast and secure.
                        </p>
                    </div>

                    {/* Action shortcuts - on md+ show inline */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/add-user">
                            <button
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-button"
                                style={{
                                    background: "var(--button-background)",
                                    color: "var(--button-text-color)",
                                }}
                            >
                                Add user
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                            </button>
                        </Link>

                        <Link to="/add-admin">
                            <button
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-button"
                                style={{
                                    background: "var(--button-background)",
                                    color: "var(--button-text-color)",
                                }}
                            >
                                Add admin
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left column - quick stats / cards */}
                <section className="space-y-4">
                    <div className="rounded-xl p-4 bg-(--card-background,transparent)/50 backdrop-blur-sm shadow-soft">
                        <h3 className="text-sm text-(--muted-text)">Overview</h3>
                        <div className="mt-3 flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">1,234</span>
                                <span className="text-xs text-(--muted-text)">Total users</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">12</span>
                                <span className="text-xs text-(--muted-text)">Admins</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">3</span>
                                <span className="text-xs text-(--muted-text)">Pending</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-4 bg-(--card-background,transparent)/50 backdrop-blur-sm shadow-soft">
                        <h3 className="text-sm text-(--muted-text)">Recent activity</h3>
                        <ul className="mt-3 space-y-2 text-sm text-(--muted-text)">
                            <li>• User jane.doe@example.com registered</li>
                            <li>• Admin request approved for r.kumar</li>
                            <li>• Password reset issued — 2 requests</li>
                        </ul>
                    </div>
                </section>

                {/* Right column - actions / big CTA */}
                <section className="flex flex-col gap-4 items-stretch">
                    {/* On mobile show stacked big buttons */}
                    <div className="flex flex-col gap-3 md:hidden">
                        <Link to="/add-user">
                            <button
                                className="w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-3"
                                style={{
                                    background: "var(--button-background)",
                                    color: "var(--button-text-color)",
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                                Add user
                            </button>
                        </Link>

                        <Link to="/add-admin">
                            <button
                                className="w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-3"
                                style={{
                                    background: "var(--button-background)",
                                    color: "var(--button-text-color)",
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                </svg>
                                Add admin
                            </button>
                        </Link>
                    </div>

                    {/* Empty state / hint card */}
                    <div className="rounded-xl p-4 flex-1 bg-[color:var(--card-background,transparent)]/50 backdrop-blur-sm shadow-soft flex flex-col justify-center">
                        <h4 className="text-lg font-semibold">Quick actions</h4>
                        <p className="mt-2 text-sm text-(--muted-text)">
                            Use the buttons to create users or admins quickly. All actions are logged and audited.
                        </p>

                        {/* subtle secondary actions */}
                        <div className="mt-4 flex gap-3 flex-wrap">
                            <button className="px-3 py-2 rounded-lg text-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                                Export CSV
                            </button>
                            <button className="px-3 py-2 rounded-lg text-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                                View logs
                            </button>
                            <button className="px-3 py-2 rounded-lg text-sm border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                                Settings
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-(--bg-color) flex justify-start flex-col items-center">
            <div className="w-full max-w-4xl mx-auto">
                {/* Header card  and main area*/}
                <AdminFirstOverview />
            </div>

            <div className="w-full flex justify-center items-center text-xs ">
                <div className="w-full md:w-3/4 bg-(--bg-color) gap-5 md:gap-10 flex justify-center items-center flex-col ">
                    {/* User list  : Admin and User */}
                    <section className="w-full">
                        {/* Admin list show  */}
                        <AdminList />
                    </section>
                    <section className="w-full">
                        {/* User list show */}
                        <UserList />
                    </section>
                    <section className="w-full">
                        {/* user profile section data's */}
                        <UserProfileData />
                    </section>
                    <section className="w-full">
                        {/* User about me section data */}
                        <UserAboutMeData />
                    </section>
                    <section>
                        
                    </section>
                </div>
            </div>

        </div>
    );
}
