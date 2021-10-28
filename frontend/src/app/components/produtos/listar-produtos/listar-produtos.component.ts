import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
  nome:'Amanda',
  idade: 18,
  altura:1.60,
  graduado: false
  };

  listaProdutos: any = [
    {nome: 'Curso de angular', precoProduto: 35.56, validade: '2021-12-31' , id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31' , id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado' , precoProduto: 56, validade: '2021-12-28'},
    {id: 4, nome: 'Curso de angular Avançado' , precoProduto: 50.33, validade: '2021-12-28'},
    {nome: 'Curso de PMobile iniciante', precoProduto: 45.56, validade: '2021-12-31' , id: 5},
    {nome: 'Curso de JavaScript', precoProduto: 60.56, validade: '2021-12-31' , id: 6},
    {nome: 'Curso de  c#', precoProduto: 60.00, validade: '2021-12-31' , id: 7},

  ];


  constructor() {
   for (let item of this.listaStrings) {
     console.log(item);

   }

     for (const item of this.listaNumeros){
       console.log(item);

     }

     console.log(this.objetoModelo);
     console.log(this.objetoModelo.nome);
     console.log(this.objetoModelo.graduado);

}

  ngOnInit(): void {
  }

}
