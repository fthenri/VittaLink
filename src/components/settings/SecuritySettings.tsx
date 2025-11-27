import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export default function SecuritySettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-green-800 mb-2">Segurança</h1>
        <p className="text-green-700/70">Mantenha sua conta protegida</p>
      </div>

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
    </div>
  );
}
