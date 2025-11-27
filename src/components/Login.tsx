import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    onLogin();
    navigate('/dashboard'); // Vai direto para o dashboard
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-gray-600 hover:text-gray-900 hover:bg-white/50"
        >
          <ArrowLeft className="size-4 mr-2" />
          Voltar para home
        </Button>

        <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative bg-gradient-to-br from-green-100 to-green-50 p-12 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759270463144-02b90c57135d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMG1lZGljYWx8ZW58MXx8fHwxNzY0MjA0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical abstract"
                  className="w-full h-full object-cover opacity-60 rounded-2xl"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12 flex flex-col justify-center bg-white">
              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-3xl text-gray-900 mb-8">Login</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-gray-300 bg-stone-50 h-11 focus:border-teal-600 focus:ring-teal-600/20 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 text-sm">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border-gray-300 bg-stone-50 h-11 focus:border-teal-600 focus:ring-teal-600/20 rounded-lg"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-teal-700 hover:bg-teal-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Entrar
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  Não tem uma conta?{' '}
                  <button
                    onClick={() => navigate('/criar-conta')}
                    className="text-teal-700 hover:text-teal-800 font-medium transition-colors"
                  >
                    Criar conta
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-teal-700 hover:text-teal-800 transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
