import React, { useState, useEffect } from "react";


function PortfolioPath({ url }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        // Try modern clipboard API first
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 1400);
                return;
            }
        } catch (err) {
            // fall through to textarea fallback
            console.warn("navigator.clipboard failed, falling back to execCommand", err);
        }

        // Fallback for mobile browsers / older browsers
        try {
            const textarea = document.createElement("textarea");
            textarea.value = url;
            // Prevent keyboard from popping on iOS
            textarea.setAttribute("readonly", "");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);

            // Select the value
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);

            // Execute copy command
            const successful = document.execCommand("copy");
            if (!successful) throw new Error("execCommand returned false");

            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
            document.body.removeChild(textarea);
            return;
        } catch (err) {
            console.error("Copy fallback failed", err);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mt-4">
            <span className="text-sm md:text-base text-(--muted-text) mb-2">
                Your portfolio link is below
            </span>

            {/* Use a real button for more reliable gesture handling on mobile */}
            <button
                type="button"
                onClick={copy}
                onKeyDown={(e) => e.key === "Enter" && copy()}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-(--border-color) bg-(--footer-background) hover:bg-(--exception-button-background) cursor-pointer select-none transition-shadow shadow-sm"
                aria-label={`Copy portfolio link ${url}`}
                title="Click to copy portfolio link"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="opacity-90"
                    aria-hidden="true"
                >
                    <path d="M3 7a2 2 0 012-2h8a2 2 0 012 2v2h-2V7H5v10h6v2H5a2 2 0 01-2-2V7z" fill="currentColor" />
                    <path d="M21 11v8a2 2 0 01-2 2H9a2 2 0 01-2-2V11a2 2 0 012-2h10a2 2 0 012 2z" fill="currentColor" />
                </svg>

                <span className="text-xs  md:text-sm font-medium truncate w-[180px] md:w-[250px] lg:w-[300px]">
                    {url}
                </span>

                <span className={`ml-2 text-xs ${copied ? "text-green-600" : "text-gray-500"}`}>
                    {copied ? "Copied!" : "Copy"}
                </span>
            </button>
        </div>
    );
}


function UserDashboard() {
    const portfolioUrl = "https://public-portfolio-steel.vercel.app/shiba-murmu";

    const [fileName, setFileName] = useState("");
    const [filePreview, setFilePreview] = useState(null);

    useEffect(() => {
        // cleanup preview URL when component unmounts or preview changes
        return () => {
            if (filePreview && filePreview.startsWith("blob:")) {
                URL.revokeObjectURL(filePreview);
            }
        };
    }, [filePreview]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            setFileName("");
            setFilePreview(null);
            return;
        }

        setFileName(file.name);

        // If it's an image, create a preview URL
        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setFilePreview(url);
        } else {
            // not an image — clear any previous preview
            if (filePreview && filePreview.startsWith("blob:")) {
                URL.revokeObjectURL(filePreview);
            }
            setFilePreview(null);
        }

        // If you need to upload file immediately, do it here (fetch/XHR/FormData)
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start  px-4">
            <div className="mt-12 w-full max-w-3xl text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-(--text-color)">Shiba Murmu</h1>
                <p className="mt-1 text-sm text-gray-500">Welcome to your dashboard</p>
            </div>

            <PortfolioPath url={portfolioUrl} />

            <div className="w-full max-w-3xl flex flex-col items-center justify-center mt-8">
                {/* Upload button */}
                <label
                    htmlFor="fileUpload"
                    className="inline-flex items-center gap-3 cursor-pointer
                     bg-(--button-background)  active:scale-95
                     text-(--button-text-color) font-semibold px-5 py-3 rounded-2xl
                     shadow-md transition-all duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                        aria-hidden
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V3m0 0L8.25 6.75M12 3l3.75 3.75M6 16.5h12" />
                    </svg>

                    <span className="text-sm md:text-base">Upload File</span>
                </label>

                <input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />

                {/* Selected file name */}
                <div className="mt-4 w-full flex flex-col items-center">
                    {fileName ? (
                        <div className="w-full max-w-2xl bg-(--footer-background) border border-(--border-color) rounded-lg p-3 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                                    <path fill="currentColor" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                                    <path fill="#fff" d="M14 2v6h6"></path>
                                </svg>

                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-800">{fileName}</span>
                                    <span className="text-xs text-gray-500">Selected file</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {filePreview ? (
                                    <img
                                        src={filePreview}
                                        alt="preview"
                                        className="w-16 h-16 object-cover rounded-md border"
                                    />
                                ) : (
                                    <span className="text-xs text-gray-500">No preview available</span>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="text-xs md:text-sm text-gray-400">No file selected yet</div>
                    )}
                </div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 bg-(--button-background) text-(--button-text-color) font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200">
                Save
            </button>
        </div>
    );
}

export default UserDashboard;
