import { useState } from "react";

export default function TicketModal({
    open,
    onClose,
    activeTab,
    setActiveTab,
    messages,
    input,
    setInput,
    sendMessage,
    openFilePicker,
    fileRef,
    handleFileChange,
    TicketDetails,
    TicketHistory,
    TicketReveiw,
    TabButton,
    StarsIcon,
    AttachFileIcon,
    SendMessageIcon,
}) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40"
            onClick={() => setOpen(false)}
        >
            <div
                className="relative w-full p-5 md:5 lg:px-16 sm:py-10  max-w-275 bg-white shadow-xl rounded-lg transform transition-all duration-300 overflow-y-auto max-h-[calc(100vh-50px)] opacity-100 translate-y-0 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex pb-5 justify-between border-b border-[#E2E8F0]">
                    <h2 className="text-lg text-[#111B2B] font-semibold">Design Operational & Departmental Dashboard with Filter Options</h2>
                    <div className="flex items-center gap-2 lg:gap-3">
                        <p className="hidden sm:block text-[#339D5C]  text-lg font-semibold">Mark as Complete</p>
                        <button className="cursor-pointer text-base text-[#339D5C] font-bold" onClick={onClose}>✕</button>
                    </div>
                </div>
                <div className="flex items-center mt-5 gap-3 border-b border-[#E2E8F0] mb-5">
                    <div className="flex gap-9">
                        <TabButton
                            active={activeTab === "details"}
                            onClick={() => setActiveTab("details")}
                            text="Ticket Details"
                        />
                        <TabButton
                            active={activeTab === "history"}
                            onClick={() => setActiveTab("history")}
                            text="Ticket History"
                        />
                        <TabButton
                            active={activeTab === "review"}
                            onClick={() => setActiveTab("review")}
                            text="Review & Feedback"
                        />
                    </div>
                </div>

                <div className="grid sm:flex gap-6">
                    <div className="bg-white max-w-118 w-full mx-auto">
                        {activeTab === "details" && <TicketDetails />}
                        {activeTab === "history" && <TicketHistory />}
                        {activeTab === "review" && <TicketReveiw />}
                    </div>
                    <div className="max-w-118 h-141 w-full sm:border-l border-[#E9EAEB] mx-auto bg-white flex flex-col">
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-end gap-2 ${msg.sender === "me" ? "justify-end" : "justify-start"
                                        }`}
                                >

                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">
                                            {msg.sender === "me" ? msg.time + " " + msg.name : msg.name + " " + msg.time}
                                        </p>
                                        <div
                                            className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${msg.sender === "me"
                                                ? "bg-[#0B3A4A] text-white rounded-br-none"
                                                : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>

                                    {msg.sender === "me" && (
                                        <img src={msg.avatar} className="w-8 h-8 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border border-[#E9EAEB] flex items-center gap-2 bottom-0 sticky">
                            <div className="flex items-center border border-[#D5D7DA] rounded-lg px-3 py-3 gap-3 max-w-87 w-full">
                                <StarsIcon />
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter message here..."
                                    className="flex-1 text-sm outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={openFilePicker}>
                                    <AttachFileIcon />
                                </button>
                                <input
                                    type="file"
                                    ref={fileRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-[#309356] text-white px-4 py-3 rounded-lg"
                                >
                                    <SendMessageIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
