import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function ChatbotSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-green-800 mb-2">Chatbot</h1>
        <p className="text-green-700/70">Personalize o comportamento do seu assistente virtual</p>
      </div>

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
    </div>
  );
}
