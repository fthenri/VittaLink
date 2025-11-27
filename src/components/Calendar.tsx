import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Clock, User, Phone } from 'lucide-react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 22)); // November 22, 2025

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  const appointments = [
    { id: 1, date: 22, time: '09:00', patient: 'Maria Silva', type: 'Consulta', phone: '(11) 98765-4321' },
    { id: 2, date: 22, time: '10:30', patient: 'João Santos', type: 'Retorno', phone: '(11) 98765-4322' },
    { id: 3, date: 22, time: '14:00', patient: 'Ana Costa', type: 'Exame', phone: '(11) 98765-4323' },
    { id: 4, date: 22, time: '15:30', patient: 'Pedro Lima', type: 'Consulta', phone: '(11) 98765-4324' },
    { id: 5, date: 23, time: '09:30', patient: 'Carla Souza', type: 'Retorno', phone: '(11) 98765-4325' },
    { id: 6, date: 23, time: '11:00', patient: 'Roberto Alves', type: 'Consulta', phone: '(11) 98765-4326' },
    { id: 7, date: 25, time: '10:00', patient: 'Juliana Dias', type: 'Exame', phone: '(11) 98765-4327' },
    { id: 8, date: 25, time: '14:30', patient: 'Marcos Oliveira', type: 'Consulta', phone: '(11) 98765-4328' }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthName = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const days = getDaysInMonth(currentDate);
  
  const getAppointmentsForDay = (day: number) => {
    return appointments.filter(apt => apt.date === day);
  };

  const todaysAppointments = getAppointmentsForDay(22);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-green-800 mb-2">Calendário</h1>
        <p className="text-green-700/70">Gerencie os agendamentos do seu consultório</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2 border-green-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-green-800 capitalize">{monthName}</CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={previousMonth}
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={nextMonth}
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-green-700/70 p-2">
                  {day}
                </div>
              ))}
              {days.map((day, index) => {
                const hasAppointments = day && getAppointmentsForDay(day).length > 0;
                const isToday = day === 22;
                return (
                  <div
                    key={index}
                    className={`aspect-square p-2 text-center rounded-lg ${
                      !day 
                        ? '' 
                        : isToday 
                        ? 'bg-green-600 text-white' 
                        : hasAppointments 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer' 
                        : 'bg-white text-green-700 hover:bg-green-50 cursor-pointer border border-green-100'
                    }`}
                  >
                    {day && (
                      <div className="flex flex-col items-center justify-center h-full">
                        <span>{day}</span>
                        {hasAppointments && (
                          <div className="flex gap-0.5 mt-1">
                            {getAppointmentsForDay(day).map((_, i) => (
                              <div 
                                key={i} 
                                className={`size-1 rounded-full ${isToday ? 'bg-white' : 'bg-green-600'}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Today's Appointments */}
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Hoje - 22 Nov</CardTitle>
            <CardDescription className="text-green-700/70">
              {todaysAppointments.length} agendamentos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todaysAppointments.map(apt => (
                <div key={apt.id} className="p-3 bg-green-50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-green-600" />
                      <span className="text-green-800">{apt.time}</span>
                    </div>
                    <Badge className="bg-green-600 text-white">{apt.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <User className="size-4" />
                    <span>{apt.patient}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700/70">
                    <Phone className="size-4" />
                    <span>{apt.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="text-green-800">Próximos Agendamentos</CardTitle>
          <CardDescription className="text-green-700/70">
            Consultas agendadas para os próximos dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[23, 25].map(day => {
              const dayAppointments = getAppointmentsForDay(day);
              return (
                <div key={day} className="border-b border-green-100 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-green-800 mb-3">{day} de Novembro - {dayAppointments.length} consultas</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dayAppointments.map(apt => (
                      <div key={apt.id} className="p-4 bg-white border border-green-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-green-800">{apt.time}</span>
                          <Badge variant="outline" className="border-green-600 text-green-700">
                            {apt.type}
                          </Badge>
                        </div>
                        <p className="text-green-800 mb-1">{apt.patient}</p>
                        <p className="text-green-700/60">{apt.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
