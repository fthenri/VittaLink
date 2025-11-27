import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Check } from 'lucide-react';
import { Badge } from './ui/badge';

interface PlanSelectionProps {
  onSelectPlan: () => void;
}

export default function PlanSelection({ onSelectPlan }: PlanSelectionProps) {
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    onSelectPlan();
    navigate('/dashboard');
  };

  const plans = [
    {
      name: 'Básico',
      price: 'R$ 197',
      period: '/mês',
      description: 'Para organização inicial do consultório',
      features: [
        'Chat de atendimento via WhatsApp',
        'Agendamento automatizado',
        'Lembretes de consulta',
        'Suporte por email',
        'Acesso básico'
      ],
      popular: false
    },
    {
      name: 'Intermediário',
      price: 'R$ 397',
      period: '/mês',
      description: 'Gestão inteligente baseada em dados',
      features: [
        'Tudo do plano Básico',
        'Painel de Analytics completo',
        'Métricas de engajamento',
        'Histórico de pacientes',
        'Relatórios personalizados',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      name: 'Avançado',
      price: 'R$ 797',
      period: '/mês',
      description: 'Automação total e IA humanizada',
      features: [
        'Tudo do plano Intermediário',
        'Assistente virtual com IA humanizada',
        'Integrações personalizadas',
        'Suporte Premium',
        'Onboarding dedicado',
        'API de integração'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Escolha o plano ideal para você</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece com 30 dias de teste grátis. Cancele quando quiser, sem taxas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative border transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-green-600 shadow-lg shadow-green-500/10' 
                  : 'border-black/[0.08] hover:shadow-black/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-1 shadow-lg">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700">
                      <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleSelectPlan}
                  className={`w-full h-11 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/25'
                      : 'bg-white hover:bg-gray-50 text-gray-900 border border-black/10'
                  }`}
                >
                  Selecionar Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p>Todos os planos incluem 30 dias de teste grátis para validação.</p>
        </div>
      </div>
    </div>
  );
}