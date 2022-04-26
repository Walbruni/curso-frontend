## VARIAVEIS

 let idade = 28;
 console.log(idade);
 let altura = 162;
 console.log(altura);

 let valorIngressoAdulto = 20;
 valorIngressoAdulto =30;
console.log(valorIngressoAdulto);

* PODE REDEFINIR VALORES



## CONSTANTES

const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

* OS VALORES SÃO CONSTANTES



## TIPOS PRIMITIVOS

let nome = 'Lucas'; // STRING //

let idade = 28; // NUMBER //

let estaAprovado = true; // BOOLEAN //

let sobrenome = ; // UNDERFINED //

let corSelecionado = null // REDEFINIR UM VALOR



## TIPAGEM DINÂMICA

// UTILIZAR NO CONSOLE //

typeof nome // SERÁ UMA STRING //
typeof idade // SERÁ UM NUMBER //
typeof estaAprovado // SERÁ UM BOOLEAN //
typeof sobrenome // SERÁ UNDERFINED //
typeof corSelecionado // SERÁ UM OBJETO //



## OBJETOS

let pessoa = {
    nome: 'Lucas',
    idade: 28,
    estaAprovado: true,
    sobrenome: 'Walbruni'

};

console.log(pessoa);



## ARRAYS

let familia = [true,45,50,'Lucas']; // DENTRO DOS COLCHETES PODE COLOCAR O QUE QUISER: STRING, NUMBER, BOOLEAN, OBJETO //

console.log(familia);

// PARA ACESSAR APENAS O VALOR 50 //

console.log(familia[2]);

// PARA ACESSAR APENAS O VALOR DE TRUE //

console.log(familia[0]);

// PARA SABER O TAMANHO DESSE ARRAY //

let familia = [true,45,50,'Lucas'];
console.log(familia.lenght);                 // O LENGHT SIGNIFICA TAMANHO //
console.log(familia[0]);



## FUNÇÕES

// VERBO + SUBSTANTIVO //

* Exemplos:

resetaCor
transformarObjeto
alterarTamanho

* Para declarar a função:

let corSite = "azul";
function resetaCor(){
    corSite = "";            // PARA RESETAR O VALOR ATRIBUÍDO A COR DE UM SITE, DEFINI-LO COMO VAZIO - no caso a cor azul passará a ser redefinida como vazio //

};

console.log(corSite);
resetaCor();
console.log(corSite);      // ESTARÁ VAZIO //


* Para inserir parâmetros na função:

let corSite = "azul";
function resetaCor(cor){
    corSite = cor;

};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);    // A COR PASSARÁ DE AZUL PARA VERMELHO //


* Outro exemplo:

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade           // PARA CONCATENAR UTILIZA-SE O SINAL DE + (OU SEJA, PARA JUNTAR). JÁ AS ASPAS SIMPLES APENAS PARA DAR ESPAÇO //

};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);



## TIPOS DE FUNÇÕES

* Para não devolver valor 

function dizerNome(){
    console.log('Lucas');

}

dizerNome();


* Para devolver algum valor através de um cálculo ou operação

function MultiplicarPorDois(valor){
    return valor* 2;

}

console.log(MultiplicarPorDois(5));


// É POSSÍVEL TAMBÉM USAR UMA VARIÁVEL NO LUGAR //

* Exemplo:

function MultiplicarPorDois(valor){
    return valor* 2;

}

let resultado = MultiplicarPorDois(5);

console.log(resultado);


## OPERADORES

Operadores Aritméticos (Matemáticos)
Operadores Atribuição
Operadores de Comparação
Operadores Lógicos
Operadores Bitwise


* OPERADORES ARITMÉTICOS (MATEMÁTICOS)

// +, -, *, /, ** //      (O SÍMBOLO ** SIGNIFICA UM NÚMERO VEZES ELE MESMO - EXPONENCIAL)

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);


// ++, -- //       (SÃO CHAMADOS DE OPERADORES DE INCREMENTO E DECREMENTO)

let idade = 28;

console.log(idade++);
console.log(idade);         (SOMENTE SERÁ POSSÍVEL VERIFICAR O 29 NESSE PROCESSAMENTO, É SEMPRE NO PRÓXIMO)


let idade = 28;

console.log(++idade);       (DESSA FORMA SERÁ POSSÍVEL VERIFICAR O 29 DE IMEDIATO)


let idade = 28;

console.log(idade--);
console.log(idade);

let idade = 28;

console.log(--idade);



* OPERADORES DE ATRIBUIÇÃO 

let valorTecladoGamer = 100;                  (O SINAL DE = É O OPERADOR DE ATRIBUIÇÃO)

valorTecladoGamer += valorTecladoGamer;       (SIGNIFICA DIZER VALORTECLADOGAMER = VALORTECLADOGAMER + VALORTECLADOGAMER)
valorTecladoGamer -= valorTecladoGamer;       (VALORTECLADOGAMER = VALORTECLADOGAMER - VALORTECLADOGAMER)



* OPERADORES DE IGUALDADE

IGUALDADE ESTRITA

console.log( 1 === 1 );              (O CONSOLE RETORNARÁ A PALAVRA TRUE, POIS OS TRÊS SINAIS DE IGUAL COMPARAM O VALOR E O TIPO)

console.log( '1' === 1 );            (O CONSOLE RETORNARÁ A PALAVRA FALSE, POIS APESAR DOS DOIS VALORES SEREM UM, O PRIMEIRO É UMA STRING E NÃO UM NUMBER) *FORMA RECOMENDADA 


IGUALDADE SOLTA

console.log( 1 == 1);                (DOIS SINAIS DE IGUAL IGNORAM O TIPO E COMPARAM APENAS OS VALORES. RETORNARÁ A PALAVRA TRUE)

console.log( '1' == 1 );             (IGNORA A STRING, OU SEJA, O TIPO E COMPARA APENAS O VALOR QUE ESTÁ DENTRO. RETORNARÁ A PALAVRA TRUE) *NÃO RECOMENDADO USAR 



* OPERADORES DE COMPARAÇÃO

EXEMPLO: CASO UM CLIENTE TENHA 100 PONTOS ELE SERÁ PREMIUM, DO CONTRÁRIO SERÁ COMUM. 
PROGRAMANDO FICARÁ ASSIM:

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);                                       (O CONSOLE RETORNARÁ COMUM, POIS NÃO É MAIOR QUE 100)

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);                                       (O CONSOLE RETORNARÁ PREMIUM, POIS É MAIOR QUE 100)



* OPERADORES LÓGICOS

&&    // CHAMADO DE OPERADOR LÓGICO E ou AND //        (RETORNA TRUE SE OS DOIS OPERANDOS FOREM TRUE)

console.log(true && true);                             (RETORNA TRUE)
console.log(false && true);                            (RETORNA FALSE, POIS UM DOS DOIS NÃO É TRUE)

EXEMPLO:

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);                             (RETORNARÁ TRUE)


let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);                             (RETORNARÁ FALSE)



||    // CHAMADO DE OPERADOR LÓGICO OU //             (RETORNA TRUE SE UM DOS OPERANDOS FOR TRUE)

EXEMPLO:

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar);                             (RETORNARÁ TRUE)


let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar);                             (RETORNARÁ FALSE, POIS NENHUM DOS DOIS É TRUE)



!     // CHAMADO DE OPERADOR NOT, OU SEJA, UMA NEGAÇÃO //

EXEMPLO:

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar:' ,podeAplicar);                     (PODE APLICAR SERÁ FALSE)

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado', candidatoRecusado);          (CANDIDATO RECUSADO SERÁ TRUE)



## COMPARAÇÕES NÃO BOOLEANAS

FALSY     // SÃO TODOS OS VALORES UNDEFINED, NULL, 0, FALSE, '', NaN (NOT A NUMBER) //

TRUTHY   // TODOS OS VALORES NÃO LISTADOS ACIMA //


EXEMPLO:

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);                                      (RETORNARÁ VERMELHO, POIS O OPERADOR || PRECISA APENAS DE UM VALOR TRUTHY, E PRIMEIRO FOI O VERMELHO)


let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);                                      (RETORNARÁ AZUL, POIS A STRING DA COR PERSONALIZADA ESTÁ VAZIA, OU SEJA, É UMA FALSY)



### TROCAR VALORES

let a = 'vermelho';
let b = 'azul';

console.log(a);           (RETORNARÁ VERMELHO)
console.log(b);           (RETORNARÁ AZUL)

// PARA TROCAR OS VALORES É NECESSÁRIO INSERIR UMA OUTRA VARIÁVEL //

let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);         (RETORNARÁ AZUL)
console.log(b);         (RETORNARÁ VERMELHO)



### IF ... ELSE 

// SE A HORA ESTIVER ENTRE 06:00 ATÉ 12:00 EXIBIRÁ BOM DIA! //
// SE A HORA ESTIVER ENTRE 12:00 ATÉ 18:00 EXIBIRÁ BOA TARDE! //
// NENHUM DOS HORÁRIOS ACIMA EXIBIRÁ BOA NOITE! //

if (condicao) {
    // codigo a ser executado
}

else if (outraCondicao) {
    // codigo a ser executado
}

else {
    // codigo a ser executado
}


EXEMPLO:

let hora = 10;

if (hora > 6 && hora < 12) {
    console.log("Bom Dia!");
}

else if (hora > 12 && hora < 18) {
    console.log("Boa Tarde!");
}

else {
    console.log("Boa Noite!");
}

(RETORNARÁ BOM DIA, POIS A HORA É 10)



### SWITCH ... CASE

let permissao;           // O TRABALHADOR SER COMUM, GERENTE OU DIRETOR //

permissao = 'comum'      (O CONSOLE EXIBIRÁ COMUM)
permissao = 'gerente'    (O CONSOLE EXIBIRÁ GERENTE)
permissao = 'diretor'    (O CONSOLE EXIBIRÁ DIRETOR)
sem definir permissao    (O CONSOLE EXIBIRÁ USUÁRIO NÃO RECONHECIDO)

switch (permissao) {
    case 'comum':
    console.log('usuário comum');
    break;                                  (É NECESSÁRIO INSERIR O BREAK PARA PARAR O PROCESSAMENTO)
                                  
    case 'gerente':
    console.log('usuário gerente');
    break;

    case 'diretor':
    console.log('usuário diretor');
    break;

    default:
    console.log('usuário não reconhecido');
}



### LOOP FOR         (TAMBÉM CHAMADO DE LAÇO)

EXEMPLO: REPETIR A EXPRESSÃO "ESTOU APRENDENDO" CINCO VEZES

for(let i = 1; i <= 5; i++) {
    console.log('Estou aprendendo!', i);        

}


// REALIZANDO O MESMO PROCESSO SOMENTE RETORNANDO NÚMEROS IMPARES //

for(let i = 1; i <= 5; i++) {
    if(i % 2 !== 0) {
        console.log(i);                                                   (RETORNARÁ SOMENTE OS VALORES IMPARES: 1, 3 e 5)
    }
}


// REALIZANDO O MESMO PROCESSO RETORNANDO VALORES DECRESCENTES //

for(let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) {
        console.log(i);                                                 (RETORNARÁ OS VALORES EM ORDEM DECRESCENTE E IMPARES: 5, 3 e 1)
    }
}



### LOOP WHILE       (WHILE SIGNIFICA ENQUANTO)

let i = 5;

while (i >=1) {
    if(i % 2 !== 0) {
        console.log(i);                                      (RETORNARÁ OS VALORES DECRESCENTE: 5, 3 e 1; 5, 3 e 1)
    }
    i--;
}




### LOOP DO-WHILE

let i = 0;

do {
    console.log('digitando!', i);
    i++;
} while (i < 10)


// O WHILE VERIFICA PRIMEIRO E EXECUTA DEPOIS, JÁ O DO EXECUTA PRIMEIRA UMA VEZ E DEPOIS VERIFICA //



### LOOP FOR-IN

const pessoa = {
    nome: 'Lucas',                                  (A PALAVRA NOME SERIA A KEY E LUCAS SERIA O VALUE)
    idade: 28
};

for(let chave in pessoa) {                          (A PALAVRA CHAVE VEM DO TERMO KEY-VALUE)
    console.log(chave);                             (RETORNARÁ SOMENTE AS PALAVRAS NOME E IDADE)
    console.log(chave, pessoa.nome);                (RETORNARÁ NOME LUCAS IDADE 28)
}

// TAMBÉM PODE USAR DESSA FORMA ABAIXO //

console.log(chave, pessoa['nome']);


OUTRO EXEMPLO:

const cores = ['Vermelho, 'Azul', 'Verde'];

for(let indice in cores) {
    console.log(indice,cores[indice]);                          (EXIBE OS INDICES QUE ESTÃO LOCALIZADOS OS ARRAYS, OU SEJA, 0 = VERMELHO; 1 = AZUL e 2 = VERDE)
}



### LOOP FOR-OF          (A DECLARAÇÃO E EXECUÇÃO É MAIS SIMPLIFICADA QUE O FOR-IN)

const cores = ['Vermelho, 'Azul', 'Verde'];

for(let cor of cores) {
    console.log(cor);                                          (EXIBE SOMENTE AS PALAVRAS VERMELHO, AZUL e VERDE, NESSA ORDEM E SEM OS NÚMEROS 0, 1 e 2)
}



### MINI PROJETO 1: MÁXIMO ENTRE DOIS VALORES

let valorMaior = max(5,9);
console.log(valorMaior);

function max(numero1,numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

// OUTRA FORMA MAIS SIMPLIFICADA PARA ESSE CÓDIGO //

let valorMaior = max(5,9);
console.log(valorMaior);

function max(numero1,numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}



### MINI PROJETO 2: FIZZBUZZ

// DIVISÍVEL POR 3 RETORNA FIZZ //
// DIVISÍVEL POR 5 RETORNA BUZZ //
// DIVISÍVEL POR 3 e 5 RETORNA FIZZBUZZ//
// NÃO DIVISÍVEL POR 3 ou 5 RETORNA ENTRADA ou O NUMERO QUE FOI COLOCADO //
// NÃO É UM NÚMERO RETORNA "NÃO É UM NÚMERO"//

const resultado = fizzBuzz();                                                 (PARA APARECER OS VALORES ABAIXO, BASTA ALTERAR DENTRO DO PARENTESE)
console.log(resultado);                                

function fizzBuzz(entrada) {
    if ( typeof entrada !== 'number' )
        return 'Não é um número';

    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    
    if (entrada % 3 === 0)
        return 'Fizz';
    
    if (entrada % 5 === 0)
        return 'Buzz';
    
    else return entrada;
}



### MINI PROJETO 3: MEDIDOR DE VELOCIDADE

// VELOCIDADE MÁXIMA DE ATÉ 70 KM/H //
// A CADA 5 KM/H ACIMA DO LIMITE VOCÊ GANHA 1 PONTO //
// UTILIZAR Math.Floor() //
// CASO OS PONTOS SEJAM ACIMA DE 12 RETORNARÁ "CARTEIRA SUSPENSA" //

verificarVelocidade(80);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    
    else {
        const pontos = Math.Floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
    }
}