import { useNavigate } from "react-router-dom";
import { TickMark } from "../../assets/images";
import Button from "../button/button";

export default function TicketSuccessModal({ open, onClose, onAnother }) {
    const navigate = useNavigate();
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60">
            <div className="bg-white w-full max-w-md rounded-xl shadow-xl px-6 py-4 text-center space-y-4">
                <div className="flex justify-between pb-4 border-b border-gray-300">
                    <h2 className="text-lg font-semibold not-italic">IT Service Desk Request Submitted</h2>
                    <button onClick={onClose} className="cursor-pointer">✕</button>
                </div>

                <div className="flex justify-center items-center">
                    <img src={TickMark} alt="Tickmark" width={100} height={100} loading="lazy"/>
                </div>

                <p className="text-sm text-gray-600">
                    Thank you for submitting the request,
                    <br />
                    what would you like to do next?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <Button onClick={() => navigate("/dashboard")} className="border border-gray-300 rounded!" text="Go to My Dashboard"/>
                    <Button onClick={onAnother} className="bg-[#087BB3] text-white rounded!" text="Submit Another Ticket"/>
                </div>
            </div>
        </div>
    );
}
