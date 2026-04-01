import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { BackgroundCerveja } from "../components/BackgroundCerveja";
import { ShimmerButton } from "../components/UIComponents";
import { MessageCircle, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Contato = () => {
  return (
    <div className="flex flex-col flex-grow">
      <BackgroundCerveja />
      <Header />
      <div className="opacity-100 pt-20">
        <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Fale <span className="text-kaf-gold italic">Conosco</span>
          </h1>
          <p className="text-kaf-cream/60 max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Solicite um orçamento ou tire suas dúvidas.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-kaf-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tighter text-kaf-gold mb-6">Informações de Contato</h2>
              <p className="text-kaf-cream/60 mb-8">Escolha o canal de sua preferência para falar com nossa equipe.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-1">Telefone & WhatsApp</h4>
                    <p className="text-kaf-cream/60">(48) 3333-3333</p>
                    <p className="text-kaf-cream/60">(48) 99999-9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-1">Localização</h4>
                    <p className="text-kaf-cream/60">Palhoça, Santa Catarina</p>
                    <p className="text-kaf-cream/60">Grande Florianópolis - SC</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-kaf-cream mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="p-4 rounded-xl bg-kaf-cream/5 hover:bg-kaf-gold/20 transition-colors text-kaf-cream/70 hover:text-kaf-gold">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 rounded-xl bg-kaf-cream/5 hover:bg-kaf-gold/20 transition-colors text-kaf-cream/70 hover:text-kaf-gold">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter text-kaf-cream mb-8">Solicite um <span className="text-kaf-gold italic">Orçamento</span></h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full bg-kaf-dark/50 px-6 py-4 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(48) 99999-9999"
                  className="w-full bg-kaf-dark/50 px-6 py-4 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">Segmento</label>
                <select className="w-full bg-kaf-dark/50 px-6 py-4 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all appearance-none">
                  <option>Bares & Restaurantes</option>
                  <option>Eventos Particulares</option>
                  <option>Eventos Corporativos</option>
                  <option>Revenda</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">Mensagem (Opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Conte-nos um pouco sobre sua necessidade..."
                  className="w-full bg-kaf-dark/50 px-6 py-4 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all"
                />
              </div>
              <ShimmerButton className="w-full py-8 text-xl uppercase tracking-widest neo-shadow">
                Enviar Solicitação
              </ShimmerButton>
            </form>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};
