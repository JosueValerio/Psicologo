import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available, but handle empty key gracefully in calls
const ai = new GoogleGenAI({ apiKey });

export const generateSessionPrep = async (concern: string): Promise<string> => {
  if (!apiKey) {
    return "A chave da API não está configurada. Por favor, configure a API_KEY para usar o assistente.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Você é um assistente virtual empático em um site de psicologia. 
      O usuário está nervoso ou incerto sobre a primeira sessão de terapia ou tem uma preocupação específica: "${concern}".
      
      Por favor, forneça uma resposta curta (máximo 100 palavras), acolhedora e tranquilizadora.
      Sugira 2 ou 3 perguntas que ele pode refletir antes da sessão para ajudar no processo.
      
      Não dê conselhos médicos ou diagnósticos. Foque em preparação emocional e organização de pensamentos.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui gerar uma resposta no momento.";
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return "Ocorreu um erro ao tentar processar sua solicitação. Por favor, tente novamente mais tarde.";
  }
};