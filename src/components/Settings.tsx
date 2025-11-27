import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Bell, Bot, CreditCard, Shield } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-green-800 mb-2">Configurações</h1>
        <p className="text-green-700/70">Gerencie as preferências da sua conta</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white border border-green-100">
          <TabsTrigger 
            value="profile" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            <User className="size-4 mr-2" />
            Perfil
          </TabsTrigger>
          <TabsTrigger 
            value="chatbot" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            <Bot className="size-4 mr-2" />
            Chatbot
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            <Bell className="size-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger 
            value="billing" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            <CreditCard className="size-4 mr-2" />
            Cobrança
          </TabsTrigger>
          <TabsTrigger 
            value="security" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            <Shield className="size-4 mr-2" />
            Segurança
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Informações Pessoais</CardTitle>
              <CardDescription className="text-green-700/70">
                Atualize seus dados pessoais e profissionais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="size-20 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-800">DC</span>
                </div>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Alterar Foto
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" defaultValue="Dr. Carlos Silva" className="border-green-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade</Label>
                  <Input id="specialty" defaultValue="Cardiologia" className="border-green-200" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="carlos@clinica.com" className="border-green-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 98765-4321" className="border-green-200" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinic">Nome da Clínica</Label>
                <Input id="clinic" defaultValue="Clínica CardioVida" className="border-green-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Textarea 
                  id="address" 
                  defaultValue="Rua das Flores, 123 - São Paulo, SP"
                  className="border-green-200"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chatbot Tab */}
        <TabsContent value="chatbot" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Configurações do Chatbot</CardTitle>
              <CardDescription className="text-green-700/70">
                Personalize o comportamento do seu assistente virtual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bot-name">Nome do Chatbot</Label>
                <Input 
                  id="bot-name" 
                  defaultValue="Assistente CardioVida" 
                  className="border-green-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="greeting">Mensagem de Boas-vindas</Label>
                <Textarea 
                  id="greeting" 
                  defaultValue="Olá! Sou o assistente da Clínica CardioVida. Como posso ajudá-lo hoje?"
                  className="border-green-200"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hours">Horário de Atendimento</Label>
                <Select defaultValue="business">
                  <SelectTrigger className="border-green-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24/7">24 horas por dia</SelectItem>
                    <SelectItem value="business">Horário comercial (8h-18h)</SelectItem>
                    <SelectItem value="custom">Horário personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Agendamento Automático</p>
                    <p className="text-green-700/60">Permitir que pacientes agendem consultas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Lembretes Automáticos</p>
                    <p className="text-green-700/60">Enviar lembretes 24h antes da consulta</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Confirmação de Presença</p>
                    <p className="text-green-700/60">Solicitar confirmação dos pacientes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Respostas Personalizadas</CardTitle>
              <CardDescription className="text-green-700/70">
                Configure respostas automáticas para perguntas frequentes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Pergunta: "Quais são os valores?"</Label>
                <Textarea 
                  defaultValue="Nossos valores variam de acordo com a especialidade. Entre em contato para mais informações."
                  className="border-green-200"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>Pergunta: "Aceitam convênio?"</Label>
                <Textarea 
                  defaultValue="Sim, trabalhamos com os principais convênios. Consulte nossa lista completa."
                  className="border-green-200"
                  rows={2}
                />
              </div>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Adicionar Nova Pergunta
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Preferências de Notificação</CardTitle>
              <CardDescription className="text-green-700/70">
                Escolha como deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="text-green-800">Notificações de Email</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Novos Agendamentos</p>
                    <p className="text-green-700/60">Receber email quando um paciente agendar</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Cancelamentos</p>
                    <p className="text-green-700/60">Notificar sobre consultas canceladas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Relatório Diário</p>
                    <p className="text-green-700/60">Resumo diário de atividades</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="border-t border-green-100 pt-4 space-y-4">
                <h4 className="text-green-800">Notificações Push</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Mensagens Urgentes</p>
                    <p className="text-green-700/60">Alertas importantes no navegador</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800">Novos Pacientes</p>
                    <p className="text-green-700/60">Primeiro contato de novos pacientes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Plano Atual</CardTitle>
              <CardDescription className="text-green-700/70">
                Informações sobre sua assinatura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-green-800 mb-1">Plano Profissional</h3>
                    <p className="text-green-700/70">Renovação em 15/12/2025</p>
                  </div>
                  <p className="text-green-800">R$ 397/mês</p>
                </div>
                <ul className="space-y-2 text-green-700/80">
                  <li>• Até 2.000 conversas/mês</li>
                  <li>• Analytics completo</li>
                  <li>• Suporte prioritário</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Alterar Plano
                </Button>
                <Button variant="outline" className="border-red-600 text-red-700 hover:bg-red-50">
                  Cancelar Assinatura
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Método de Pagamento</CardTitle>
              <CardDescription className="text-green-700/70">
                Gerencie suas formas de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-green-200 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CreditCard className="size-6 text-green-600" />
                  <div>
                    <p className="text-green-800">Cartão terminado em 4242</p>
                    <p className="text-green-700/60">Expira em 12/2026</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-green-600 text-green-700">
                  Editar
                </Button>
              </div>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Adicionar Novo Cartão
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Alterar Senha</CardTitle>
              <CardDescription className="text-green-700/70">
                Mantenha sua conta segura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input id="current-password" type="password" className="border-green-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input id="new-password" type="password" className="border-green-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input id="confirm-password" type="password" className="border-green-200" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Atualizar Senha
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Autenticação de Dois Fatores</CardTitle>
              <CardDescription className="text-green-700/70">
                Adicione uma camada extra de segurança
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800">Autenticação de Dois Fatores (2FA)</p>
                  <p className="text-green-700/60">Proteja sua conta com verificação adicional</p>
                </div>
                <Switch />
              </div>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Configurar 2FA
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
