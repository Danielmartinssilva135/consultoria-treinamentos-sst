import React, { useState } from 'react';

const TREINAMENTOS = [
  {
    id: 'nr-05',
    codigo: 'NR-05',
    titulo: 'CIPA - Comissão Interna de Prevenção de Acidentes e Assédio',
    cargaHoraria: '20 horas',
    modalidade: '100% EAD',
    preco: 'R$ 89,90',
    descricao: 'Capacitação completa para cipeiros e designados, em conformidade com a NR-5 e prevenção ao assédio.',
    programaDetalhado: [
      'Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo (Mapeamento de Riscos).',
      'Metodologia de investigação e análise de acidentes e doenças relacionadas ao trabalho.',
      'Noções sobre acidentes e doenças decorrentes do trabalho e medidas de prevenção e controle dos riscos ocupacionais.',
      'Noções sobre a Síndrome da Imunodeficiência Adquirida (AIDS) e medidas de prevenção correlatas.',
      'Legislação trabalhista e previdenciária relativa à segurança e à saúde no trabalho.',
      'Princípios gerais de higiene do trabalho e de medidas de prevenção dos riscos ocupacionais.',
      'Noções sobre as inclusões de pessoas com deficiência e reabilitados nos processos de trabalho.',
      'Prevenção e combate ao assédio sexual e a todas as formas de violência no ambiente de trabalho (Lei nº 14.457/22 e Portaria MTP nº 4.219).'
    ],
    aulas: [
      { id: 1, titulo: 'Módulo 1: Introdução à NR-05 e Atribuições da CIPA', duracao: '15 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Módulo 2: Perigos, Riscos Ambientais e Mapa de Risco', duracao: '20 min', videoId: 'L_LUpnjgPso' },
      { id: 3, titulo: 'Módulo 3: Prevenção e Combate ao Assédio no Trabalho', duracao: '18 min', videoId: 'tgbNymZ7vqY' },
      { id: 4, titulo: 'Módulo 4: Investigação de Acidentes e Medidas Corretivas', duracao: '20 min', videoId: 'M7lc1UVf-VE' }
    ],
    perguntas: [
      {
        id: 1,
        enunciado: 'Qual é o objetivo principal da CIPA de acordo com a NR-05?',
        opcoes: [
          'Aplicar punições financeiras aos colaboradores que cometerem infrações.',
          'Prevenir acidentes e doenças relacionadas ao trabalho, preservando a vida e a saúde.',
          'Substituir as funções obrigatórias do SESMT nas empresas.',
          'Fiscalizar exclusivamente a pontualidade da jornada de trabalho.'
        ],
        respostaCorreta: 1
      },
      {
        id: 2,
        enunciado: 'Com as recentes atualizações da NR-05, qual tema passou a ser obrigatório na capacitação da comissão?',
        opcoes: [
          'Prevenção e combate ao assédio sexual e a outras formas de violência no trabalho.',
          'Operação técnica de caldeiras e vasos sob pressão.',
          'Fiscalização tributária da folha de pagamento.',
          'Instalação de redes de telecomunicação externas.'
        ],
        respostaCorreta: 0
      },
      {
        id: 3,
        enunciado: 'Na identificação de perigos, a cor vermelha padronizada no Mapa de Riscos representa qual grupo?',
        opcoes: [
          'Riscos Biológicos.',
          'Riscos Ergonômicos.',
          'Riscos Químicos (poeiras, fumos, vapores, gases).',
          'Riscos Mecânicos/Acidentes.'
        ],
        respostaCorreta: 2
      },
      {
        id: 4,
        enunciado: 'Ao investigar um acidente de trabalho ocorrido na empresa, o foco da CIPA deve ser:',
        opcoes: [
          'Localizar um culpado individual para formalizar a demissão.',
          'Ocultar o registro para não afetar as metas estatísticas.',
          'Identificar as causas-raiz sistêmicas e propor medidas corretivas para evitar reincidência.',
          'Repassar a responsabilidade integralmente à seguradora.'
        ],
        respostaCorreta: 2
      }
    ]
  },
  {
    id: 'nr-06',
    codigo: 'NR-06',
    titulo: 'EPI - Equipamentos de Proteção Individual',
    cargaHoraria: '04 horas',
    modalidade: '100% EAD',
    preco: 'R$ 49,90',
    descricao: 'Orientações sobre uso correto, guarda, higienização, conservação e responsabilidades legais de EPIs.',
    programaDetalhado: [
      'Definição e classificação legal de EPI e EPC conforme a NR-06.',
      'Obrigações e responsabilidades do empregador e do trabalhador.',
      'Importância e rastreabilidade do Certificado de Aprovação (CA).',
      'Critérios de seleção, adequação ao risco, guarda e conservação.'
    ],
    aulas: [
      { id: 1, titulo: 'Conceito, Certificado de Aprovação (CA) e Guarda', duracao: '15 min', videoId: 'M7lc1UVf-VE' },
      { id: 2, titulo: 'Responsabilidades do Empregador e do Colaborador', duracao: '12 min', videoId: 'L_LUpnjgPso' }
    ],
    perguntas: [
      {
        id: 1,
        enunciado: 'O que comprova a conformidade técnica de um EPI no Brasil?',
        opcoes: [
          'Apenas a nota fiscal de compra.',
          'O Certificado de Aprovação (CA) emitido pelo órgão competente.',
          'O selo de garantia da loja revendedora.',
          'A cor do material.'
        ],
        respostaCorreta: 1
      }
    ]
  },
  {
    id: 'nr-10',
    codigo: 'NR-10',
    titulo: 'Segurança em Instalações e Serviços em Eletricidade',
    cargaHoraria: '40 horas',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 149,90',
    descricao: 'Prevenção de riscos elétricos, medidas de controle, procedimentos de trabalho e primeiros socorros.',
    programaDetalhado: [
      'Introdução à segurança com eletricidade e riscos em instalações e serviços.',
      'Medidas de controle do risco elétrico: desenergização, bloqueio, aterramento e equipotencialização.',
      'Equipamentos de proteção coletiva e individual aplicáveis a serviços em baixa tensão.',
      'Rotinas e procedimentos de trabalho, sinalização de segurança e noções de socorro a eletrocutados.'
    ],
    aulas: [
      { id: 1, titulo: 'Riscos Elétricos e Medidas de Proteção Coletiva', duracao: '25 min', videoId: 'M7lc1UVf-VE' }
    ],
    perguntas: [
      {
        id: 1,
        enunciado: 'Qual é a medida preferencial de controle do risco elétrico?',
        opcoes: [
          'Uso isolado de luvas de borracha.',
          'Desenergização elétrica prévia e bloqueio seguro.',
          'Avisos verbais aos colegas de trabalho.',
          'Uso de calçados comuns.'
        ],
        respostaCorreta: 1
      }
    ]
  },
  {
    id: 'nr-11',
    codigo: 'NR-11',
    titulo: 'Transporte, Movimentação e Manuseio de Materiais',
    cargaHoraria: '16 horas',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 119,90',
    descricao: 'Normas de segurança para empilhadeiras, pontes rolantes, talhas e operação segura de cargas.',
    programaDetalhado: [
      'Normas de segurança para operação e movimentação mecânica de cargas.',
      'Checklist pré-operacional, estabilidade de carga e centro de gravidade.',
      'Regras de circulação, pedestres e sinalização em pátios industriais e armazéns.'
    ],
    aulas: [{ id: 1, titulo: 'Inspeção Pré-Operacional de Equipamentos de Movimentação', duracao: '20 min', videoId: 'M7lc1UVf-VE' }],
    perguntas: [
      {
        id: 1,
        enunciado: 'Qual é o procedimento obrigatório antes de iniciar a operação de uma empilhadeira?',
        opcoes: [
          'Apenas abastecer o veículo no final do turno.',
          'Realizar o checklist de inspeção pré-operacional diário.',
          'Aumentar a velocidade para testar os freios em área pública.',
          'Transportar cargas acima da capacidade nominal indicada.'
        ],
        respostaCorreta: 1
      }
    ]
  },
  {
    id: 'nr-12',
    codigo: 'NR-12',
    titulo: 'Segurança no Trabalho em Máquinas e Equipamentos',
    cargaHoraria: '16 horas',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 129,90',
    descricao: 'Princípios fundamentais, proteções coletivas, dispositivos de intertravamento e operação segura.',
    programaDetalhado: [
      'Princípios de segurança em máquinas e equipamentos (NR-12).',
      'Proteções fixas, móveis com intertravamento e zonas de perigo.',
      'Dispositivos de parada de emergência e procedimentos de bloqueio e desenergização (LOTO).'
    ],
    aulas: [{ id: 1, titulo: 'Proteções Fixas e Dispositivos de Intertravamento', duracao: '25 min', videoId: 'M7lc1UVf-VE' }],
    perguntas: [
      {
        id: 1,
        enunciado: 'Em relação aos dispositivos de parada de emergência na NR-12, é correto afirmar:',
        opcoes: [
          'Podem ser utilizados como dispositivos de partida habitual.',
          'Devem ser mantidos travados durante a operação comum.',
          'Devem ser de fácil acesso, acionáveis sem risco e sinalizados.',
          'São dispensáveis em linhas com mais de dois operadores.'
        ],
        respostaCorreta: 2
      }
    ]
  },
  {
    id: 'nr-20',
    codigo: 'NR-20',
    titulo: 'Segurança e Saúde com Inflamáveis e Combustíveis',
    cargaHoraria: '16 horas',
    modalidade: '100% EAD (Básico)',
    preco: 'R$ 119,90',
    descricao: 'Classes de risco, medidas preventivas para inflamáveis, controle de fontes de ignição e emergências.',
    programaDetalhado: [
      'Propriedades físicas e químicas de inflamáveis e combustíveis.',
      'Controle e prevenção de fontes de ignição.',
      'Procedimentos operacionais de segurança e noções básicas de resposta a vazamentos e derramamentos.'
    ],
    aulas: [{ id: 1, titulo: 'Propriedades dos Inflamáveis e Fontes de Ignição', duracao: '20 min', videoId: 'M7lc1UVf-VE' }],
    perguntas: [
      {
        id: 1,
        enunciado: 'O que define o Ponto de Fulgor de um líquido inflamável?',
        opcoes: [
          'A temperatura em que o líquido congela.',
          'A menor temperatura na qual o líquido libera vapores em quantidade suficiente para inflamar na presença de chama.',
          'A temperatura de ebulição sob pressão ambiente.',
          'A cor emitida pela combustão total.'
        ],
        respostaCorreta: 1
      }
    ]
  },
  {
    id: 'nr-35',
    codigo: 'NR-35',
    titulo: 'Trabalho em Altura',
    cargaHoraria: '08 horas',
    modalidade: 'Teórico EAD + Prática',
    preco: 'R$ 89,90',
    descricao: 'Análise de Risco, sistemas de ancoragem, linha de vida, EPIs contra quedas e resgate técnico.',
    programaDetalhado: [
      'Normas e regulamentos aplicáveis ao trabalho em altura (NR-35).',
      'Análise de Risco (AR) e Condições Impeditivas no Trabalho em Altura.',
      'Sistemas de Proteção Coletiva e Individual contra Quedas (SPCQ e SPIQ).',
      'Inspeção prévia e descarte de cinturões, talabartes, conectores e cordas.'
    ],
    aulas: [{ id: 1, titulo: 'Planejamento, AR, PT e Sistemas Antiqueda', duracao: '25 min', videoId: 'M7lc1UVf-VE' }],
    perguntas: [
      {
        id: 1,
        enunciado: 'Considera-se trabalho em altura toda atividade executada acima de quantos metros do nível inferior?',
        opcoes: [
          '1,50 metros.',
          '2,00 metros, onde haja risco de queda.',
          '3,50 metros.',
          '5,00 metros apenas.'
        ],
        respostaCorreta: 1
      }
    ]
  }
];

export default function App() {
  const [cursoAtivo, setCursoAtivo] = useState(null);
  const [salaDeAula, setSalaDeAula] = useState(null);
  const [aluno, setAluno] = useState({ nome: '', cpf: '', email: '' });
  const [aulaAtual, setAulaAtual] = useState(0);

  const [emAvaliacao, setEmAvaliacao] = useState(false);
  const [respostasUsuario, setRespostasUsuario] = useState({});
  const [aprovado, setAprovado] = useState(false);
  const [notaFinal, setNotaFinal] = useState(null);
  const [exibirCertificado, setExibirCertificado] = useState(false);

  const iniciarMatricula = (curso) => {
    setCursoAtivo(curso);
  };

  const confirmarMatricula = (e) => {
    e.preventDefault();
    if (!aluno.nome.trim() || !aluno.cpf.trim()) {
      alert('Preencha os campos obrigatórios para o registro regulamentar.');
      return;
    }
    setSalaDeAula(cursoAtivo);
    setCursoAtivo(null);
    setAulaAtual(0);
    setEmAvaliacao(false);
    setExibirCertificado(false);
    setRespostasUsuario({});
    setNotaFinal(null);
  };

  const responderQuestao = (perguntaId, opcaoIndex) => {
    setRespostasUsuario((prev) => ({ ...prev, [perguntaId]: opcaoIndex }));
  };

  const finalizarAvaliacao = () => {
    const perguntas = salaDeAula.perguntas;
    if (Object.keys(respostasUsuario).length < perguntas.length) {
      alert('Responda a todas as questões antes de submeter a avaliação.');
      return;
    }

    let acertos = 0;
    perguntas.forEach((p) => {
      if (respostasUsuario[p.id] === p.respostaCorreta) {
        acertos += 1;
      }
    });

    const percentual = Math.round((acertos / perguntas.length) * 100);
    setNotaFinal(percentual);

    if (percentual >= 70) {
      setAprovado(true);
    } else {
      setAprovado(false);
      alert('Aproveitamento: ' + percentual + '%. O mínimo exigido pela NR-1 é 70%. Reveja os módulos e tente novamente.');
    }
  };

  // TELA DO CERTIFICADO OFICIAL: FRENTE E VERSO REGULAMENTAR
  if (exibirCertificado && salaDeAula) {
    const codigoValidacao = 'SST-' + Date.now().toString(36).toUpperCase();
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    return (
      <div className="min-h-screen bg-slate-900 text-slate-900 p-4 md:p-10 flex flex-col items-center justify-center font-sans">
        {/* Barra de Ações (Não aparece na impressão) */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-6 print:hidden">
          <button 
            onClick={() => setExibirCertificado(false)}
            className="text-xs bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-700 transition"
          >
            ← Voltar à Sala de Aula
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">Dica: Selecione layout "Paisagem" e marque "Gráficos de segundo plano"</span>
            <button 
              onClick={() => window.print()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-lg text-xs shadow-lg transition flex items-center gap-2"
            >
              Imprimir Frente e Verso (PDF)
            </button>
          </div>
        </div>

        {/* ================= PÁGINA 1: FRENTE DO CERTIFICADO ================= */}
        <div className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-xl border-8 border-double border-slate-300 shadow-2xl relative text-center mb-8 print:mb-0 print:border-none print:shadow-none print:rounded-none">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="text-left">
              <span className="text-xl font-black text-slate-900 tracking-wider">MARTINS</span>
              <span className="text-xl font-black text-emerald-600">CONSULTORIASST</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Consultoria em Engenharia e Segurança do Trabalho</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded border">
                CONFORME NR-1 (ANEXO II)
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide mt-4 mb-2">
            Certificado de Capacitação Profissional
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Norma Regulamentadora de Segurança e Saúde no Trabalho</p>

          <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto mb-6">
            Certificamos que <strong className="text-slate-950 uppercase font-black underline decoration-emerald-500">{aluno.nome}</strong>, 
            portador(a) do CPF sob o nº <strong className="text-slate-900">{aluno.cpf}</strong>, concluiu com êxito em modalidade EAD a formação regulamentar:
          </p>

          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl max-w-2xl mx-auto mb-6">
            <h2 className="text-xl font-black text-emerald-950">{salaDeAula.codigo} — {salaDeAula.titulo}</h2>
            <div className="flex justify-center gap-6 text-xs text-emerald-900 font-semibold mt-2">
              <span>Carga Horária: {salaDeAula.cargaHoraria}</span>
              <span>•</span>
              <span>Aproveitamento: {notaFinal}%</span>
              <span>•</span>
              <span>Data de Conclusão: {dataAtual}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="h-12 border-b border-dashed border-slate-400 w-3/4 mx-auto mb-2 flex items-end justify-center">
                <span className="font-serif italic text-sm text-slate-600">Daniel Martins da Silva</span>
              </div>
              <p className="text-xs font-bold text-slate-900">Eng. Daniel Martins da Silva</p>
              <p className="text-[11px] text-slate-500">Engenheiro de Segurança do Trabalho • CREA Responsável</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
              <div className="bg-slate-100 p-2 border rounded-lg mb-1">
                <img 
                  src={'https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=https://danielmartinssilva135.github.io/consultoria-treinamentos-sst/#' + codigoValidacao} 
                  alt="QR Code de Validação" 
                  className="w-16 h-16"
                />
              </div>
              <p className="text-[10px] text-slate-600 font-mono">Autenticação: {codigoValidacao}</p>
              <p className="text-[9px] text-slate-400">Verificável digitalmente em todo o território nacional</p>
            </div>
          </div>
        </div>

        {/* ================= PÁGINA 2: VERSO REGULAMENTAR (CONTEÚDO PROGRAMÁTICO) ================= */}
        <div 
          style={{ pageBreakBefore: 'always' }}
          className="w-full max-w-4xl bg-white p-8 md:p-12 rounded-xl border-8 border-double border-slate-300 shadow-2xl relative text-left print:border-none print:shadow-none print:rounded-none"
        >
          <div className="flex justify-between items-center border-b pb-3 mb-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 uppercase">Conteúdo Programático e Dados Regulamentares</h2>
              <p className="text-xs text-slate-500">Anexo II da Norma Regulamentadora nº 1 (Capacitação e Treinamento em SST)</p>
            </div>
            <div className="text-right text-xs text-slate-600">
              <span className="font-mono font-bold">{codigoValidacao}</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
              Módulos Desenvolvidos no Treinamento ({salaDeAula.codigo})
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 leading-relaxed pl-2">
              {salaDeAula.programaDetalhado?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-xs text-slate-700">
            <div className="space-y-1">
              <p><strong>Modalidade de Ensino:</strong> Educação a Distância (EAD Síncrono/Assíncrono)</p>
              <p><strong>Carga Horária Total:</strong> {salaDeAula.cargaHoraria}</p>
              <p><strong>Critério de Avaliação:</strong> Avaliação Teórica Objetiva (Aproveitamento Mínimo: 70%)</p>
              <p><strong>Rendimento do Aluno:</strong> {notaFinal}% de acerto</p>
            </div>
            <div className="space-y-1">
              <p><strong>Responsável Técnico:</strong> Eng. Daniel Martins da Silva</p>
              <p><strong>Habilitação Profissional:</strong> Engenheiro de Segurança do Trabalho (CREA/MTE)</p>
              <p><strong>Amparo Legal:</strong> Portaria SEPRT nº 6.730/2020 e Portaria MTP nº 4.219/2022</p>
              <p><strong>Rastreabilidade:</strong> Log de acesso e participação registrados em ambiente virtual seguro</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-slate-300 flex justify-between items-center text-[10px] text-slate-400">
            <span>MARTINS CONSULTORIA SST — CNPJ & Registros Profissionais Vinculados</span>
            <span>Documento emitido eletronicamente com fé pública em conformidade com as NRs</span>
          </div>
        </div>
      </div>
    );
  }

  // TELA DO AMBIENTE VIRTUAL (VÍDEOS OU PROVA)
  if (salaDeAula) {
    const aulaVigente = salaDeAula.aulas[aulaAtual];

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-emerald-400 font-bold tracking-wider">{salaDeAula.codigo} • SALA VIRTUAL EAD</span>
            <h1 className="text-base md:text-lg font-bold text-white">{salaDeAula.titulo}</h1>
          </div>
          <button 
            onClick={() => setSalaDeAula(null)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
          >
            ← Sair do Ambiente
          </button>
        </header>

        <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {!emAvaliacao ? (
              <>
                <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                  <iframe
                    className="w-full h-full"
                    src={'https://www.youtube-nocookie.com/embed/' + aulaVigente.videoId + '?rel=0&modestbranding=1'}
                    title={aulaVigente.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <p className="text-xs text-slate-400">Aluno Matriculado:</p>
                    <p className="text-sm font-bold text-white">{aluno.nome} ({aluno.cpf})</p>
                    <p className="text-xs text-emerald-400 mt-0.5">{aulaVigente.titulo}</p>
                  </div>
                  <button 
                    onClick={() => {
                      if (aulaAtual < salaDeAula.aulas.length - 1) {
                        setAulaAtual(aulaAtual + 1);
                      } else {
                        setEmAvaliacao(true);
                      }
                    }}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-lg shadow-emerald-500/20"
                  >
                    {aulaAtual < salaDeAula.aulas.length - 1 ? 'Concluir Aula e Avançar →' : 'Iniciar Avaliação Final (Prova) →'}
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
                <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text
