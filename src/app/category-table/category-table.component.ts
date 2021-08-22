import { Component, OnInit } from '@angular/core';
import {Client, ClientService} from '../services/client.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  constructor(private clientService: ClientService) { }
  clients: Client[] = [];

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.clientService.getAll().subscribe((response: Client[]) => {
      this.clients = response;
    });
  }

  onDelete(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.clientService.delete(id).subscribe(() => {
        this.updateTable();
      });
    }
  }
}
