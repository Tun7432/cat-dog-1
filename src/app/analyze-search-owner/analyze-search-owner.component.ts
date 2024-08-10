import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-analyze-search-owner',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './analyze-search-owner.component.html',
  styleUrls: ['./analyze-search-owner.component.scss']
})
export class AnalyzeSearchOwnerComponent implements OnInit {
  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';
  startDate: string = '';
  endDate: string = '';
  village_number: string = '';

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

  search() {
    const queryParams = {
      start_date: this.startDate,
      end_date: this.endDate,
      province: this.selectedProvince,
      district: this.selectedAmphure,
      sub_district: this.selectedTambon,
      village: this.village_number
    };
    this.router.navigate(['/AnalyzeOwner'], { queryParams });
  }
}
