import { useState } from "react";

export default function TicketDetails() {
    const [activeTab, setActiveTab] = useState("info");
    const POPUP_BUTTON = [
        { id: 1, text: 'Support Category', button: 'General' },
        { id: 2, text: 'Device with Issue', button: 'Computers' },
        { id: 3, text: 'Computer Name', button: 'TX-1024' },
        { id: 4, text: 'Computer Location', button: 'Front Desk' }
    ]

    return (
        <div>
            <div className="py-4.5 flex items-center gap-1 justify-between border-b border-[#E2E8F0]">
                <p className="text-[#475569] text-xs font-semibold">Department</p>
                <span className="text-[#272727] text-xs font-semibold">It Department</span>
            </div>
            {POPUP_BUTTON.map(card =>
                <div className="py-4.5 flex items-center gap-1 justify-between border-b border-[#E2E8F0]" key={card.id}>
                    <p className="text-[#475569] text-xs font-semibold">{card.text}</p>
                    <span className="text-[#373940] text-sm px-4 py-2 border border-[#E2E8F0] rounded-3xl font-semibold max-w-35 w-full text-center" style={{ background: "rgba(52, 179, 241, 0.05)" }}>{card.button}</span>
                </div>
            )}

            <div>
                <div className="flex px-5 items-center gap-4 border-b border-[#E2E8F0] mb-4">
                    <button
                        onClick={() => setActiveTab("info")}
                        className={`text-xs font-medium px-3 py-2 cursor-pointer ${activeTab === "info"
                            ? "text-[#81BD41] border-b-2 border-[#81BD41]"
                            : "text-[#63716E]"
                            }`}
                    >
                        Ticket Information
                    </button>

                    <button
                        onClick={() => setActiveTab("attachments")}
                        className={`text-xs font-medium px-3 py-2 cursor-pointer ${activeTab === "attachments"
                            ? "text-[#81BD41] border-b-2 border-[#81BD41]"
                            : "text-[#63716E]"
                            }`}
                    >
                        Attachments
                    </button>
                </div>

                {activeTab === "info" && (
                    <div className="">
                        <p className="text-xs font-medium text-[#63716E] pb-1.5">
                            Short Note or Recommendation
                        </p>
                        <div className="bg-[#F7F7F7] rounded-lg border border-[#D5D7DA] h-25 w-full px-3 py-2.5 shadow-xs">
                            <p className="text-[#203430] text-xs font-medium">
                                Quisquam qui est eu
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "attachments" && (
                    <div className="">
                        <p className="text-xs font-medium text-[#63716E] pb-1.5">
                            Attachments
                        </p>
                        <div className="bg-[#F7F7F7] border border-[#D5D7DA] h-9 rounded-lg w-full px-3 py-2 shadow-xs ">
                            <p className="text-xs text-[#203430] font-medium">
                                No attachments found
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}