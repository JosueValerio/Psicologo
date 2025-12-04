import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: "A Dra. Ana mudou minha vida. Eu estava perdido em ansiedade e agora tenho ferramentas para lidar com o dia a dia. Extremamente acolhedora.",
    author: "Ricardo M.",
  },
  {
    id: '2',
    text: "A terapia de casal salvou nosso relacionamento. Aprendemos a nos ouvir de verdade. O ambiente é seguro e imparcial.",
    author: "Juliana e Pedro",
  },
  {
    id: '3',
    text: "Profissional excelente. A abordagem prática da TCC me ajudou a ver resultados rápidos em questões que eu carregava há anos.",
    author: "Fernanda L.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl">
            O que dizem meus pacientes
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Relatos reais de quem já passou pelo processo terapêutico.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-secondary opacity-50" />
              <p className="text-lg italic mb-6 relative z-10 pt-4">"{t.text}"</p>
              <div className="font-bold text-secondary">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;