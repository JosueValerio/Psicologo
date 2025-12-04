import React from 'react';
import { User, Users, BrainCircuit, Sun } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: '1',
    title: 'Terapia Individual',
    description: 'Sessões focadas nas suas necessidades pessoais, ajudando no autoconhecimento e resolução de conflitos internos.',
    icon: <User className="h-8 w-8" />,
  },
  {
    id: '2',
    title: 'Terapia de Casal',
    description: 'Espaço mediado para melhorar a comunicação, resolver conflitos e fortalecer o vínculo afetivo.',
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: '3',
    title: 'Ansiedade e Estresse',
    description: 'Técnicas especializadas para gerenciar sintomas de ansiedade, pânico e estresse do dia a dia.',
    icon: <BrainCircuit className="h-8 w-8" />,
  },
  {
    id: '4',
    title: 'Desenvolvimento Pessoal',
    description: 'Foco em atingir metas, melhorar a autoestima e desbloquear seu potencial máximo.',
    icon: <Sun className="h-8 w-8" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Áreas de Atuação</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Como posso ajudar você?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Ofereço diferentes modalidades de atendimento para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;