import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Dê o primeiro passo. Agende sua consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="bg-primary/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Endereço</h4>
                  <p className="text-gray-600">Av. Paulista, 1000 - Conj. 505<br />Bela Vista, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@menteserena.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Horários</h4>
                  <p className="text-gray-600">Seg - Sex: 08:00 - 20:00<br />Sáb: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white">
             {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-xl border border-green-200">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700">Entrarei em contato em breve.</p>
                </div>
             ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                    placeholder="Gostaria de agendar uma consulta..."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;