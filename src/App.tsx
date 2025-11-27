import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PlanSelection from './components/PlanSelection';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import Analytics from './components/Analytics';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';
import Financial from './components/Financial';
import Settings from './components/Settings';
import ProfileSettings from './components/settings/ProfileSettings';
import ChatbotSettings from './components/settings/ChatbotSettings';
import NotificationsSettings from './components/settings/NotificationsSettings';
import BillingSettings from './components/settings/BillingSettings';
import SecuritySettings from './components/settings/SecuritySettings';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPlan, setHasPlan] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setHasPlan(true); // Usuários existentes já têm plano
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setHasPlan(false); // Novos usuários precisam escolher plano
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setHasPlan(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/criar-conta" 
          element={<SignUp onSignUp={handleSignUp} />} 
        />
        <Route 
          path="/planos" 
          element={
            isAuthenticated ? 
            <PlanSelection onSelectPlan={() => setHasPlan(true)} /> : 
            <Navigate to="/login" />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated && hasPlan ? 
            <DashboardLayout onLogout={handleLogout} /> : 
            <Navigate to="/login" />
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="calendario" element={<Calendar />} />
          <Route path="notificacoes" element={<Notifications />} />
          <Route path="financeiro" element={<Financial />} />
          <Route path="configuracoes" element={<Settings />} />
          <Route path="configuracoes/perfil" element={<ProfileSettings />} />
          <Route path="configuracoes/chatbot" element={<ChatbotSettings />} />
          <Route path="configuracoes/notificacoes" element={<NotificationsSettings />} />
          <Route path="configuracoes/cobranca" element={<BillingSettings />} />
          <Route path="configuracoes/seguranca" element={<SecuritySettings />} />
        </Route>
      </Routes>
    </Router>
  );
}