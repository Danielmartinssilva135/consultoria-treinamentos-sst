import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Clock, 
  Award, 
  FileCheck, 
  PhoneCall, 
  CheckCircle2, 
  HardHat, 
  FileText, 
  ChevronRight, 
  HelpCircle, 
  Building2, 
  Send, 
  X,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [selectedNR, setSelectedNR] = useState('NR-05');
  const [modalOpen, setModalOpen] = useState(false);
  const [cursoInteresse, setCursoInteresse] = useState('NR 05 - CIPA');
  const [faqAberto, setFaqAberto] = useState(null);

  const treinamentos = [
    {
      codigo: 'NR-05',
      titulo: 'NR 05 – CIPA (Comissão Interna de Prevenção de Acidentes e Assédio)',
      cargaHoraria: '8h a 20h',
      modalidade: 'Online, Semipresencial e Presencial',
      validade: '1 ano',
      resumo: 'Capacitação obrigatória para membros da CIPA abordando identificação de riscos, confecção de mapa de riscos, investigação de acidentes e aplicação da Lei 14.457/22 de prevenção ao assédio.',
      conteudoProgramatico: [
        'Estudo do ambiente, das condições de trabalho e dos riscos ocupacionais',
        'Metodologia de investigação e análise de acidentes e doenças do trabalho',
        'Elaboração e interpretação do Mapa de Riscos',
        'Prevenção e combate ao assédio sexual e violências no trabalho',
        'Campanhas da SIPAT e conscientização preventiva'
      ]
    },
    {
      codigo: 'NR-06',
      titulo: 'NR 06 – Equipamentos de Proteção Individual (EPI)',
      cargaHoraria: '4h',
      modalidade: 'Online e Presencial',
      validade: 'Periódico',
      resumo: 'Treinamento obrigatório referente à guarda, conservação, higienização e uso correto de EPIs e CA.',
      conteudoProgramatico: [
        'Responsabilidades do empregador e empregado',
        'Critérios do Certificado de Aprovação (CA)',
        'Higienização, guarda e conservação correta',
        'Procedimentos de descarte e substituição'
      ]
    },
    {
      codigo: 'NR-10',
      titulo: 'NR 10 – Segurança em Instalações e Serviços em Eletricidade',
      cargaHoraria: '40h (Básico / SEP)',
      modalidade: 'Semipresencial e Presencial',
      validade: '2 anos',
      resumo: 'Normas de proteção, medidas preventivas e procedimentos seguros em instalações elétricas.',
      conteudoProgramatico: [
        'Introdução à segurança em eletricidade e riscos típicos',
        'Medidas de controle do risco elétrico (Desenergização e Aterramento)',
        'Equipamentos de proteção individual e coletiva específicos',
        'Noções de primeiros socorros e combate a princípio de incêndio'
      ]
    },
    {
      codigo: 'NR-12',
      titulo: 'NR 12 – Segurança no Trabalho em Máquinas e Equipamentos',
      cargaHoraria: '8h a 16h',
      modalidade: 'Presencial e Prático',
      validade: 'Periódico',
      resumo: 'Instruções para operação segura, proteções físicas, paradas de emergência e bloqueio (LOTO).',
      conteudoProgramatico: [
        'Dispositivos de proteção (fixos, móveis e intertravados)',
        'Paradas de emergência e rearmes seguros',
        'Procedimentos de Bloqueio e Etiquetagem (LOTO)',
        'Inspeção prévia e rotinas operacionais'
      ]
    },
    {
      codigo: 'NR-20',
      titulo: 'NR 20 – Inflamáveis e Combustíveis',
      cargaHoraria: '4h a 32h',
      modalidade: 'Semipresencial',
      validade: '1 a 3 anos',
      resumo: 'Critérios preventivos para armazenagem, manipulação e transferência de inflamáveis e combustíveis.',
      conteudoProgramatico: [
        'Propriedades e perigos dos produtos inflamáveis',
        'Controle de fontes de ignição e atmosferas explosivas',
        'Procedimentos de emergência e combate a vazamentos',
        'Estudo e aplicação da FISPQ / FDS'
      ]
    },
    {
      codigo: 'NR-33',
      titulo: 'NR 33 – Espaços Confinados',
      cargaHoraria: '16h (Trabalhador) a 40h (Supervisor)',
      modalidade: 'Presencial Obrigatório',
      validade: '1 ano',
      resumo: 'Treinamento de entrada segura com medição contínua de gases, ventilação mecânica e PET.',
      conteudoProgramatico: [
        'Reconhecimento e avaliação de riscos atmosféricos',
        'Operação de detectores contínuos de gases',
        'Preenchimento e controle da PET',
        'Técnicas de resgate com tripé e trava-quedas retrátil'
      ]
    },
    {
      codigo: 'NR-35',
      titulo: 'NR 35 – Trabalho em Altura',
      cargaHoraria: '8h',
      modalidade: 'Semipresencial ou Presencial',
      validade: '2 anos',
      resumo: 'Diretrizes para serviços executados acima de 2 metros: análise de risco, ancoragem e salvamento.',
      conteudoProgramatico: [
        'Análise de Risco (AR) e Permissão de Trabalho',
        'Sistemas de proteção contra quedas e ancoragem',
        'Inspeção de cinturão tipo paraquedista e conectores',
        'Condutas em emergências e plano de resgate'
      ]
    }
  ];

  const servicosSST = [
    { titulo: 'Elaboração de PGR / GRO (NR-01)', desc: 'Inventário completo de perigos, matriz de riscos ocupacionais e plano de ação contínuo.' },
    { titulo: 'PCMSO (NR-07)', desc: 'Programa de Controle Médico articulado com o PGR para monitoramento biológico da saúde.' },
    { titulo: 'LTCAT e Laudo de Insalubridade', desc: 'Avaliações quantitativas (ruído, calor, químicos) com emissão de ART de Engenharia de Segurança.' },
    { titulo: 'Gestão de Eventos para o eSocial', desc: 'Envio estruturado dos eventos: S-2210 (CAT), S-2220 (ASO) e S-2240 (Condições Ambientais).' }
  ];

  const faqs = [
    {
      q: 'Os certificados possuem validade legal nacional?',
      a: 'Sim, todos os certificados atendem ao Anexo II da NR-01, emitidos por Profissionais Legalmente Habilitados com registro ativo no conselho de classe (CREA/CFT).'
    },
    {
      q: 'Vocês atendem turmas in-company?',
      a: 'Sim, nossos instrutores se deslocam até a sede da sua empresa com cronogramas adaptados à rotina operacional do cliente.'
    }
  ];

  const cursoAtual = treinamentos.find(t => t.codigo === selectedNR) || treinamentos[0];

  const abrirWhatsApp = (assunto) => {
    const texto = `Olá! Gostaria de receber uma proposta comercial sobre: ${assunto}.`;
    window.open(`https://wa.me/5581995976579?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>MARTINS CONSULTORIA</span>SST</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5" /> (81) 995976579</span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 text-white p-2.5 rounded-lg shadow-md">
              <HardHat className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                CONSULTORIA <span className="text-emerald-600">SST</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Treinamentos & Engenharia de Segurança
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#treinamentos" className="hover:text-emerald-600 transition-colors">Treinamentos</a>
            <a href="#servicos" className="hover:text-emerald-600 transition-colors">Laudos Técnicos</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">Perguntas Frequentes</a>
          </nav>

          <button 
            onClick={() => {
              setCursoInteresse(cursoAtual.titulo);
              setModalOpen(true);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            Solicitar Proposta
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Award className="w-4 h-4" /> Certificados Conforme Anexo II da NR-01
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Treinamentos Regulamentares e Consultoria em SST
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
              Soluções completas para proteger seus colaboradores e manter a conformidade com a legislação trabalhista e previdenciária.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#treinamentos"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" /> Explorar Treinamentos
              </a>
              <button 
                onClick={() => abrirWhatsApp("Consultoria e Treinamentos em Geral")}
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg border border-white/20 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" /> Falar com um Consultor
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-400" /> Vantagens para sua Empresa
            </h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Instrutores qualificados com registro profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Formatos Online, Presencial e In-Company</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Emissão rápida de certificados e listas de presença</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="treinamentos" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Cursos Normativos</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">Treinamentos por Norma Regulamentadora</h2>
          <p className="text-slate-600 mt-2">Clique em cada NR para consultar os objetivos, carga horária e conteúdo programático detalhado.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3">
          {treinamentos.map((item) => (
            <button
              key={item.codigo}
              onClick={() => setSelectedNR(item.codigo)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                selectedNR === item.codigo
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {item.codigo}
            </button>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm mt-6 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase">
                {cursoAtual.codigo}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                {cursoAtual.titulo}
              </h3>
            </div>
            <button 
              onClick={() => {
                setCursoInteresse(cursoAtual.titulo);
                setModalOpen(true);
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors text-sm"
            >
              Solicitar Orçamento
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold block">Carga Horária</span>
                <span className="text-sm font-bold text-slate-800">{cursoAtual.cargaHoraria}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold block">Modalidades</span>
                <span className="text-sm font-bold text-slate-800">{cursoAtual.modalidade}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 uppercase font-semibold block">Validade</span>
                <span className="text-sm font-bold text-slate-800">{cursoAtual.validade}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" /> Resumo do Curso
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {cursoAtual.resumo}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Conteúdo Programático
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cursoAtual.conteudoProgramatico.map((topico, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{topico}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Engenharia e Laudos</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Serviços Técnicos Especializados</h2>
            <p className="text-slate-600 mt-2">Documentações e laudos elaborados por Engenheiros de Segurança do Trabalho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicosSST.map((srv, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{srv.titulo}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <button 
                  onClick={() => abrirWhatsApp(srv.titulo)}
                  className="text-emerald-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1 mt-auto"
                >
                  Solicitar Cotação <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <HelpCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
              <button
                onClick={() => setFaqAberto(faqAberto === idx ? null : idx)}
                className="w-full text-left p-5 font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${faqAberto === idx ? 'rotate-90 text-emerald-600' : ''}`} />
              </button>
              {faqAberto === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 text-sm py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <HardHat className="w-5 h-5 text-emerald-400" />
            <span>CONSULTORIA SST</span>
          </div>
          <div>© {new Date().getFullYear()} Consultoria SST & Treinamentos. Todos os direitos reservados.</div>
        </div>
      </footer>

      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Building2 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Cotação Comercial</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Solicitar Orçamento</h3>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                abrirWhatsApp(cursoInteresse);
                setModalOpen(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nome</label>
                <input required placeholder="Seu nome" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Empresa / CNPJ</label>
                <input required placeholder="Nome da empresa" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Curso Selecionado</label>
                <input value={cursoInteresse} readOnly className="w-full px-3 py-2 border border-slate-300 bg-slate-50 rounded-lg text-sm" />
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" /> Enviar Pedido via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
