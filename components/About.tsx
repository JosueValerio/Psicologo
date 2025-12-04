import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre Mim</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Dra. Ana Silva
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Psicóloga Clínica especializada em Terapia Cognitivo-Comportamental (TCC).
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/id/64/600/800" 
                alt="Retrato da Psicóloga" 
                className="rounded-lg shadow-xl w-full object-cover h-96 lg:h-auto"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-gray-600">
                Com mais de 10 anos de experiência clínica, dedico minha carreira a ajudar pessoas a superarem ansiedade, depressão e conflitos de relacionamento. Acredito que cada indivíduo possui a força necessária para transformar sua própria vida, e meu papel é fornecer as ferramentas e o ambiente seguro para que isso aconteça.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Certificada</h3>
                    <p className="mt-2 text-base text-gray-500">Membro ativo do Conselho Regional de Psicologia.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <BookOpen className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Abordagem TCC</h3>
                    <p className="mt-2 text-base text-gray-500">Foco em resultados e mudança de padrões de pensamento.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Empatia</h3>
                    <p className="mt-2 text-base text-gray-500">Um espaço livre de julgamentos para você ser quem é.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;