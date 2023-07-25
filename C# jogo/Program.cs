// See https://aka.ms/new-console-template for more information
Console.WriteLine("Bem vindo ao jogo da adivinhação");

Random numAleatorio = new();
int valorInteiro = numAleatorio.Next(0,100);
int achou = 1;

while(achou !=0){

Console.WriteLine("escolha um numero de 0 a 100:\n");
string resposta = Console.ReadLine();
int respostaint = int.Parse(resposta);

    if (respostaint == valorInteiro){        
        Console.WriteLine("parabens, achou o numero!");
        achou = 0;
    }
    else if (respostaint < valorInteiro){
        Console.WriteLine("o numero é maior");
    }else Console.WriteLine("o numero é menor");

}

Console.WriteLine(valorInteiro);
Console.ReadLine();
