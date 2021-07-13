function botao(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
  //  window.location.href="https://web.digitalinnovation.one/"; //abre na mesma janela
}

function trocar(elemento){
   //document.getElementById("mouse").innerHTML="Obrigado por passar o mouse";
   elemento.innerHTML="Obrigado por passar o mouse";
}

function voltar(elemento){
   //document.getElementById("mouse").innerHTML="Passe o mouse aqui";
   elemento.innerHTML="Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function validaIdade(){
    var validar;
    if(idade >=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}


alert(soma(5,10));
alert(setReplace("Vai Japão!","Japão", "Brasil"));
*/

/*
var d=new Date();
//alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count=0;
while(count<=5){
console.log(count);
count++;
}
*/

/*
var idade = prompt("Qual sua idade?"); //coleta informação
if (idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome:"maçã", cor: "vermelha"},{nome:"uva", cor: "roxa"}];
console.log(frutas[1].nome);
console.log(frutas);
*/

/*
var fruta = {nome:"maçã", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

/* 
var lista = ["maçã","pera","laranja"];
lista.push("uva");
lista.pop(); //tira elementos
console.log(lista.length); //tamanho
console.log(lista);
console.log(lista.reverse()); //inverso
console.log(lista.toString());//não mostra como array
console.log(lista.join("|"));
alert(lista[1]);
*/

/*
var nome="Vanessa";
var idade=38;
var idade2=10;
var frase="Corinthians é o pior time do mundo";

//alert("Bem vinda "+nome);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("pior","melhor"));
*/