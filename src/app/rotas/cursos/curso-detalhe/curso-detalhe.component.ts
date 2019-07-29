import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursoServiceService } from '../curso-service.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  nome: any[];
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private cursoService: CursoServiceService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params[`id`];
      this.nome = this.cursoService.getCursos();
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
