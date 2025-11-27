import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, BarChart3, Calendar, Bell, DollarSign, Settings, LogOut, User, MessageSquare, CreditCard, Shield, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { useState, useEffect } from 'react';

interface DashboardLayoutProps {
  onLogout: () => void;
}

export default function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Auto-open settings submenu when on settings page
  useEffect(() => {
    if (location.pathname.includes('/dashboard/configuracoes')) {
      setSettingsOpen(true);
    }
  }, [location.pathname]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Calendário', href: '/dashboard/calendario', icon: Calendar },
    { name: 'Notificações', href: '/dashboard/notificacoes', icon: Bell },
    { name: 'Financeiro', href: '/dashboard/financeiro', icon: DollarSign },
  ];

  const settingsSubMenu = [
    { name: 'Perfil', href: '/dashboard/configuracoes/perfil', icon: User },
    { name: 'Chatbot', href: '/dashboard/configuracoes/chatbot', icon: MessageSquare },
    { name: 'Notificações', href: '/dashboard/configuracoes/notificacoes', icon: Bell },
    { name: 'Cobrança', href: '/dashboard/configuracoes/cobranca', icon: CreditCard },
    { name: 'Segurança', href: '/dashboard/configuracoes/seguranca', icon: Shield },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-black/[0.08]">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-black/[0.08]">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <Bot className="size-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">VittaLink</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-50 text-green-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="size-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Settings with Submenu */}
            <Collapsible open={settingsOpen} onOpenChange={setSettingsOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 w-full ${
                    location.pathname.includes('/dashboard/configuracoes')
                      ? 'bg-green-50 text-green-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Settings className="size-5" />
                  <span className="flex-1 text-left">Configurações</span>
                  <ChevronDown className={`size-4 transition-transform duration-200 ${settingsOpen ? 'rotate-180' : ''}`} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1 space-y-1">
                {settingsSubMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 pl-12 rounded-xl transition-all duration-200 text-sm ${
                        location.pathname === item.href
                          ? 'bg-green-50 text-green-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="size-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-black/[0.08]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 w-full hover:bg-gray-100 transition-colors">
                  <div className="size-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">CA</span>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-medium text-gray-900 truncate">Dra. Camila dos Anjos</p>
                    <p className="text-xs text-gray-500 truncate">Plano Intermediário</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/dashboard/configuracoes/perfil')}>
                  <User className="size-4 mr-2" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/dashboard/configuracoes/perfil')}>
                  <Settings className="size-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="size-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}