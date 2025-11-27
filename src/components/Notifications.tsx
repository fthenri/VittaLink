import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Bell, CheckCircle, AlertCircle, Info, Calendar, MessageSquare, DollarSign } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      title: 'Agendamento confirmado',
      message: 'Maria Silva confirmou presença para consulta de amanhã às 09:00',
      time: '5 minutos atrás',
      read: false,
      category: 'agendamento'
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertCircle,
      title: 'Cancelamento de consulta',
      message: 'João Santos cancelou a consulta de 25/11 às 14:00',
      time: '1 hora atrás',
      read: false,
      category: 'agendamento'
    },
    {
      id: 3,
      type: 'info',
      icon: MessageSquare,
      title: 'Nova mensagem',
      message: 'Ana Costa enviou uma mensagem perguntando sobre documentação',
      time: '2 horas atrás',
      read: false,
      category: 'mensagem'
    },
    {
      id: 4,
      type: 'success',
      icon: DollarSign,
      title: 'Pagamento recebido',
      message: 'Pagamento de R$ 200,00 confirmado - Pedro Lima',
      time: '3 horas atrás',
      read: true,
      category: 'financeiro'
    },
    {
      id: 5,
      type: 'info',
      icon: Calendar,
      title: 'Lembrete de consulta',
      message: '5 consultas agendadas para amanhã - Enviar lembretes automáticos',
      time: '4 horas atrás',
      read: true,
      category: 'agendamento'
    },
    {
      id: 6,
      type: 'warning',
      icon: AlertCircle,
      title: 'Taxa de resposta baixa',
      message: 'A taxa de resposta do chatbot caiu 5% nas últimas 24h',
      time: '5 horas atrás',
      read: true,
      category: 'sistema'
    },
    {
      id: 7,
      type: 'success',
      icon: CheckCircle,
      title: 'Meta alcançada',
      message: 'Parabéns! Você alcançou 100 agendamentos este mês',
      time: '1 dia atrás',
      read: true,
      category: 'sistema'
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200'
        };
      case 'warning':
        return {
          bg: 'bg-amber-100',
          text: 'text-amber-600',
          border: 'border-amber-200'
        };
      case 'info':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  const filterNotifications = (category?: string) => {
    if (!category) return notifications;
    return notifications.filter(n => n.category === category);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-green-800 mb-2">Notificações</h1>
          <p className="text-green-700/70">Acompanhe todas as atualizações importantes</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-green-600 text-white">
            {unreadCount} não lidas
          </Badge>
          <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
            Marcar todas como lidas
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-white border border-green-100">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Todas
          </TabsTrigger>
          <TabsTrigger 
            value="agendamento" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Agendamentos
          </TabsTrigger>
          <TabsTrigger 
            value="mensagem" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Mensagens
          </TabsTrigger>
          <TabsTrigger 
            value="financeiro" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Financeiro
          </TabsTrigger>
          <TabsTrigger 
            value="sistema" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Sistema
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const colors = getNotificationColor(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${colors.border} ${!notification.read ? 'bg-green-50/30' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-green-800">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            Nova
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-700/70 mb-2">{notification.message}</p>
                      <p className="text-green-700/60">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="agendamento" className="space-y-4">
          {filterNotifications('agendamento').map((notification) => {
            const Icon = notification.icon;
            const colors = getNotificationColor(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${colors.border} ${!notification.read ? 'bg-green-50/30' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-green-800">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            Nova
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-700/70 mb-2">{notification.message}</p>
                      <p className="text-green-700/60">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="mensagem" className="space-y-4">
          {filterNotifications('mensagem').map((notification) => {
            const Icon = notification.icon;
            const colors = getNotificationColor(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${colors.border} ${!notification.read ? 'bg-green-50/30' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-green-800">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            Nova
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-700/70 mb-2">{notification.message}</p>
                      <p className="text-green-700/60">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="financeiro" className="space-y-4">
          {filterNotifications('financeiro').map((notification) => {
            const Icon = notification.icon;
            const colors = getNotificationColor(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${colors.border} ${!notification.read ? 'bg-green-50/30' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-green-800">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            Nova
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-700/70 mb-2">{notification.message}</p>
                      <p className="text-green-700/60">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="sistema" className="space-y-4">
          {filterNotifications('sistema').map((notification) => {
            const Icon = notification.icon;
            const colors = getNotificationColor(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${colors.border} ${!notification.read ? 'bg-green-50/30' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-green-800">{notification.title}</h4>
                        {!notification.read && (
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            Nova
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-700/70 mb-2">{notification.message}</p>
                      <p className="text-green-700/60">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
