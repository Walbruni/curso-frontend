# Operadores

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false)
< menor que
> maior que
<= menor ou igual
>= maior ou igual

## Comparadores Lógicos: teste lógico, retorno booleano (true / false)
== igualdade entre sentenças (valor)
!= diferenças entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

a == b = true (lê-se: a é igual a b)
a != b = false (lê-se a é diferente de b)

* Atribuição
b = 4 (lê-se: b recebe quatro)
a = b (lê-se: a recebe b)
a = 4 (lê-se: a recebe quatro)

## Operadores de lógica e junção lógica
! NÃO (NOT)
&& E (AND)  // as duas condições precisam ser verdadeiras, para retornar true
|| OU (OR) // apenas uma das condições pode ser verdadeira, para retornar true

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

### Exemplos:

a !=b      // o valor de a é diferente de b
x !=== y  // o valor e o tipo de x são diferentes de y
!a == b  // o valor de a não é igual ao valor de b


### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto"? "preto" : "branco";

## IF
if (...) {

}

## Else
else {

}

* Exemplo 

if (cor == "preto") {
    meuCarro = "preto";
} else {
    meuCarro = "cinza";
}

## Else if
else if (...) {

}

* Exemplo

if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho") {
    meuCarro = "cinza";
} else if (cor == "amarelo") {
    meuCarro = "branco";
} else {
    meuCarro = "azul"
}

## Switch (Exemplo mais clássico de utilização: as ligações telefônicas "tecle 1 para falar com fulano, tecle 2 para serviço tal, etc)

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor desejada');
}


## Média
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 8) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}


### Laços de Repetição (loops)

for([expressaoInicial]; [condicao]; [incremento]) {

}

while( [condicao] ){
    [execucao]
}

Exemplo 1:

var contador = 0;
while( contador < 10) {
    contador++
}


Exemplo 2:

var hora = 24;
while (hora > 0) {
    
    console.log(hora);
    hora--;
}

console.log("total de horas: " + hora);


Exemplo 3:

do {
    [execução]
} while ([condição])


Exemplo 4:

// fazer a revisão do carro aos 10 km
var km;
var revisao = 3;
for(km = 0; km <= revisao; km++ ){
    console.log("apenas " + km + "kms então pode rodar");
}



### Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Notas: " + notasAluno);

    for( c = 0; c < notasAluno.lenght; c++ ){
        nota += notasAluno[c];
    }

    media = nota / 4;

    if(media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Media " + media + " - " + resultado);

}


## Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];

    }

    media = soma / notas.length;

    return media;
}

function aprovacao( media ) {

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return condicao;
}

console.log( "Média: " + calcularMedia([8, 8, 7]))
console.log( aprovacao( calcularMedia([8, 8, 7])) )

console.log( "Média: " + calcularMedia([8, 8, 10, 6]))
console.log( aprovacao( calcularMedia([8, 8, 10, 6])) )

console.log( "Média: " + calcularMedia([9, 6]))
console.log( aprovacao( calcularMedia([9, 6])) )


- OUTRA FORMA DE REALIZAR:


function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];

    }

    media = soma / notas.length;

    return media;
}

function aprovacao( notas ) {

    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
}

console.log( aprovacao([8, 8, 7]) );

console.log( aprovacao([8, 8, 10, 6]) );

console.log( aprovacao([9, 6]) );




### DOM

Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById(id)

- document.getElementByTagName('div')

- document.createElement('div') 

- parentNode.appendChild(node) 

- element.innerHTML

- element.style

- element.setAttribute('name')

- element.getAttribute('name')

- element.addEventListener()

- window.location

- window.onload 

- console.log()

- window.scrollTo(x,y)


### SELETORES

Tipos de seletores: Tag, ID, Class, Name e Query

- Callback

- getElementById()

- getElementsByTagName()

- getElementsByName()

- getElementsByClassName()

- querySelectorAll()  // #id | .class




















