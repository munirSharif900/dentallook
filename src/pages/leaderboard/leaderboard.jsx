import { useState } from "react";
import Province from "./province";
import AgentView from "./agent-view";
import FilterHeader from "../../components/main-component/main-comonent";

const data = [
    { province: "Ontario", total: 12, received: 8, assigned: 6, stuck: 6, completed: 6, days: 30 },
    { province: "Saskatchewan", total: 9, received: 6, assigned: 4, stuck: 2, completed: 7, days: 25 },
    { province: "Alberta", total: 15, received: 10, assigned: 8, stuck: 3, completed: 12, days: 20 },
    { province: "Manitoba", total: 7, received: 5, assigned: 3, stuck: 1, completed: 6, days: 18 },
    { province: "Quebec", total: 20, received: 14, assigned: 11, stuck: 5, completed: 15, days: 22 },
    { province: "BC", total: 11, received: 9, assigned: 6, stuck: 2, completed: 9, days: 21 },
    { province: "Nova Scotia", total: 8, received: 6, assigned: 4, stuck: 1, completed: 7, days: 19 },
];

const DROPDOWN_BUTTON = [
    { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] grow" },
    { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 grow" },
    { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] grow" },
    { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] grow" },
    { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 grow" },
];

export default function Leaderboard() {
    const [activeView, setActiveView] = useState("operations");
    return (
        <div>
            <FilterHeader
                title="Leaderboard"
                dropdowns={DROPDOWN_BUTTON}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                <button
                    onClick={() =>
                        setActiveView(activeView === "operations" ? null : "operations")
                    }
                    className={`px-4 cursor-pointer py-4 border rounded-2xl flex items-center gap-3 text-xs font-normal transition-all
                                ${activeView === "operations"
                            ? "bg-[#087BB30D] border-[#087BB30D]"
                            : "bg-white text-[#63716E] border-[#E2E8F0]"
                        }
                     `}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect
                            width="36"
                            height="36"
                            rx="8"
                            fill={activeView === "operations" ? "white" : "#087BB3"}
                        />
                        <path
                            d="M23 17.9997V22.1663C23 23.5471 20.7614 24.6663 18 24.6663C15.2386 24.6663 13 23.5471 13 22.1663V17.9997M23 17.9997V13.833M23 17.9997C23 19.3804 20.7614 20.4997 18 20.4997C15.2386 20.4997 13 19.3804 13 17.9997M23 13.833C23 12.4523 20.7614 11.333 18 11.333C15.2386 11.333 13 12.4523 13 13.833M23 13.833C23 15.2137 20.7614 16.333 18 16.333C15.2386 16.333 13 15.2137 13 13.833M13 17.9997V13.833"
                            stroke={activeView === "operations" ? "#087BB3" : "white"}
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Operations View
                </button>

                <button
                    onClick={() =>
                        setActiveView(activeView === "department" ? null : "department")
                    }
                    className={`px-4 cursor-pointer py-4 border rounded-2xl flex items-center gap-3 text-xs font-normal transition-all
                                ${activeView === "department"
                            ? "bg-[#087BB30D] border-[#087BB30D]"
                            : "bg-white text-[#63716E] border-[#E2E8F0]"
                        }
                    `}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect
                            width="36"
                            height="36"
                            rx="8"
                            fill={activeView === "department" ? "white" : "#087BB3"}
                        />
                        <path
                            d="M23 17.9997V22.1663C23 23.5471 20.7614 24.6663 18 24.6663C15.2386 24.6663 13 23.5471 13 22.1663V17.9997M23 17.9997V13.833M23 17.9997C23 19.3804 20.7614 20.4997 18 20.4997C15.2386 20.4997 13 19.3804 13 17.9997M23 13.833C23 12.4523 20.7614 11.333 18 11.333C15.2386 11.333 13 12.4523 13 13.833M23 13.833C23 15.2137 20.7614 16.333 18 16.333C15.2386 16.333 13 15.2137 13 13.833M13 17.9997V13.833"
                            stroke={activeView === "department" ? "#087BB3" : "white"}
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Department View
                </button>
            </div>

            {activeView === "operations" && (
                <div className="grid gap-8 mt-6">
                    <div className="overflow-auto">
                        <div className="whitespace-nowrap w-full min-w-375">
                            <Province
                                data={data}
                                headding="Province View"
                                description="Tickets resolution performance by province"
                            />
                        </div>
                    </div>

                    <div className="overflow-auto">
                        <div className="whitespace-nowrap w-full min-w-375">
                            <Province
                                data={data}
                                headding="Region Overview"
                                description="Tickets submission and resolution status by region"
                            />
                        </div>
                    </div>

                    <div className="overflow-auto">
                        <div className="whitespace-nowrap w-full min-w-375">
                            <Province
                                data={data}
                                headding="Clinics Overview"
                                description="Tickets submission and resolution status by region"
                            />
                        </div>
                    </div>
                </div>
            )}
            {activeView === "department" && (
                <div className="grid gap-8 mt-6">
                    <div className="overflow-auto">
                        <div className="whitespace-nowrap w-full min-w-375">
                            <Province
                                data={data}
                                headding="Department View"
                                description="Tickets resolution performance by department"
                            />
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <div className="whitespace-nowrap w-full min-w-375">
                            <AgentView
                                headding="Agent View"
                                description="Tickets resolution performance by agent"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}