import React, { useState } from 'react';
import { Sparkles, Send, X } from 'lucide-react';
import { generateSessionPrep } from '../services/geminiService';

const SessionHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    
    try {
      const result = await generateSessionPrep(input);
      setResponse(result);
    } catch (err) {
      setResponse("Desculpe, algo deu errado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-all z-40 flex items-center gap-2"
      >
        <Sparkles className="h-5 w-5" />
        <span className="font-medium hidden sm:inline">Inseguro com a 1ª sessão?</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
      <div className="bg-primary p-4 flex justify-between items-center text-white">
        <h3 className="font-bold flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Assistente de Preparação
        </h3>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4 max-h-[400px] overflow-y-auto">
        {!response && !loading && (
          <p className="text-gray-600 text-sm mb-4">
            É normal sentir ansiedade antes da terapia. Conte-me brevemente o que te preocupa (ex: "não sei o que falar" ou "tenho medo de ser julgado") e eu te ajudarei a se preparar.
          </p>
        )}

        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {response && (
          <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-4">
            <p className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">{response}</p>
            <button 
              onClick={() => { setResponse(null); setInput(''); }}
              className="mt-3 text-xs text-primary font-bold hover:underline"
            >
              Nova pergunta
            </button>
          </div>
        )}

        {!response && !loading && (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="O que te preocupa?"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-primary text-white p-2 rounded-md hover:bg-teal-700 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
      <div className="bg-gray-50 px-4 py-2 text-xs text-center text-gray-400">
        IA gerada por Gemini. Não substitui aconselhamento profissional.
      </div>
    </div>
  );
};

export default SessionHelper;