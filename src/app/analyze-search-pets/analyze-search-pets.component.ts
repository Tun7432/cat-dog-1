import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-analyze-search-pets',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './analyze-search-pets.component.html',
  styleUrls: ['./analyze-search-pets.component.scss']
})
export class AnalyzeSearchPetsComponent implements OnInit {
  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince = '';
  selectedAmphure = '';
  selectedTambon = '';
  startDate = '';
  endDate = '';
  villageNumber = '';

  constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProvinces();
  }

  getProvinces() {
    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/provinces`).subscribe(
      response => this.provinces = response,
      error => console.error('Error loading provinces:', error)
    );
  }

  getAmphures() {
    if (this.selectedProvince) {
      this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/amphures/${this.selectedProvince}`).subscribe(
        response => {
          this.amphures = response;
          this.selectedAmphure = '';
          this.tambons = [];
          this.selectedTambon = '';
        },
        error => console.error('Error loading amphures:', error)
      );
    }
  }

  getDistricts() {
    if (this.selectedAmphure) {
      this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/tambons/${this.selectedAmphure}`).subscribe(
        response => {
          this.tambons = response;
          this.selectedTambon = '';
        },
        error => console.error('Error loading tambons:', error)
      );
    }
  }

 onSearch() {
  // // Ensure all required fields are provided
  // if (!this.startDate || !this.endDate || !this.selectedProvince || !this.selectedAmphure || !this.selectedTambon) {
  //   alert('Please fill in all required fields.');
  //   return;
  // }

  const queryParams = {
    start_date: this.startDate,
    end_date: this.endDate,
    province: this.selectedProvince,
    district: this.selectedAmphure,
    sub_district: this.selectedTambon,
    village_number: this.villageNumber
  };

  this.router.navigate(['/AnalyzePets'], { queryParams });
}

}
