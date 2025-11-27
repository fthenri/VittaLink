import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

export default function NotificationsSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-green-800 mb-2">Notificações</h1>
        <p className="text-green-700/70">Escolha como deseja receber notificações</p>
      </div>

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
    </div>
  );
}
