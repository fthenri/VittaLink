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
      description: 'Ideal para consultórios iniciantes',
      features: [
        'Até 500 conversas/mês',
        'Agendamento automático',
        'Lembretes de consulta',
        'Suporte por email',
        'Dashboard básico'
      ],
      popular: false
    },
    {
      name: 'Profissional',
      price: 'R$ 397',
      period: '/mês',
      description: 'Perfeito para clínicas em crescimento',
      features: [
        'Até 2.000 conversas/mês',
        'Agendamento automático',
        'Lembretes de consulta',
        'Confirmação de presença',
        'Analytics completo',
        'Suporte prioritário',
        'Integrações avançadas'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 797',
      period: '/mês',
      description: 'Para grandes clínicas e hospitais',
      features: [
        'Conversas ilimitadas',
        'Todos os recursos Pro',
        'Múltiplas especialidades',
        'API personalizada',
        'Treinamento customizado',
        'Suporte 24/7',
        'Gerente de conta dedicado'
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
            Comece com 14 dias de teste grátis. Cancele quando quiser, sem taxas ocultas.
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
                  Começar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p>Todos os planos incluem 14 dias de teste grátis</p>
        </div>
      </div>
    </div>
  );
}