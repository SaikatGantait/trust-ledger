import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Borrow from "./pages/Borrow";
import Vault from "./pages/Vault";
import CreditProfile from "./pages/CreditProfile";
import LenderDashboard from "./pages/LenderDashboard";
import IdentityVerification from "./pages/IdentityVerification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/lend" element={<LenderDashboard />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/credit-profile" element={<CreditProfile />} />
          <Route path="/verify" element={<IdentityVerification />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
