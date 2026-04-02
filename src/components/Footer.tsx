import React from 'react';
import { ShimmerButton } from './UIComponents';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 border-t-4 border-[#AA5D00] z-20 relative w-full">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Coluna 1 */}
          <div className="flex flex-col items-start">
            <img src="/kaf-branco.png" alt="KAF Logo" className="h-12 w-auto object-contain mb-6" referrerPolicy="no-referrer" />
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Tradição e excelência em distribuição de chopp e bebidas premium. Elevando o padrão do seu evento desde 1999.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Atendimento</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><span className="text-white font-semibold">Seg - Sex:</span> 08:00 - 18:00</li>
              <li><span className="text-white font-semibold">Sábado:</span> 09:00 - 14:00</li>
              <li><span className="text-[#AA5D00] font-semibold">Domingo:</span> Fechado</li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light w-full">
              <li>📞 (48) 3344-4222</li>
              <li>📱 (48) 99151-0012</li>
              <li>✉️ contato@kafchopp.com.br</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} KAF Chopp Express. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
