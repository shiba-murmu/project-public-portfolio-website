import React from "react";

const sampleData = [
    {
        id: 1,
        name: "Shiba Murmu",
        firstPara: "Engineering college",
        secondPara: "I can do better works here — a bit longer sentence to show wrapping behavior on small screens.",
        thirdPara: "some small text",
        quickFacts: [
            "12/02/2023",
            "12/02/2023",
            "12/02/2023",
            "12/02/2023",
            "12/02/2023",
            "12/02/2023",
        ],
        role: "User",
    },
    {
        id: 2,
        name: "asdkfnaskdnfk9q3485",
        firstPara: "Alice",
        secondPara: "alice@example.com",
        thirdPara: "alskdflasdf3242",
        quickFacts: ["12/02/2023"],
        role: "User",
    },
];

export default function UserAboutMeData() {
    const [expanded, setExpanded] = React.useState({}); // track expanded rows for quickfacts

    return (
        <section className="p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-4 text-(--muted-text)">
                Users about me data
            </h2>

            {/* MOBILE: cards */}
            <div className="md:hidden space-y-4">
                {sampleData.map((row) => (
                    <article
                        key={row.id}
                        className="bg-(--card-background,transparent)/40 rounded-xl p-4 shadow-soft"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold truncate">{row.name}</span>
                                    <span className="text-xs text-(--muted-text) px-2 py-0.5 rounded-md bg-(--muted-text)/6">
                                        {row.role}
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-(--muted-text)">
                                    <strong>First:</strong>{" "}
                                    <span className="block md:inline truncate">{row.firstPara}</span>
                                </p>

                                <p className="mt-2 text-sm">
                                    <strong>Second:</strong>{" "}
                                    <span className="block text-(--muted-text) break-words">
                                        {row.secondPara}
                                    </span>
                                </p>

                                <p className="mt-2 text-sm text-(--muted-text)">
                                    <strong>Third:</strong> {row.thirdPara}
                                </p>

                                <div className="mt-3">
                                    <button
                                        onClick={() =>
                                            setExpanded((s) => ({ ...s, [row.id]: !s[row.id] }))
                                        }
                                        className="text-xs underline"
                                    >
                                        {expanded[row.id] ? "Hide quick facts" : "Show quick facts"}
                                    </button>

                                    {expanded[row.id] && (
                                        <ul className="mt-2 flex flex-wrap gap-2 text-xs text-(--muted-text)">
                                            {row.quickFacts.map((q, i) => (
                                                <li
                                                    key={i}
                                                    className="px-2 py-1 bg-(--muted-text)/6 rounded"
                                                >
                                                    {q}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <button
                                    className="bg-(--button-background) text-(--button-text-color) px-3 py-2 rounded-md text-xs"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* DESKTOP: table */}
            <div className="hidden md:block mt-2 rounded-xl overflow-hidden shadow-soft">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm">
                        <thead className="bg-(--muted-text)/6 text-(--muted-text)">
                            <tr>
                                <th className="p-3 text-left w-12">S.NO</th>
                                <th className="p-3 text-left w-48">Name</th>
                                <th className="p-3 text-left">FirstPara</th>
                                <th className="p-3 text-left w-72">SecondPara</th>
                                <th className="p-3 text-left">ThirdPara</th>
                                <th className="p-3 text-left w-64">QuickFacts</th>
                                <th className="p-3 text-left w-24">Role</th>
                                <th className="p-3 text-left w-28">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sampleData.map((row, idx) => (
                                <tr key={row.id} className="border-b last:border-b-0">
                                    <td className="p-3 align-top">{idx + 1}</td>

                                    <td className="p-3 align-top">
                                        <div className="font-medium truncate max-w-[200px]">
                                            {row.name}
                                        </div>
                                    </td>

                                    <td className="p-3 align-top">
                                        <div className="text-(--muted-text) wrap-break-word">
                                            {row.firstPara}
                                        </div>
                                    </td>

                                    <td className="p-3 align-top">
                                        <div className="text-(--muted-text) break-words">
                                            {row.secondPara}
                                        </div>
                                    </td>

                                    <td className="p-3 align-top">{row.thirdPara}</td>

                                    <td className="p-3 align-top">
                                        {/* show up to 3 quick facts as badges, rest shown via dropdown */}
                                        <div className="flex flex-wrap gap-2">
                                            {row.quickFacts.slice(0, 3).map((q, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 rounded text-xs bg-(--muted-text)/6"
                                                >
                                                    {q}
                                                </span>
                                            ))}

                                            {row.quickFacts.length > 3 && (
                                                <details className="text-xs">
                                                    <summary className="underline cursor-pointer text-(--muted-text)">
                                                        +{row.quickFacts.length - 3} more
                                                    </summary>
                                                    <ul className="mt-2 flex flex-col gap-1">
                                                        {row.quickFacts.slice(3).map((q, j) => (
                                                            <li
                                                                key={j}
                                                                className="px-2 py-1 rounded text-xs bg-(--muted-text)/4"
                                                            >
                                                                {q}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            )}
                                        </div>
                                    </td>

                                    <td className="p-3 align-top">
                                        <span className="text-sm text-(--muted-text)">
                                            {row.role}
                                        </span>
                                    </td>

                                    <td className="p-3 align-top">
                                        <button
                                            className="px-3 py-2 rounded text-xs"
                                            style={{
                                                background: "var(--button-background)",
                                                color: "var(--button-text-color)",
                                            }}
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
