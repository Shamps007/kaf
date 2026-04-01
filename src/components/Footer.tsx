import React from 'react';
import { ShimmerButton } from './UIComponents';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-6 border-t-4 border-[#AA5D00] z-20 relative w-full">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1 */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-display font-bold text-[#AA5D00] mb-4 tracking-tighter">KAF</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Tradição e excelência em distribuição de chopp e bebidas premium. Elevando o padrão do seu evento desde 1999.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Links Rápidos</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="/" className="text-gray-400 hover:text-[#AA5D00] transition-colors">Início</a></li>
              <li><a href="#catalogo" className="text-gray-400 hover:text-[#AA5D00] transition-colors">Catálogo</a></li>
              <li><a href="#bebidas" className="text-gray-400 hover:text-[#AA5D00] transition-colors">Bebidas</a></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Atendimento</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li><span className="text-white font-semibold">Seg - Sex:</span> 08:00 - 18:00</li>
              <li><span className="text-white font-semibold">Sábado:</span> 09:00 - 14:00</li>
              <li><span className="text-[#AA5D00] font-semibold">Domingo:</span> Fechado</li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li>📞 (XX) XXXXX-XXXX</li>
              <li>✉️ contato@kafchopp.com.br</li>
              <li className="mt-6">
                <ShimmerButton className="w-full h-12 text-xs">
                  <MessageCircle size={16} />
                  Fale no WhatsApp
                </ShimmerButton>
              </li>
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
