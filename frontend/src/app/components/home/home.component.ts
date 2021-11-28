import { ListarProdutosComponent } from './../produtos/listar-produtos/listar-produtos.component';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {

  public nomeProduto: string ="curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number =2.510;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png';
  Validade: string ='2021-12-31';

  ListagemProduto: string[] =['Terceiro', 'Quarto', 'Quinto'];
  ListarNumeros: number []= [2000.00,1000.00,50.33,200.00];
  ListaHome: any =[

    {nome: 'Passagem Aérea', precoProduto: 200.00, validade: '2021-12-25' , id: 8},
    {nome: 'Hospedagem ', precoProduto: 100.00, validade: '2021-12-25' , id: 9, promocao: true},
    {id: 10, nome: 'Passeios Diversos' , precoProduto: 100.0, validade: '2021-12-25'},
    {id: 11, nome: 'Instrutor de viagem' , precoProduto: 50.33, validade: '2021-12-30'},
    {nome: 'Pontos turisticos ', precoProduto: 200.00, validade: '2021-12-31' , id: 12},
  ];

  constructor()
  {

    for (let item of this.ListagemProduto) {
      console.log(item);

    }

      for (const item of this.ListarNumeros){
        console.log(item);

      }



    //Variáveis de string com concatenação
   // this.anuncio = `o ` + this.nomeProduto + 'está em promoção!'

    /*var variavel = 0;
    var variavel = 10;
    console.log('variável', variavel);
    function funcao ()
    {
      var outra_variavel = 20;
      var outra_variavel = 30;
      console.log('outra variavel:',outra_variavel)
    }
    funcao();

    let variavel1 = 0;
    let variavel2 = 10;
    function funcao ()
    {
      for(let outra_variavel = 20; outra_variavel = 30;)
      {
        console.log('outra variavel:',outra_variavel);
      }
      console.log('variável', variavel1, variavel2);
    }
    funcao();

    var a = 10;
    let b = 20;

    function bar()
    {
      var a = 30;
      let b = 40;
      if(true)
      {
        var a = 50;
        let b = 60;
        console.log('Variável A dentro do if', a);
        console.log('Variável B dentro do if ', b);
      }
      console.log('Variável A dentro da função', a);
      console.log('Variável B dentro da função', b);
    }
    bar();
    console.log('Variável A fora da função', a);
    console.log('Variável B fora da função', b);

    let a = 1;
    function bar()
    {
      console.log('Variável A : ', a);
      let b = 2;
      if(true)
      {
        let c = 3;
        let a = 2;
        console.log('Variável A dentro do if:', a);
        console.log('Variável B dentro do if:', b);
        console.log('Variável C dentro do if:', c);
      }
      console.log('Variável A fora do if:', a);
      console.log('Variável B fora do if:', a);
      //console.log('Variavel C fora do if:', c);
    }
    bar();

    var a = 5;
    var b = 10;
    if(a = 5 )
    {
      let a = 4;
      var b = 1;
      console.log('Variável A dentro do if: ', a);
      console.log('Variável B dentro do if: ', b);
    }
    console.log('Variável A fora do if: ', a);
    console.log('Variável A fora do if: ', b);*/
  }
  ngOnInit(): void {

  }
}









