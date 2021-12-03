import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
      produto: IProduto ={
      nome: '',
      validade: new Date(),
      precoProduto: 0
    };

    constructor(private produtosService: ProdutosService,
      private activaredRouter: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      const id = Number (this.activaredRouter.snapshot.paramMap.get('id'));
      this.produtosService.buscarPorId(id).subscribe(retorno => {
        this.produto = retorno;
      });

    }

    salvarProduto(): void {
     this.produtosService.atualizar(this.produto).subscribe(retorno => {
       this.produto = retorno;
       this.produtosService.exibirMensagem(
         'Sistema',
      `${this.produto.nome} Foi atualizado com sucesso com sucesso. ID: ${this.produto.id} `,
      'toast-sucess'
       );

       this.router.navigate(['/produtos']);

     });

    }

  }
