import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';

type CadClienteParams = {
  id?: number | string;
}

@Component({
  selector: 'app-cad-clientes',
  templateUrl: './cad-clientes.component.html',
  styleUrls: ['./cad-clientes.component.scss']
})
export class CadClientesComponent implements OnInit {
  isEdit = false;
  clientesForm!: FormGroup;


  constructor (
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeFormGroup();

    this.activatedRoute.params.subscribe((data: CadClienteParams) => {
      if (data.id && data.id !== 'novo') {
        this.isEdit = true;
        this.fetchExistingClientData(Number(data.id));

        return;
      }

      this.isEdit = false;
    })
  }

  initializeFormGroup(): void {
    this.clientesForm = new FormGroup({
      id: new FormControl<number | null>(null),
      nome: new FormControl<string>(""),
      estado: new FormControl<string>(""),
      cidade: new FormControl<string>(""),
      numero: new FormControl<string>(""),
      rua: new FormControl<string>(""),
      telefone: new FormControl<string>(""),
      inscricao: new FormControl<string>(""),
    })
  }

  fetchExistingClientData(clientId: number): void {
    this.clientsService.getClient(clientId).subscribe((res) => {
      if (res.Success) {
        const { cidade, estado, id, inscricao, nome, numero, rua, telefone } = res.Content;
        
        this.clientesForm.setValue({ 
          id,
          nome,
          numero,
          telefone,
          estado,
          cidade,
          rua,
          inscricao
        });
      }
    });
  }

  get id () {
    return this.clientesForm.get('id')?.value;
  }

  get nome () {
    return this.clientesForm.get('nome')?.value;
  }

}
