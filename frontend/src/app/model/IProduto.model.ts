import { Data } from "@angular/router";

export interface IProduto{
  id?:number;
  nome: string;
  validade: Date;
  precoProduto: number;

}
