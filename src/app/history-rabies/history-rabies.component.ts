import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-rabies',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './history-rabies.component.html',
  styleUrls: ['./history-rabies.component.scss']
})
export class HistoryRabiesComponent implements OnInit {
  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';

  constructor(private dataService: DataService, private httpClient: HttpClient) {}

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
}