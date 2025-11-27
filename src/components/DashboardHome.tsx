import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MessageSquare, Users, Calendar, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardHome() {
  const stats = [
    {
      title: 'Conversas Hoje',
      value: '124',
      change: '+12%',
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Agendamentos',
      value: '38',
      change: '+8%',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Taxa de Resposta',
      value: '94%',
      change: '+3%',
      icon: TrendingUp,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      title: 'Tempo Médio',
      value: '2.3min',
      change: '-15%',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const conversationData = [
    { day: 'Seg', conversas: 85 },
    { day: 'Ter', conversas: 92 },
    { day: 'Qua', conversas: 78 },
    { day: 'Qui', conversas: 105 },
    { day: 'Sex', conversas: 124 },
    { day: 'Sáb', conversas: 45 },
    { day: 'Dom', conversas: 32 }
  ];

  const appointmentData = [
    { month: 'Jan', agendamentos: 120 },
    { month: 'Fev', agendamentos: 145 },
    { month: 'Mar', agendamentos: 165 },
    { month: 'Abr', agendamentos: 190 },
    { month: 'Mai', agendamentos: 210 },
    { month: 'Jun', agendamentos: 238 }
  ];

  const recentActivities = [
    { type: 'agendamento', patient: 'Maria Silva', time: '5 min atrás', status: 'success' },
    { type: 'mensagem', patient: 'João Santos', time: '12 min atrás', status: 'success' },
    { type: 'cancelamento', patient: 'Ana Costa', time: '25 min atrás', status: 'warning' },
    { type: 'agendamento', patient: 'Pedro Lima', time: '34 min atrás', status: 'success' },
    { type: 'mensagem', patient: 'Carla Souza', time: '48 min atrás', status: 'success' }
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu consultório</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-black/[0.08] bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} vs. semana passada
                    </p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-xl shadow-sm`}>
                    <Icon className="size-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-black/[0.08] bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Conversas da Semana</CardTitle>
            <CardDescription className="text-gray-600">
              Total de interações nos últimos 7 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="conversas" 
                  stroke="#059669" 
                  strokeWidth={3}
                  dot={{ fill: '#059669', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-black/[0.08] bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Crescimento de Agendamentos</CardTitle>
            <CardDescription className="text-gray-600">
              Evolução mensal de consultas agendadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="agendamentos" 
                  stroke="#059669" 
                  fill="#d1fae5"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="border-black/[0.08] bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Atividades Recentes</CardTitle>
          <CardDescription className="text-gray-600">
            Últimas interações do chatbot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`${
                    activity.status === 'success' ? 'bg-green-100' : 'bg-amber-100'
                  } p-3 rounded-xl`}>
                    {activity.status === 'success' ? (
                      <CheckCircle className={`size-5 ${
                        activity.status === 'success' ? 'text-green-600' : 'text-amber-600'
                      }`} />
                    ) : (
                      <Clock className="size-5 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {activity.type === 'agendamento' && 'Agendamento realizado'}
                      {activity.type === 'mensagem' && 'Nova mensagem'}
                      {activity.type === 'cancelamento' && 'Cancelamento de consulta'}
                    </p>
                    <p className="text-sm text-gray-600">{activity.patient}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}