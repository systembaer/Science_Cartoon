let name = ["marie curie", "isacc newton", "peter parker", "fantastico", "elon musk", "charles darwin", "octopus", "albert einstein", "mark zuckerberg", "stephen hawking", "steve jobs", "curt connor", "tony stark", "bem carson", "bill gates"];
let randomName = Math.floor(Math.random() * name.length); //RANDOMIZA OS NOMES E RETORNA UM NUMERO

let jogadas = 0; //NUMERO DE DICAS
let currentIndex = 0; //RESPONSÁVEL POR COMPARAR OS CARACTERES
let lista
let brekLine;
let conteudoLista;
let image;
let btTitle = document.getElementById("title_person");
let btJump = document.getElementById("btn_jump");
let btShow = document.getElementById("btn_show");
let btAlert = document.getElementById("alert_mensage");
let btSuggestion = document.getElementById("btn_suggestion");
let btArrow = document.getElementById("arrow");

const caracte = [
    {
        person: "Marie Curie",
        caracteristica: ["1. Descobriu os elementos radioativos polônio e rádio, revolucionando a compreensão dos processos atômicos",
            "2. Recebeu dois Prêmios Nobel (Física em 1903 e Química em 1911), tornando-se a primeira pessoa a ganhar prêmios Nobel em duas áreas diferentes",
            "3. Enfrentou discriminação de gênero em um campo dominado por homens, destacando-se pela excelência científica apesar das adversidades",
            "4. Defensora do acesso à educação científica para mulheres, fundou institutos de pesquisa que promoviam a igualdade de oportunidades acadêmicas",
            "5. Utilizou suas descobertas para avançar a medicina moderna através do uso de radioterapia no tratamento do câncer",
            "6. Sua coragem, determinação e contribuições científicas continuam inspirando mulheres cientistas em todo o mundo"]
    },
    {
        person: "Isacc Newton",
        caracteristica: ["1. Formulou as leis fundamentais da física que governam o movimento dos corpos",
            "2. Desenvolveu a teoria que explica a força que mantém os corpos celestes em órbita",
            "3. Contribuiu significativamente para o desenvolvimento do cálculo e da matemática moderna",
            "4. Além da ciência, tinha interesse em alquimia e filosofia natural",
            "5. Envolvido em questões políticas e teológicas de sua época",
            "6. Suas descobertas e princípios continuam sendo fundamentais para a compreensão do mundo físico"]
    },
    {
        person: "Peter Parker",
        caracteristica: ["1. Inspirado pela lição de que 'com grandes poderes vêm grandes responsabilidades', luta contra o crime em Nova York",
            "2. Além de suas habilidades físicas, é um gênio científico e inventor talentoso",
            "3. Equilibra sua vida como estudante universitário, fotógrafo do Clarim Diário e super-herói, lidando com desafios pessoais e heroicos",
            "4. Por trás da máscara está um jovem com dilemas morais, emoções conflitantes e desafios do dia a dia"]
    },
    {
        person: "Fantastico",
        caracteristica: ["1. Conhecido por sua genialidade e habilidade científica, sendo um dos maiores mentes do Universo Marvel",
            "2. Possui a capacidade de esticar e distorcer seu corpo de maneiras extraordinárias, o que o torna um membro vital dos Quatro Fantásticos",
            "3. Assume frequentemente o papel de líder da equipe, utilizando sua inteligência estratégica para guiar e proteger seus companheiros",
            "4. Sua curiosidade e desejo de desvendar mistérios levam os Quatro Fantásticos a aventuras emocionantes em todo o cosmos",
            "5. Responsável por inúmeras invenções e descobertas tecnológicas que beneficiam não apenas a equipe, mas também o mundo em geral",
            "6. Família e Amizade: Valoriza profundamente os laços familiares e as amizades, tornando-o um personagem complexo e cativante"]
    },
    {
        person: "Elon Musk",
        caracteristica: ["1. Conhecido por fundar empresas inovadoras buscando transformar indústrias inteiras",
            "2. Focado em desenvolver tecnologias revolucionárias que possam impactar positivamente o futuro da humanidade",
            "3. Defende a ideia de colonizar Marte como uma forma de garantir a sobrevivência da espécie humana",
            "4. Utiliza ativamente as redes sociais para compartilhar seus projetos, ideias e interagir com seguidores",
            "5. Sua presença no cenário mundial tem impacto significativo não apenas no mundo dos negócios, mas também na exploração espacial e no desenvolvimento tecnológico"]
    },
    {
        person: "Charles Darwin",
        caracteristica: ["1. Conhecido por desenvolver a teoria da evolução das espécies",
            "2. Era meticuloso em suas observações da natureza, coletando evidências que sustentavam sua teoria evolutiva",
            "3. Suas ideias provocaram debates acalorados na época e continuam sendo fundamentais para a compreensão da biodiversidade",
            "4. A teoria da evolução é considerada uma das maiores conquistas intelectuais da história humana",
            "5. Sua abordagem científica influenciou profundamente a biologia, a paleontologia e outras disciplinas relacionadas à evolução"]
    },
    {
        person: "Dr Octopus",
        caracteristica: ["1. Renomado cientista especializado em física nuclear e robótica, com múltiplos doutorados em diversas áreas científicas",
            "2. Equipado com tentáculos mecânicos controlados mentalmente, que aumentam sua força física e habilidades tecnológicas",
            "3. Sua busca pelo poder muitas vezes o coloca em conflito com seus próprios princípios éticos e objetivos pessoais",
            "4. Suas batalhas com o Homem-Aranha são icônicas no universo Marvel, testando as habilidades de ambos os personagens"]
    },
    {
        person: "Albert Einstein",
        caracteristica: ["1. Revolucionou a física ao desenvolver as teorias da relatividade restrita e geral, alterando nossa compreensão do espaço-tempo",
            "2. Recebeu o Prêmio Nobel de Física em 1921 por explicar o fenômeno fotoelétrico através da teoria quântica",
            "3. Defensor da paz mundial, dos direitos civis e da educação científica como meios para promover um mundo melhor",
            "4. Sua abordagem não convencional para problemas científicos refletia seu pensamento livre e imaginativo",
            "5. Mantinha uma curiosidade insaciável pela natureza do universo e pelas questões fundamentais da existência humana",
            "6. Seu impacto na ciência moderna é inegável, sendo considerado um dos maiores gênios intelectuais da história"]
    },
    {
        person: "Mark Zuckerberg",
        caracteristica: ["1. Fundador de uma das maiores empresas do mundo, fundada em 2004 durante seus estudos na Universidade Harvard",
            "2. Envolvido em várias polêmicas relacionadas à privacidade dos dados dos usuários",
            "3. Desenvolveu algoritmos e recursos inovadores, como o News Feed",
            "4. Comprou o WhatsApp por US$ 16 bilhões de dólares",
            "5. Envolvido em controvérsias sobre privacidade de dados, manipulação de informações e moderação de conteúdo",
            "6. Casado com Priscilla Chan, pai de duas filhas, conhecido por sua simplicidade."]
    },
    {
        person: "Stephen Hawking",
        caracteristica: ["1. Reconhecido por suas contribuições revolucionárias para a física teórica e a cosmologia",
            "2. Mesmo enfrentando desafios físicos significativos, sua paixão pelo conhecimento o impulsionou a superar limitações",
            "3. Utilizou tecnologia para se comunicar, o que o permitiu continuar sua pesquisa e compartilhar suas ideias com o mundo",
            "4. Popularizou conceitos complexos da ciência, tornando-os acessíveis ao público em geral",
            "5. Explorou questões fundamentais sobre a natureza do cosmos, como a teoria dos buracos negros e a origem do universo",
            "6. Foi diagnosticado com esclerose lateral amiotrófica"]
    },
    {
        person: "Steve Jobs",
        caracteristica: ["1. Era conhecido por sua capacidade de pensar de forma inovadora e trazer ideias disruptivas para o mundo",
            "2. Famoso por sua atenção obsessiva aos detalhes e sua insistência na perfeição em todos os aspectos de seus produtos.",
            "3. Tinha uma visão clara do futuro sobre a tecnologia e como esta poderia transformar a forma como vivemos e trabalhamos.",
            "4. Tinha uma habilidade para inspirar e motivar sua equipe, assim como para cativar as audiências durante suas famosas apresentações de produtos.",
            "5. Apesar dos desafios e contratempos, era conhecido por sua determinação inabalável em realizar suas visões e projetos para o futuro do mundo.",
            "6. Tinha um agudo senso para identificar as necessidades e desejos do mercado, assim como para antecipar as tendências futuras."]
    },
    {
        person: "Curt Connor",
        caracteristica: ["1. Cientista Renomado e talentoso especializado em biologia e genética",
            "2. Frequentemente retratado como um dos principais cientistas da Marvel Comics",
            "3. Ele é conhecido por ter perdido um de seus braços em combate. Em uma tentativa de recuperar sua capacidade de locomoção, ele desenvolveu uma fórmula experimental baseada em DNA de um réptil.",
            "4. Após uma experiência científica viveu uma transformação que gerou uma luta interna entre sua personalidade humana e seus instintos animais",
            "5. É um vilão.Já foi um mentor e amigo de um herói da Marvel"]
    },
    {
        person: "Tony Stark",
        caracteristica: ["1. Inventor e homem de negócio",
            "2. Herdou uma grande indústria de seu pai e transformou-a em uma das maiores empresas de tecnologia e armamento do mundo",
            "3. Criou uma armadura com tecnologia de ponta.",
            "4. É comumente retratado como alguém que possui vários vícios, incluindo o álcool.",
            "5. Lida com problemas de saúde, como seu coração lesionado",
            "6. Membro dos Vingadores"]
    },
    {
        person: "Bem Carson",
        caracteristica: ["1. Neurocirurgião americano, reconhecido por sua carreira médica de sucesso e por ser pioneiro em cirurgias neurológicas complexas",
            "2. O primeiro cirurgião a separar com sucesso gêmeos siameses unidos pela parte posterior da cabeça",
            "3. Após sua aposentadoria da medicina, se tornou um autor e palestrante motivacional",
            "4. Se aposentou da medicina em 2013, após uma longa e bem-sucedida carreira como neurocirurgião",
            "5. É conhecido por suas visões políticas conservadoras",
            "6. Concorreu às eleições primárias republicanas para a presidência dos Estados Unidos em 2016",]
    },
    {
        person: "Bill Gates",
        caracteristica: ["1. É um dos fundadores de uma das maiores empresas de tecnologia do mundo",
            "2. Atualmente se dedica principalmente à filantropia em áreas como saúde global, educação e desenvolvimento de comunidades.",
            "3. Frequentemente é classificado como uma das pessoas mais ricas do mundo.",
            "4. Estudou na Universidade de Harvard",
            "5. Abandonou seus estudos para fundar uma empresa com seu amigo de infância, Paul Allen",
            "6. É autor de vários livros. Um de seus livros mais conhecidos é 'A estrada do futuro'",]
    }
];

//Botao de dica
function suggestion() {
    jogadas++;
    switch (randomName) {
        case 0:
            if (currentIndex < caracte[0].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[0].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 1:
            if (currentIndex < caracte[1].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[1].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 2:
            if (currentIndex < caracte[2].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[2].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 3:
            if (currentIndex < caracte[3].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[3].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 4:
            if (currentIndex < caracte[4].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[4].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 5:
            if (currentIndex < caracte[5].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[5].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 6:
            if (currentIndex < caracte[6].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[6].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 7:
            if (currentIndex < caracte[7].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[7].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 8:
            if (currentIndex < caracte[8].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[8].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 9:
            if (currentIndex < caracte[9].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[9].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 10:
            if (currentIndex < caracte[10].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[10].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 11:
            if (currentIndex < caracte[11].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[11].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 12:
            if (currentIndex < caracte[12].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[12].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 13:
            if (currentIndex < caracte[13].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[13].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
        case 14:
            if (currentIndex < caracte[14].caracteristica.length) {
                lista = document.getElementById("list");
                brekLine = document.createElement("br");
                brekLine = document.createElement("br");
                conteudoLista = document.textContent = caracte[14].caracteristica[currentIndex];
                lista.append(conteudoLista);
                lista.append(brekLine);
                currentIndex++;
            } else {
                currentIndex = 0; // Reinicia o índice
            }
            break;
    }

    if (jogadas == 6) {
        btAlert.innerText = "*O número de dicas acabaram*"; //Execede as dicas
        btSuggestion.style.display = "none"; //Bloqueia o botao de dica
        btShow.style.display = "inline-block"; //Desbloqueia o botao de mostrar 
    }

}
//PALPITE DA PESSOA
function palpit() {
    if (event.key == 'Enter') { //SE O BOTÃO ENTER FOR CLICADO
        let valueInput = document.getElementById("btn_palpit").value.toLowerCase().trim(); //PEGA O VALOR DO INPUT, CONVERTE TUDO PARA MINUSCULO E TIRA OS ESPAÇOS DO COMEÇO E FIM
        if (valueInput != name[randomName]) {
            alert("INCORRETO, TENTE NOVAMENTE");
        } else if (valueInput == name[randomName]) {
            //RESPONSÁVEL POR EXIBIR AS IMAGEMS DE ACORDO COM AS PESSOAS
            image = document.getElementById("image");
            if (valueInput.toLowerCase().trim() == 'marie curie') {
                image.src = '/images/curie.jpg';
            } else if (valueInput.toLowerCase() == 'isacc newton') {
                image.src = '/images/newton.jpg';
            } else if (valueInput.toLowerCase() == 'peter parker') {
                image.src = '/images/parker.jpg';
            } else if (valueInput.toLowerCase() == 'fantastico') {
                image.src = '/images/fantastico.jpeg';
            } else if (valueInput.toLowerCase() == 'elon musk') {
                image.src = '/images/musk.jpeg';
            } else if (valueInput.toLowerCase() == 'charles darwin') {
                image.src = '/images/charles.jpeg';
            } else if (valueInput.toLowerCase() == 'octopus') {
                image.src = '/images/octopus.webp'
            } else if (valueInput.toLowerCase() == 'albert einstein') {
                image.src = '/images/albert.jpeg'
            } else if (valueInput.toLowerCase() == 'mark zuckerberg') {
                image.src = '/images/mark.jpeg'
            } else if (valueInput.toLowerCase() == 'stephen hawking') {
                image.src = '/images/stephen.jpeg'
            } else if (valueInput.toLowerCase() == 'steve jobs') {
                image.src = '/images/jobs.jpeg'
            } else if (valueInput.toLowerCase() == 'curt connor') {
                image.src = '/images/connor.jpg'
            } else if (valueInput.toLowerCase() == 'tony stark') {
                image.src = '/images/tony.jpeg'
            } else if (valueInput.toLowerCase() == 'bem carson') {
                image.src = '/images/carson.jpeg'
            } else if (valueInput.toLowerCase() == 'bill gates') {
                image.src = '/images/gates.jpeg'
            }

            btArrow.style.display = "inline-block"; //Ativa o icone de flecha
            btTitle.innerText = name[randomName]; //Mostra o nome do personagem
            btAlert.innerText = " "; //Limpa a notificação
            btJump.style.display = "inline"; //Habilita o botao de pular
            btShow.style.display = "none"; //Desabilita o botao de mostrar
            btSuggestion.style.display = "none";
        }
    }
}
//MOSTRA O PERSONAGEM
function show() {
    btAlert.innerText = " ";
    btTitle.innerText = name[randomName];
    btArrow.style.display = 'inline-block';
    btJump.style.display = "inline-block";
    btShow.style.display = "none";
    image = document.getElementById("image");

    switch (randomName) {
        case 0:
            image.src = '/images/curie.jpg'
            break;
        case 1:
            image.src = '/images/newton.jpg'
            break;
        case 2:
            image.src = '/images/parker.jpg'
            break;
        case 3:
            image.src = '/images/fantastico.jpeg'
            break;
        case 4:
            image.src = '/images/musk.jpeg'
            break;
        case 5:
            image.src = '/images/charles.jpeg'
            break;
        case 6:
            image.src = '/images/octopus.webp'
            break;
        case 7:
            image.src = '/images/albert.jpeg'
            break;
        case 8:
            image.src = '/images/mark.jpeg'
            break;
        case 9:
            image.src = '/images/stephen.jpeg'
            break;
        case 10:
            image.src = '/images/jobs.jpeg'
            break;
        case 11:
            image.src = '/images/connor.jpg'
            break;
        case 12:
            image.src = '/images/tony.jpeg'
            break;
        case 13:
            image.src = '/images/carson.jpeg'
            break;
        case 14:
            image.src = '/images/gates.jpeg'
            break;
    }
    palpite = document.getElementById("btn_palpite").style.display = "none"
}
//PULA O PERSONAGEM
function jump() {
    randomName = Math.floor(Math.random() * name.length);   //RANDOMIZA NOVAMENTE OS PERSONAGENS
    suggestion();
    btArrow.style.display = "none";
    jogadas = 0;
    currentIndex = 0;
    btTitle.textContent = "???";
    lista.textContent = " ";
    btJump.style.display = "none";
    btSuggestion.style.display = "inline";
    image.src = "#";

}
//ANIMAÇÃO DE CARTA
flip = document.getElementById('card');
flip.addEventListener('click', () => {
    flip.classList.toggle('flip');
});

