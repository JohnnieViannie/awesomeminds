import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import School from "./pages/School";
import Impact from "./pages/Impact";
import Gallery from "./pages/Gallery";
import BeAwesome from "./pages/BeAwesome";
import Ideas from "./pages/Ideas";
import GetInvolved from "./pages/GetInvolved";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { TextReveal } from "./components/layout/motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TextReveal />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/school" element={<School />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/be-awesome" element={<BeAwesome />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/safeguarding" element={<Policy title="Safeguarding" />} />
          <Route path="/privacy" element={<Policy title="Privacy Policy" />} />
          <Route path="/code-of-conduct" element={<Policy title="Code of Conduct" />} />
          <Route path="/volunteer" element={<Policy title="Volunteer Role Description" />} />
          <Route path="/playground" element={<Navigate to="/" replace />} />
          <Route path="/blueprint" element={<Navigate to="/about" replace />} />
          <Route path="/superpower" element={<Navigate to="/about" replace />} />
          <Route path="/studio" element={<Navigate to="/impact" replace />} />
          <Route path="/people" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<Navigate to="/get-involved" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
