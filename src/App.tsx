import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { routeLoaders } from "@/consts/routes";
const Home = lazy(routeLoaders.home);
const Services = lazy(routeLoaders.services);
const Training = lazy(routeLoaders.training);
const Rental = lazy(routeLoaders.rental);
const HomeFr = lazy(routeLoaders.homeFr);
const ServicesFr = lazy(routeLoaders.servicesFr);
const TrainingFr = lazy(routeLoaders.trainingFr);
const RentalFr = lazy(routeLoaders.rentalFr);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fr" element={<HomeFr />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fr/services" element={<ServicesFr />} />
            <Route path="/training" element={<Training />} />
            <Route path="/fr/training" element={<TrainingFr />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/fr/rental" element={<RentalFr />} />
            <Route path="/fr/*" element={<HomeFr />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
