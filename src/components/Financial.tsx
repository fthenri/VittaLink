import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { DollarSign, TrendingUp, CreditCard, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Financial() {
  const summaryCards = [
    {
      title: 'Receita Mensal',
      value: 'R$ 12.450',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      description: 'vs. mês anterior'
    },
    {
      title: 'Média por Consulta',
      value: 'R$ 285',
      change: '+3%',
      trend: 'up',
      icon: TrendingUp,
      description: 'valor médio cobrado'
    },
    {
      title: 'Pagamentos Pendentes',
      value: 'R$ 1.850',
      change: '8 pagamentos',
      trend: 'neutral',
      icon: Clock,
      description: 'aguardando confirmação'
    },
    {
      title: 'Taxa de Conversão',
      value: '68%',
      change: '+5%',
      trend: 'up',
      icon: CreditCard,
      description: 'agendamentos pagos'
    }
  ];

  const monthlyRevenue = [
    { month: 'Jan', receita: 8500 },
    { month: 'Fev', receita: 9200 },
    { month: 'Mar', receita: 9800 },
    { month: 'Abr', receita: 10500 },
    { month: 'Mai', receita: 11200 },
    { month: 'Jun', receita: 12450 }
  ];

  const transactions = [
    {
      id: 1,
      patient: 'Maria Silva',
      amount: 250,
      date: '22/11/2025',
      status: 'confirmed',
      method: 'Cartão de Crédito'
    },
    {
      id: 2,
      patient: 'João Santos',
      amount: 300,
      date: '22/11/2025',
      status: 'confirmed',
      method: 'PIX'
    },
    {
      id: 3,
      patient: 'Ana Costa',
      amount: 280,
      date: '21/11/2025',
      status: 'pending',
      method: 'Cartão de Débito'
    },
    {
      id: 4,
      patient: 'Pedro Lima',
      amount: 250,
      date: '21/11/2025',
      status: 'confirmed',
      method: 'Dinheiro'
    },
    {
      id: 5,
      patient: 'Carla Souza',
      amount: 320,
      date: '20/11/2025',
      status: 'confirmed',
      method: 'PIX'
    },
    {
      id: 6,
      patient: 'Roberto Alves',
      amount: 250,
      date: '20/11/2025',
      status: 'pending',
      method: 'Cartão de Crédito'
    },
    {
      id: 7,
      patient: 'Juliana Dias',
      amount: 380,
      date: '19/11/2025',
      status: 'confirmed',
      method: 'PIX'
    },
    {
      id: 8,
      patient: 'Marcos Oliveira',
      amount: 250,
      date: '19/11/2025',
      status: 'confirmed',
      method: 'Cartão de Débito'
    }
  ];

  const paymentMethods = [
    { method: 'PIX', count: 45, percentage: 38 },
    { method: 'Cartão de Crédito', count: 42, percentage: 35 },
    { method: 'Cartão de Débito', count: 22, percentage: 18 },
    { method: 'Dinheiro', count: 11, percentage: 9 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-green-800 mb-2">Financeiro</h1>
        <p className="text-green-700/70">Acompanhe suas receitas e pagamentos</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="border-green-100">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <Icon className="size-6" />
                  </div>
                  {card.trend === 'up' && (
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="size-4" />
                      <span className="text-sm">{card.change}</span>
                    </div>
                  )}
                  {card.trend === 'down' && (
                    <div className="flex items-center gap-1 text-red-600">
                      <ArrowDownRight className="size-4" />
                      <span className="text-sm">{card.change}</span>
                    </div>
                  )}
                </div>
                <p className="text-green-700/70 mb-1">{card.title}</p>
                <p className="text-green-800 mb-1">{card.value}</p>
                <p className="text-green-700/60">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="text-green-800">Evolução da Receita</CardTitle>
          <CardDescription className="text-green-700/70">
            Receita mensal nos últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
              <XAxis dataKey="month" stroke="#059669" />
              <YAxis stroke="#059669" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #d1fae5',
                  borderRadius: '8px'
                }}
                formatter={(value) => `R$ ${value}`}
              />
              <Line 
                type="monotone" 
                dataKey="receita" 
                stroke="#059669" 
                strokeWidth={2}
                dot={{ fill: '#059669', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="bg-white border border-green-100">
          <TabsTrigger 
            value="transactions" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Transações
          </TabsTrigger>
          <TabsTrigger 
            value="methods" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Formas de Pagamento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Transações Recentes</CardTitle>
              <CardDescription className="text-green-700/70">
                Histórico de pagamentos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-4 bg-white border border-green-100 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        transaction.status === 'confirmed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-amber-100 text-amber-600'
                      }`}>
                        <DollarSign className="size-5" />
                      </div>
                      <div>
                        <p className="text-green-800">{transaction.patient}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-green-700/60">{transaction.method}</p>
                          <span className="text-green-700/40">•</span>
                          <p className="text-green-700/60">{transaction.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-800 mb-1">R$ {transaction.amount.toFixed(2)}</p>
                      <Badge 
                        variant={transaction.status === 'confirmed' ? 'default' : 'outline'}
                        className={
                          transaction.status === 'confirmed' 
                            ? 'bg-green-600 text-white' 
                            : 'border-amber-600 text-amber-700'
                        }
                      >
                        {transaction.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Formas de Pagamento</CardTitle>
              <CardDescription className="text-green-700/70">
                Distribuição dos métodos de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {paymentMethods.map((method) => (
                  <div key={method.method} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="size-5 text-green-600" />
                        <span className="text-green-800">{method.method}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-green-800">{method.count} transações</span>
                        <span className="text-green-700/60 ml-2">({method.percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${method.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
