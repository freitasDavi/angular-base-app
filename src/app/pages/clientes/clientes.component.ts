import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { delay, finalize } from 'rxjs';
import { Clients, ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  isLoading = false;

  clientes?: Clients[];

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.clientsService.getClients().pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((res) => {
      this.clientes = res;
    })
  }

  onClickEdit (clientId: number): void {
    this.router.navigateByUrl(`/clientes/${clientId}`);
  }

}
