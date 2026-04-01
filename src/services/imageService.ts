import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateDesignConcept() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: "Uma interface de usuário de alta fidelidade para uma página da web de distribuição de chopp premium. O fundo é um degradê escuro e profundo, de âmbar a marrom, com um efeito de 'blur' (desfoque) sutil e as partículas douradas muito suaves, criando atmosfera sem competir. O conteúdo central é o herói: Títulos robustos e nítidos em creme e ouro metálico ('A TRADIÇÃO DE 1999', 'ENCONTRA A PERFEIÇÃO DO CHOPP') e botões claros. Sobre o fundo e abaixo do texto, as imagens dos chopes e barris estão renderizadas com 100% de nitidez, visibilidade total e iluminação dramática, parecendo tangíveis e frescos. As imagens não têm opacidade baixa e não cobrem o texto, ocupando espaço próprio para garantir legibilidade máxima. O visual é luxuoso e imponente.",
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: "1K"
      },
    },
  });

  return response;
}
