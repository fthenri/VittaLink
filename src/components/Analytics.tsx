import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, MessageCircle, Clock } from 'lucide-react';

export default function Analytics() {
  const hourlyData = [
    { hour: '8h', conversas: 12 },
    { hour: '9h', conversas: 28 },
    { hour: '10h', conversas: 45 },
    { hour: '11h', conversas: 52 },
    { hour: '12h', conversas: 38 },
    { hour: '13h', conversas: 25 },
    { hour: '14h', conversas: 48 },
    { hour: '15h', conversas: 56 },
    { hour: '16h', conversas: 42 },
    { hour: '17h', conversas: 35 },
    { hour: '18h', conversas: 18 }
  ];

  const intentData = [
    { name: 'Agendamento', value: 340 },
    { name: 'Dúvidas', value: 220 },
    { name: 'Cancelamento', value: 85 },
    { name: 'Reagendamento', value: 125 },
    { name: 'Informações', value: 180 }
  ];

  const COLORS = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];

  const satisfactionData = [
    { month: 'Jan', satisfacao: 85, resolucao: 78 },
    { month: 'Fev', satisfacao: 88, resolucao: 82 },
    { month: 'Mar', satisfacao: 90, resolucao: 85 },
    { month: 'Abr', satisfacao: 92, resolucao: 88 },
    { month: 'Mai', satisfacao: 91, resolucao: 90 },
    { month: 'Jun', satisfacao: 94, resolucao: 92 }
  ];

  const performanceMetrics = [
    {
      title: 'Taxa de Conversão',
      value: '68%',
      change: '+5%',
      icon: TrendingUp,
      description: 'Conversas que resultam em agendamento'
    },
    {
      title: 'Pacientes Únicos',
      value: '1,247',
      change: '+12%',
      icon: Users,
      description: 'Total de pacientes atendidos'
    },
    {
      title: 'Msg por Conversa',
      value: '4.2',
      change: '-0.3',
      icon: MessageCircle,
      description: 'Média de mensagens trocadas'
    },
    {
      title: 'Tempo de Resposta',
      value: '1.8s',
      change: '-0.5s',
      icon: Clock,
      description: 'Tempo médio de resposta do bot'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-green-800 mb-2">Analytics</h1>
        <p className="text-green-700/70">Análise detalhada do desempenho do seu chatbot</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title} className="border-green-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <Icon className="size-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-700/70">{metric.title}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <p className="text-green-800">{metric.value}</p>
                      <span className={`text-sm ${
                        metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-green-700/60 text-sm mt-1">{metric.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border border-green-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="behavior" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Comportamento
          </TabsTrigger>
          <TabsTrigger value="satisfaction" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Satisfação
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800">Conversas por Horário</CardTitle>
                <CardDescription className="text-green-700/70">
                  Distribuição de atendimentos ao longo do dia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                    <XAxis dataKey="hour" stroke="#059669" />
                    <YAxis stroke="#059669" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #d1fae5',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="conversas" fill="#059669" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800">Intenções dos Usuários</CardTitle>
                <CardDescription className="text-green-700/70">
                  Principais motivos de contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={intentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {intentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #d1fae5',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Padrões de Comportamento</CardTitle>
              <CardDescription className="text-green-700/70">
                Como os pacientes interagem com o chatbot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <p className="text-green-700/70 mb-2">Duração Média</p>
                  <p className="text-green-800">3min 24s</p>
                  <p className="text-green-600 text-sm mt-1">-12% vs. mês passado</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <p className="text-green-700/70 mb-2">Taxa de Abandono</p>
                  <p className="text-green-800">8.4%</p>
                  <p className="text-green-600 text-sm mt-1">-2.1% vs. mês passado</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <p className="text-green-700/70 mb-2">Retorno em 30 dias</p>
                  <p className="text-green-800">64%</p>
                  <p className="text-green-600 text-sm mt-1">+8% vs. mês passado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Satisfação e Resolução</CardTitle>
              <CardDescription className="text-green-700/70">
                Índices de satisfação e taxa de resolução ao longo do tempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                  <XAxis dataKey="month" stroke="#059669" />
                  <YAxis stroke="#059669" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1fae5',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="satisfacao" 
                    stroke="#059669" 
                    strokeWidth={2}
                    name="Satisfação (%)"
                    dot={{ fill: '#059669', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolucao" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Resolução (%)"
                    dot={{ fill: '#10b981', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
