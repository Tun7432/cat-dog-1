import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './history-registration.component.html',
  styleUrls: ['./history-registration.component.scss']
})
export class HistoryRegistrationComponent {
  searchResults: any[] = [];
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor(private httpClient: HttpClient,private dataService: DataService,) {}

  searchOwners() {
  const params: any = {};

  if (this.firstName) {
    params.first_name = this.firstName;
  }
  if (this.lastName) {
    params.last_name = this.lastName;
  }
  if (this.phone) {
    params.phone = this.phone;
  }

  this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/search-owners`, { params })
    .subscribe(
      (response) => {
        this.searchResults = response;
        console.log(this.searchResults);
      },
      (error) => {
        console.error('Error searching owners:', error);
      }
    );
}


  cancelSearch() {
    // Implement cancel functionality here
  }

  manageOwner(owner: any) {
    // Implement manage functionality here
  }
}
