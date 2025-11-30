import React from 'react'

function UserProfileData() {
    return (
        <>
            <span className="text-2xl text-(--muted-text)">Users profile data</span>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 font-semibold">S.NO</th>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Profile picture</th>
                            <th className="p-3 font-semibold">Specification</th>
                            {/* For Big text and small text about the user profile */}
                            <th className="p-3 font-semibold">BigText</th>
                            <th className="p-3 font-semibold">SmallText</th>
                            <th className="p-3 font-semibold">ResumePath</th>
                            <th className="p-3 font-semibold"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="border-b">
                            <td className="p-3">1</td>
                            <td className="p-3">Shiba Murmu</td>
                            <td className="p-3">/admin/profile</td>
                            <td className="p-3">I can do better works here</td>
                            <td className="p-3">some small text</td>
                            <td className="p-3">12/02/2023</td>
                            <td className="p-3">resume.pdf</td>
                            <td className="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    Update
                                </button>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td className="p-3">2</td>
                            <td className="p-3">asdkfnaskdnfk9q3485</td>
                            <td className="p-3">Alice</td>
                            <td className="p-3">alice@example.com</td>
                            <td className="p-3">alskdflasdf3242</td>
                            <td className="p-3">12/02/2023</td>
                            <td className="p-3">resume.pdf</td>
                            <td className="p-3">
                                <button className="bg-amber-500 py-2 px-3 rounded text-xs cursor-pointer">
                                    update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserProfileData