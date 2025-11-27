import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Bot, MessageSquare, TrendingDown, BarChart3, Clock, Users, CheckCircle2, Star, ArrowRight, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function LandingPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduza o Churn',
      description: 'Diminua cancelamentos e faltas com lembretes automáticos e confirmações inteligentes.',
      color: 'from-green-500 to-green-600',
      shadowColor: 'shadow-green-500/20',
    },
    {
      icon: MessageSquare,
      title: 'Comunicação Humanizada',
      description: 'Secretária virtual com IA que interage via WhatsApp com linguagem natural e empática.',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: BarChart3,
      title: 'Gestão Baseada em Dados',
      description: 'Dashboards com indicadores de desempenho, taxas de retorno e eficiência operacional.',
      color: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      icon: Shield,
      title: 'Segurança e LGPD',
      description: 'Dados armazenados com segurança e total conformidade com a Lei Geral de Proteção de Dados.',
      color: 'from-amber-500 to-amber-600',
      shadowColor: 'shadow-amber-500/20',
    },
  ];

  const teamMembers = [
    { name: 'Dr. João Santos', role: 'Cardiologia', initials: 'JS' },
    { name: 'Dra. Maria Lima', role: 'Pediatria', initials: 'ML' },
    { name: 'Dr. Pedro Costa', role: 'Ortopedia', initials: 'PC' },
    { name: 'Dra. Ana Silva', role: 'Dermatologia', initials: 'AS' },
  ];

  const testimonials = [
    {
      name: 'Dra. Camila dos Anjos',
      role: 'Cardiologista - Recife/PE',
      text: 'A VittaLink transformou minha rotina. Reduzi os custos com secretariado e meus pacientes adoram a facilidade de agendar pelo WhatsApp.',
      rating: 5,
    },
    {
      name: 'Dr. Luiz Fernando',
      role: 'Clínica Bem Estar',
      text: 'Finalmente tenho visibilidade sobre os motivos dos cancelamentos. O dashboard é essencial para minha gestão.',
      rating: 5,
    },
  ];

  const plans = [
    {
      name: 'Básico',
      price: 'R$ 197',
      period: '/mês',
      description: 'Essencial para organização inicial',
      features: [
        'Chat de atendimento via WhatsApp',
        'Agendamento automatizado',
        'Lembretes de consulta',
        'Suporte por email',
      ],
      popular: false,
    },
    {
      name: 'Intermediário',
      price: 'R$ 397',
      period: '/mês',
      description: 'Gestão inteligente para crescimento',
      features: [
        'Tudo do plano Básico',
        'Painel de Analytics completo',
        'Métricas de engajamento',
        'Histórico de pacientes',
        'Relatórios personalizados',
      ],
      popular: true,
    },
    {
      name: 'Avançado',
      price: 'R$ 797',
      period: '/mês',
      description: 'Potência máxima em automação',
      features: [
        'Tudo do plano Intermediário',
        'Assistente virtual com IA humanizada',
        'Integrações personalizadas',
        'Suporte Premium prioritário',
        'Onboarding dedicado',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.08]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Bot className="size-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">VittaLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Sobre</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefícios</a>
            <a href="#plans" className="text-gray-600 hover:text-gray-900 transition-colors">Planos</a>
          </nav>
          <Button 
            onClick={() => navigate('/criar-conta')}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/25"
          >
            Teste Grátis
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200/50 rounded-full text-sm text-green-700">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
              </span>
              Tecnologia para uma saúde mais humana
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold leading-tight">
              Conecte Pacientes e Consultórios com Inteligência
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A VittaLink é a plataforma SaaS que une automação e humanização. Reduza o churn, otimize sua agenda e ofereça um atendimento empático 24/7 via WhatsApp.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/criar-conta')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl shadow-green-500/25"
              >
                Começar Teste Grátis
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="border-black/10 hover:bg-black/5"
              >
                Fazer Login
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-black/[0.08]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDIwNDY4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tecnologia médica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-black/[0.08]">
              <div className="flex items-center gap-3">
                <div className="size-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <TrendingDown className="size-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">30%</p>
                  <p className="text-sm text-gray-600">Menos cancelamentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a VittaLink?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções desenhadas para a realidade de consultórios e clínicas modernas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-b from-white to-gray-50/50 border border-black/[0.08] rounded-2xl hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`size-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg ${benefit.shadowColor} group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-600 to-green-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-6 max-w-7xl relative">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-16">O que dizem nossos parceiros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 text-amber-300 fill-amber-300" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-green-100 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos Flexíveis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o momento do seu consultório. Teste grátis por 30 dias.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 bg-white border rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/20' 
                    : 'border-black/[0.08] hover:shadow-xl hover:shadow-black/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm rounded-full shadow-lg font-medium">
                    Mais Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate('/criar-conta')}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/25'
                      : 'border-black/10 hover:bg-black/5'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Começar Agora
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-100 to-green-50/50 border-t border-black/[0.08]">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">VittaLink</h3>
              <p className="text-gray-600 text-sm mb-4">
                Transformando a relação entre médicos e pacientes através da tecnologia humanizada.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>contato@vittalink.com.br</li>
                <li>Recife, PE</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacidade & LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-black/[0.08] text-center text-gray-600 text-sm">
            <p>© 2025 VittaLink. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}