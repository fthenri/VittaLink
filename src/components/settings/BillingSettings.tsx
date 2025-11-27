import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { CreditCard } from 'lucide-react';

export default function BillingSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-green-800 mb-2">Cobrança</h1>
        <p className="text-green-700/70">Gerencie seu plano e formas de pagamento</p>
      </div>

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
    </div>
  );
}
