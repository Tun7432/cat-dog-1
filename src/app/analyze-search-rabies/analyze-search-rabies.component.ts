import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-analyze-search-rabies',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './analyze-search-rabies.component.html',
  styleUrls: ['./analyze-search-rabies.component.scss']
})
export class AnalyzeSearchRabiesComponent implements OnInit {
  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';
  startDate: string = '';
  endDate: string = '';
  location: string = '';
  villageNumber: string = '';



  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getProvinces();
  }

  getProvinces() {
    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/provinces`).subscribe(
      (response: any[]) => {
        this.provinces = response;
        console.log(this.provinces);
      },
      (error) => {
        console.error('Error loading provinces:', error);
      }
    );
  }

   getAmphures() {
  console.log('getAmphures called with province:', this.selectedProvince);
  if (this.selectedProvince) {
    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/amphures/${this.selectedProvince}`).subscribe(
      (response: any[]) => {
        console.log('Amphures received:', response);
        this.amphures = response;
        this.selectedAmphure = '';
        this.tambons = [];
        this.selectedTambon = '';
      },
      (error) => {
        console.error('Error loading amphures:', error);
      }
    );
  }
}

getDistricts() {
  console.log('getDistricts called with amphure:', this.selectedAmphure);
  if (this.selectedAmphure) {
    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/tambons/${this.selectedAmphure}`).subscribe(
      (response: any[]) => {
        console.log('Tambons received:', response);
        this.tambons = response;
        this.selectedTambon = '';
      },
      (error) => {
        console.error('Error loading tambons:', error);
      }
    );
  }
}
  
  
   onSearch() {
    const queryParams = {
      start_date: this.startDate,
      end_date: this.endDate,
      location: this.location,
      province: this.selectedProvince,
      amphure: this.selectedAmphure,
      tambon: this.selectedTambon,
      village_number: this.villageNumber
    };

    this.router.navigate(['/AnalyzeRabies'], { queryParams });
  }
  
}