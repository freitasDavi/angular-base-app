import { Component, OnInit } from '@angular/core';
import { Clients, ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
  clientes?: Clients[];

  constructor (private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe((res) => {
      this.clientes = res;
    })
  }

}
