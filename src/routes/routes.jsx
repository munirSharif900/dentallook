import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/layouts";
import Tickets from "../pages/tickets/tickets";
import Analytics from "../pages/analytics/analytics";
import Dashboard from "../pages/dashboard/dashboard";
import UserAudit from "../pages/user-audit/user-audit";
import Leaderboard from "../pages/leaderboard/leaderboard";
import Setting from "../pages/setting/setting";


export default function MyRouts() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<DashboardLayout />}>
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user-audit" element={<UserAudit />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                 <Route path="/setting" element={<Setting />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}