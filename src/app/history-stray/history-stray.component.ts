import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-stray',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './history-stray.component.html',
  styleUrls: ['./history-stray.component.scss']
})
export class HistoryStrayComponent implements OnInit {
[x: string]: any;
  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  searchResults: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';
  village: string = '';
  landmark: string = '';
  houseNumber: string = '';
  alley: string = '';
  road: string = '';
  postalCode: string = '';
  informerName: string = '';

  constructor(private dataService: DataService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.getProvinces();
  }

  getProvinces() {
    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/provinces`).subscribe(
      (response: any[]) => {
        this.provinces = response;
      },
      (error) => {
        console.error('Error loading provinces:', error);
      }
    );
  }

  getAmphures() {
    if (this.selectedProvince) {
      this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/amphures/${this.selectedProvince}`).subscribe(
        (response: any[]) => {
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
    if (this.selectedAmphure) {
      this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/tambons/${this.selectedAmphure}`).subscribe(
        (response: any[]) => {
          this.tambons = response;
          this.selectedTambon = '';
        },
        (error) => {
          console.error('Error loading tambons:', error);
        }
      );
    }
  }

  searchStrayPets() {
    const params = {
      Ref_prov_id: this.selectedProvince,
      Ref_amphure_id: this.selectedAmphure,
      Ref_tambon_id: this.selectedTambon,
      village: this.village,
      landmark: this.landmark,
      house_number: this.houseNumber,
      alley: this.alley,
      road: this.road,
      postal_code: this.postalCode,
      informer_name: this.informerName
    };

    this.httpClient.get<any[]>(`${this.dataService.apiEndpoint}/search-stray-pets`, { params }).subscribe(
      (response: any[]) => {
        this.searchResults = response;
      },
      (error) => {
        console.error('Error searching stray pets:', error);
      }
    );
  }
}
