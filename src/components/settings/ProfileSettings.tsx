import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function ProfileSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-green-800 mb-2">Perfil</h1>
        <p className="text-green-700/70">Gerencie suas informações pessoais</p>
      </div>

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
              <span className="text-green-800 font-bold text-xl">CA</span>
            </div>
            <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              Alterar Foto
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" defaultValue="Dra. Camila dos Anjos" className="border-green-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Especialidade</Label>
              <Input id="specialty" defaultValue="Cardiologia" className="border-green-200" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="camila.anjos@clinicavitta.com" className="border-green-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" defaultValue="(81) 99876-5432" className="border-green-200" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="clinic">Nome da Clínica</Label>
            <Input id="clinic" defaultValue="Vitta Cardio Recife" className="border-green-200" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Textarea 
              id="address" 
              defaultValue="Av. Boa Viagem, 1500 - Recife, PE"
              className="border-green-200"
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}