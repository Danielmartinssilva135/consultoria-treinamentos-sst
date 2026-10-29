import React, { useState } from 'react';

const TREINAMENTOS = [
  {
    id: 'nr-05',
    codigo: 'NR-05',
    titulo: 'CIPA - Comissão Interna de Prevenção de Acidentes',
    cargaHoraria: '20h',
    modalidade: '100% EAD',
    preco: 'R$ 89,90',
    descricao: 'Capacitação completa para cipeiros e designados, conforme nova redação da NR-5 e assédio moral/sexual.'
  },
  {
    id: 'nr-06',
    codigo: 'NR-06',
    titulo: 'EPI - Equipamentos de Proteção Individual',
    cargaHoraria: '04h',
    modalidade: '100% EAD',
    preco: 'R$ 49,90',
    descricao: 'Orientações sobre uso correto, guarda, higienização, conservação e responsabilidades legais de EPIs.'
  },
  {
    id: 'nr-10',
    codigo: 'NR-10',
    titulo: 'Segurança em Instalações e Serviços em Eletricidade',
    cargaHoraria: '40h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 149,90',
    descricao: 'Prevenção de riscos elétricos, medidas de controle, procedimentos de trabalho e primeiros socorros.'
  },
  {
    id: 'nr-11',
    codigo: 'NR-11',
    titulo: 'Transporte, Movimentação, Armazenagem e Manuseio de Materiais',
    cargaHoraria: '16h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 119,90',
    descricao: 'Normas de segurança para empilhadeiras, pontes rolantes, talhas e operação segura de cargas.'
  },
  {
    id: 'nr-12',
    codigo: 'NR-12',
    titulo: 'Segurança no Trabalho em Máquinas e Equipamentos',
    cargaHoraria: '16h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 129,90',
    descricao: 'Princípios fundamentais, proteções coletivas, dispositivos de intertravamento e operação segura.'
  },
  {
    id: 'nr-20',
    codigo: 'NR-20',
    titulo: 'Segurança e Saúde com Inflamáveis e Combustíveis',
    cargaHoraria: '16h',
    modalidade: '100% EAD (Básico)',
    preco: 'R$ 119,90',
    descricao: 'Classes de risco, medidas preventivas para inflamáveis, controle de fontes de ignição e emergências.'
  },
  {
    id: 'nr-35',
    codigo: 'NR-35',
    titulo: 'Trabalho em Altura',
    cargaHoraria: '08h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 89,90',
    descricao: 'Análise de Risco, sistemas de ancoragem, linha de vida, EPIs contra quedas e resgate técnico.'
  }
];

export default function App() {
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const iniciarInscricao = (curso) => {
    setCursoSelecionado(curso);
    setModalAberto(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Topo / Navbar */}
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white">MARTINS</span>
              <span className="text-emerald-400 font-extrabold text-lg">CONSULTORIASST</span>
            </div>
          </div>
          <nav className="flex space-x-6 text-sm font-medium">
            <a href="#catalogo" className="hover:text-emerald-400 transition-colors">Treinamentos EAD</a>
            <a href="#conformidade" className="hover:text-emerald-400 transition-colors">Validade NR-1</a>
            <a 
              href="https://wa.me/5581999999999?text=Olá,%20gostaria%20de%20informações%20sobre%20treinamentos%20de%20SST" 
              target="_blank" 
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all"
            >
              Falar com Engenheiro
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-950 to-slate-900 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-emerald-950/60 border border-emerald-800 rounded-full">
            Plataforma 100% em Conformidade com a NR-1 (Anexo II)
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Capacitação e Treinamentos Regulamentares em SST
          </h1>
          <p className="text-slate-400 text-lg">
            Emissão rápida de certificados válidos em todo o território nacional, com assinatura de Responsável Técnico habilitado (CREA) e autenticação via QR Code.
          </p>
        </div>
      </section>

      {/* Catálogo de Cursos */}
      <main id="catalogo" className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <h2 className="text-2xl font-bold mb-8 text-center text-slate-100 flex items-center justify-center gap-2">
          <span>Treinamentos Disponíveis para Realização Remota</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREINAMENTOS.map((curso) => (
            <div 
              key={curso.id} 
              className="bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-emerald-950/40"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                    {curso.codigo}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{curso.cargaHoraria}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{curso.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{curso.descricao}</p>
                <div className="text-xs font-semibold text-slate-300">
                  Modalidade: <span className="text-emerald-300">{curso.modalidade}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Valor por aluno</span>
                  <span className="text-xl font-bold text-emerald-400">{curso.preco}</span>
                </div>
                <button 
                  onClick={() => iniciarInscricao(curso)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/10"
                >
                  Iniciar Matrícula
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Requisitos Legais */}
      <section id="conformidade" className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-bold text-white text-base">Autenticação Digital</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cada certificado gerado contém um link exclusivo e QR Code para verificação imediata por fiscais e auditores do trabalho.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white text-base">Responsabilidade Técnica</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Conteúdo elaborado e chancelado por Engenheiro de Segurança do Trabalho legalmente habilitado no CREA.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white text-base">Ambiente de Aprendizagem</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Rastreamento de presença com registro de data/hora, questionários avaliativos e suporte direto para dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Modal de Matrícula / Checkout */}
      {modalAberto && cursoSelecionado && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Matrícula no Treinamento</h3>
              <button 
                onClick={() => setModalAberto(false)}
                className="text-slate-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-2 bg-slate-800/40 p-3 rounded-lg border border-slate-800">
              <p className="text-sm font-semibold text-white">{cursoSelecionado.titulo}</p>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Carga: {cursoSelecionado.cargaHoraria}</span>
                <span className="text-emerald-400 font-bold">{cursoSelecionado.preco}</span>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Inscrição confirmada para ${cursoSelecionado.codigo}! O link de acesso ao ambiente EAD foi enviado.`);
                setModalAberto(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Nome Completo (para o Certificado)</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Seu nome completo" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">CPF</label>
                <input 
                  type="text" 
                  required 
                  placeholder="000.000.000-00" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">E-mail</label>
                <input 
                  type="email" 
                  required 
                  placeholder="seu@email.com" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl transition-all text-sm mt-4 shadow-lg shadow-emerald-500/20"
              >
                Prosseguir para Pagamento (Pix / Cartão)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Rodapé */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 martinsconsultoriasst — Todos os direitos reservados.
      </footer>
    </div>
  );
}
