import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history-owner',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './history-owner.component.html',
  styleUrls: ['./history-owner.component.scss']
})
export class HistoryOwnerComponent implements OnInit {

  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';

  constructor(
    private dataService: DataService,
    private httpClient: HttpClient
  ) { }

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
}