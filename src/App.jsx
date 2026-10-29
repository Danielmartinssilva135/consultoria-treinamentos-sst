import React, { useState } from 'react';

const TREINAMENTOS = [
  {
    id: 'nr-05',
    codigo: 'NR-05',
    titulo: 'CIPA - Comissão Interna de Prevenção de Acidentes',
    cargaHoraria: '20h',
    modalidade: '100% EAD',
    preco: 'R$ 89,90',
    descricao: 'Capacitação completa para cipeiros e designados, conforme nova redação da NR-5 e assédio moral/sexual.',
    aulas: [
      { id: 1, titulo: 'Introdução à NR-05 e Atribuições da CIPA', duracao: '15 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Identificação de Perigos e Mapeamento de Riscos', duracao: '20 min', videoId: 'L_LUpnjgPso' },
      { id: 3, titulo: 'Medidas de Prevenção e Combate ao Assédio', duracao: '18 min', videoId: 'tgbNymZ7vqY' }
    ]
  },
  {
    id: 'nr-06',
    codigo: 'NR-06',
    titulo: 'EPI - Equipamentos de Proteção Individual',
    cargaHoraria: '04h',
    modalidade: '100% EAD',
    preco: 'R$ 49,90',
    descricao: 'Orientações sobre uso correto, guarda, higienização, conservação e responsabilidades legais de EPIs.',
    aulas: [
      { id: 1, titulo: 'Conceito, Certificado de Aprovação (CA) e Guarda', duracao: '15 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Responsabilidades do Empregador e do Colaborador', duracao: '12 min', videoId: 'L_LUpnjgPso' }
    ]
  },
  {
    id: 'nr-10',
    codigo: 'NR-10',
    titulo: 'Segurança em Instalações e Serviços em Eletricidade',
    cargaHoraria: '40h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 149,90',
    descricao: 'Prevenção de riscos elétricos, medidas de controle, procedimentos de trabalho e primeiros socorros.',
    aulas: [
      { id: 1, titulo: 'Riscos Elétricos: Choque, Arco Elétrico e Queimaduras', duracao: '25 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Medidas de Controle do Risco Elétrico', duracao: '30 min', videoId: 'L_LUpnjgPso' }
    ]
  },
  {
    id: 'nr-11',
    codigo: 'NR-11',
    titulo: 'Transporte, Movimentação, Armazenagem e Manuseio de Materiais',
    cargaHoraria: '16h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 119,90',
    descricao: 'Normas de segurança para empilhadeiras, pontes rolantes, talhas e operação segura de cargas.',
    aulas: [
      { id: 1, titulo: 'Inspeção Pré-Operacional e Estabilidade de Cargas', duracao: '20 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Normas de Circulação e Sinalização em Armazéns', duracao: '22 min', videoId: 'L_LUpnjgPso' }
    ]
  },
  {
    id: 'nr-12',
    codigo: 'NR-12',
    titulo: 'Segurança no Trabalho em Máquinas e Equipamentos',
    cargaHoraria: '16h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 129,90',
    descricao: 'Princípios fundamentais, proteções coletivas, dispositivos de intertravamento e operação segura.',
    aulas: [
      { id: 1, titulo: 'Sistemas de Segurança e Proteções Móveis/Fixas', duracao: '25 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Procedimentos de Bloqueio, Etiquetagem e Parada', duracao: '20 min', videoId: 'L_LUpnjgPso' }
    ]
  },
  {
    id: 'nr-20',
    codigo: 'NR-20',
    titulo: 'Segurança e Saúde com Inflamáveis e Combustíveis',
    cargaHoraria: '16h',
    modalidade: '100% EAD (Básico)',
    preco: 'R$ 119,90',
    descricao: 'Classes de risco, medidas preventivas para inflamáveis, controle de fontes de ignição e emergências.',
    aulas: [
      { id: 1, titulo: 'Características e Classificação de Inflamáveis', duracao: '20 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Controle de Fontes de Ignição e Resposta a Derrames', duracao: '25 min', videoId: 'L_LUpnjgPso' }
    ]
  },
  {
    id: 'nr-35',
    codigo: 'NR-35',
    titulo: 'Trabalho em Altura',
    cargaHoraria: '08h',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 89,90',
    descricao: 'Análise de Risco, sistemas de ancoragem, linha de vida, EPIs contra quedas e resgate técnico.',
    aulas: [
      { id: 1, titulo: 'Análise de Risco (AR) e Permissão de Trabalho (PT)', duracao: '25 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Sistemas de Proteção Contra Quedas e Inspeção de EPIs', duracao: '30 min', videoId: 'L_LUpnjgPso' }
    ]
  }
];

export default function App() {
  const [cursoAtivo, setCursoAtivo] = useState(null);
  const [salaDeAula, setSalaDeAula] = useState(null);
  const [aluno, setAluno] = useState({ nome: '', cpf: '', email: '' });
  const [aulaAtual, setAulaAtual] = useState(0);

  const abrirMatricula = (curso) => {
    setCursoAtivo(curso);
  };

  const confirmarAcesso = (e) => {
    e.preventDefault();
    if (!aluno.nome || !aluno.cpf) {
      alert('Por favor, indique o Nome e o CPF para emissão da ficha e certificado.');
      return;
    }
    setSalaDeAula(cursoAtivo);
    setCursoAtivo(null);
    setAulaAtual(0);
  };

  // Ambiente Virtual de Aprendizagem (Sala de Aula EAD)
  if (salaDeAula) {
    const aulaVigente = salaDeAula.aulas[aulaAtual];

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-emerald-400 font-bold tracking-wider">{salaDeAula.codigo} • SALA VIRTUAL EAD</span>
            <h1 className="text-lg font-bold text-white">{salaDeAula.titulo}</h1>
          </div>
          <button 
            onClick={() => setSalaDeAula(null)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
          >
            ← Voltar ao Catálogo
          </button>
        </header>

        <div className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reprodutor de Vídeo Real Incorporado */}
          <div className="lg:col-span-2 space-y-4">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${aulaVigente.videoId}?rel=0&modestbranding=1`}
                title={aulaVigente.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <p className="text-xs text-slate-400">Aluno Matriculado:</p>
                <p className="text-sm font-bold text-white">{aluno.nome} ({aluno.cpf})</p>
                <p className="text-xs text-emerald-400 mt-0.5">Módulo {aulaAtual + 1}: {aulaVigente.titulo}</p>
              </div>
              <button 
                onClick={() => {
                  if (aulaAtual < salaDeAula.aulas.length - 1) {
                    setAulaAtual(aulaAtual + 1);
                  } else {
                    alert(`Parabéns, ${aluno.nome}! Concluiu todos os módulos de ${salaDeAula.codigo}.`);
                  }
                }}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-lg shadow-emerald-500/20"
              >
                {aulaAtual < salaDeAula.aulas.length - 1 ? 'Concluir Aula e Avançar →' : 'Finalizar e Emitir Certificado'}
              </button>
            </div>
          </div>

          {/* Lista de Aulas do Treinamento */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Conteúdo Programático</h2>
              <div className="space-y-2">
                {salaDeAula.aulas.map((aula, index) => (
                  <button
                    key={aula.id}
                    onClick={() => setAulaAtual(index)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition flex justify-between items-center ${
                      aulaAtual === index 
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-bold shadow-sm' 
                        : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <span>{index + 1}. {aula.titulo}</span>
                    <span className="text-[11px] text-slate-400 ml-2">{aula.duracao}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="text-emerald-400 font-semibold">✔ Validade Jurídica NR-1 (Anexo II)</p>
              <p>✔ Carga Horária: {salaDeAula.cargaHoraria}</p>
              <p>✔ Rastreamento de Presença Ativo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Página Inicial / Catálogo
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-white">MARTINS</span>
              <span className="text-emerald-400 font-extrabold text-base">CONSULTORIASST</span>
            </div>
          </div>
          <nav className="flex space-x-4 text-xs font-medium items-center">
            <a href="#catalogo" className="hover:text-emerald-400 text-slate-300 transition-colors">Treinamentos EAD</a>
            <a 
              href="https://wa.me/5581999999999?text=Olá,%20gostaria%20de%20consultoria%20em%20SST" 
              target="_blank" 
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 rounded-full uppercase tracking-wider transition-all"
            >
              Falar com Engenheiro
            </a>
          </nav>
        </div>
      </header>

      <section className="py-12 px-4 bg-slate-950 text-center border-b border-slate-800/80">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-emerald-950/60 border border-emerald-800 rounded-full inline-block">
            Normas Regulamentadoras • 100% em Conformidade NR-1
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Plataforma de Treinamentos em Segurança do Trabalho
          </h1>
          <p className="text-slate-400 text-sm">
            Capacite a sua equipa com emissão de certificados válidos em todo o país e homologados por Engenharia de Segurança do Trabalho.
          </p>
        </div>
      </section>

      <main id="catalogo" className="flex-1 max-w-7xl mx-auto px-4 py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREINAMENTOS.map((curso) => (
            <div 
              key={curso.id} 
              className="bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                    {curso.codigo}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{curso.cargaHoraria}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{curso.titulo}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{curso.descricao}</p>
                <div className="text-xs font-semibold text-slate-300">
                  Modalidade: <span className="text-emerald-300">{curso.modalidade}</span>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-700/50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Valor por aluno</span>
                  <span className="text-lg font-bold text-emerald-400">{curso.preco}</span>
                </div>
                <button 
                  onClick={() => abrirMatricula(curso)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/10"
                >
                  Iniciar Matrícula
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {cursoAtivo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Matrícula no Treinamento</h3>
              <button 
                onClick={() => setCursoAtivo(null)}
                className="text-slate-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
              <span className="font-semibold text-white">{cursoAtivo.titulo}</span>
              <span className="text-emerald-400 font-bold">{cursoAtivo.preco}</span>
            </div>

            <form onSubmit={confirmarAcesso} className="space-y-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Nome Completo (Certificado)</label>
                <input 
                  type="text" 
                  required 
                  value={aluno.nome}
                  onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                  placeholder="Nome do colaborador" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">CPF</label>
                <input 
                  type="text" 
                  required 
                  value={aluno.cpf}
                  onChange={(e) => setAluno({ ...aluno, cpf: e.target.value })}
                  placeholder="000.000.000-00" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">E-mail para envio do Certificado</label>
                <input 
                  type="email" 
                  required 
                  value={aluno.email}
                  onChange={(e) => setAluno({ ...aluno, email: e.target.value })}
                  placeholder="email@empresa.com" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl transition-all text-xs mt-2"
              >
                Aceder à Sala de Aula Virtual (EAD) →
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 martinsconsultoriasst — Plataforma em Conformidade NR-1.
      </footer>
    </div>
  );
}
