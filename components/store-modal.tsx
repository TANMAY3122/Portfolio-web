import React from "react";

const StoreModal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-auto backdrop-blur-sm flex "
            onClick={onClose}
        >
            <div
                className="relative p-4 border bg-primary-foreground flex-col flex rounded-lg max-w-md m-auto "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute right-2">
                    <button className="focus:outline-none p-2" onClick={onClose}>

                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default StoreModal;