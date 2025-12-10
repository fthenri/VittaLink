import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface SignUpProps {
  onSignUp: () => void;
}

export default function SignUp({ onSignUp }: SignUpProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    onSignUp();
    navigate('/planos');
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
            {/* Left Side - Decorative panel (image removed per request) */}
            <div className="relative bg-gradient-to-br from-green-100 to-green-50 p-12 flex items-center justify-center min-h-[500px]">
              {/* Image removed - keep panel for layout consistency */}
              <div className="w-full h-full rounded-2xl" aria-hidden="true" />
            </div>

            {/* Right Side - Form */}
            <div className="p-12 flex flex-col justify-center bg-white">
              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-3xl text-gray-900 mb-8">Criar uma conta</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 text-sm">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Dr. João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-300 bg-stone-50 h-11 focus:border-teal-600 focus:ring-teal-600/20 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="border-gray-300 bg-stone-50 h-11 focus:border-teal-600 focus:ring-teal-600/20 rounded-lg"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-11 bg-teal-700 hover:bg-teal-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Criar Conta
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  Já tem uma conta?{' '}
                  <button
                    onClick={() => navigate('/login')}
                    className="text-teal-700 hover:text-teal-800 font-medium transition-colors"
                  >
                    Fazer login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
