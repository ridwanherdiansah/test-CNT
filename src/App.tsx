// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPages from "./pages/Index";

const queryClient = new QueryClient();

// Fungsi dummy untuk cek apakah user sudah login
const isLoggedIn = () => {
  return !!localStorage.getItem("userData");
};

// Komponen untuk proteksi route    
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isLoggedIn() ? element : <Navigate to="/login" />;
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MainPages />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
