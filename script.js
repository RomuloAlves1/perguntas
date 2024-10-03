const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Muitas pessoas na nossa sociedade acabam não praticando atividades físicas, mas você sabia que els são de grande importância para a nossa saúde? Você costuma praticar atividades físicas?",
        alternativas: [
            {
                texto: "Sim, eun pratíco com bastante frequência",
            },
            {
                texto: "Não, não tenho costume de praticar",
            }
        ]
    },
    {
        enunciado: "Como já havia mencionado, as atividades físicas são muito importantes para a nossa saúde, porém, muitas pessoas acabam não ligando para isso e não se preucupam com o risco, que estão correndo. Na nossa sociedade, não tem ninguém que incentive as atividades físicas e isso é preucupante para a nossa populção, você não acha que a prefeitura daquela cidade deve fazer campanhas incentivando as atividades físicas?",
        alternativas: [
            {
                texto: "A prefeitura deve sim tomar alguma atitude sobre esse assunto",
            },
            {
                texto: "Para mim isso não tem nenhuma importância",
            }
        ]
    },
    {
        enunciado: "Você sabia que praticar atividades físicas não é justamente vocễ correr muito, levantar peso, etc? Muitas das vezes, você praticando um esporte da sua escolha já é muito importante para sua saúde e irá te ajudar muito no dia a dia. Você pratica algum esporte?",
        alternativas: [
            {
                texto: "Sim, costumo praticar alguns esportes",
            },
            {
                texto: "Não sou de praticar esportes",
            }
        ]
    },
    {
        enunciado: "A obesidade é algo muito preucupante para a nossa vida, você ficar muito tempo sem praticar atividades físicas, sem movimentar o seu corpo, pode trazer grandes problemas futuros em nossa vida. Na sua família tem algum caso de obesidade?",
        alternativas: [
            {
                texto: "Sim, algumas pessoas da minha família sofrem com isso",
            },
            {
                texto: "Não tem nenhum caso em minha família",
            }
        ]
    },
    {
        enunciado: "Em resumo, as atividades físicas são de grande importância em nossa vida, se você ainda não tem costume de praticar atividades físicas, deve tomar uma atitude agora, caso contrário se arrependerá terrivelmente no futuro. Quando você pratica atividades físicas você ganha muitos outros benefícios como, aumento da força e resistência, melhora na qualidade do sono, fortalecimento dos ossos e articulações, benefícios cognitivos, melhora da saúde cardiovascular, e se tem estresse ou ansiedade, praticar atividades físicas pode te ajudar de uma forma absurda. Lembrando que algumas atividades físicas contém riscos e você pode se machucar por isso, o recomendado é ter um profissional do seu lado te ajudando e auxiliando no que for preciso, para que de tudo certo e sua saúde não corra riscos",
        alternativas: [
       
           
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

