import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-record-rabies-sick',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './record-rabies-sick.component.html',
  styleUrls: ['./record-rabies-sick.component.scss']
})
export class RecordRabiesSickComponent implements OnInit {

  provinces: any[] = [];
  amphures: any[] = [];
  tambons: any[] = [];
  selectedProvince: string = '';
  selectedAmphure: string = '';
  selectedTambon: string = '';
  postalCode: string = '';

  constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
    private cdr: ChangeDetectorRef
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
          console.log(this.tambons);
          console.log(JSON.stringify(response));
          
        },
        (error) => {
          console.error('Error loading tambons:', error);
        }
      );
    }
  }

  onTambonChange() {
    const selectedTambonObj = this.tambons.find(tambon => tambon.id === this.selectedTambon);
    console.log('Selected Tambon:', selectedTambonObj);
    if (selectedTambonObj) {
      this.postalCode = selectedTambonObj.zip_code;
      console.log('Postal Code:', this.postalCode);
      this.cdr.detectChanges();
    }
  }

}
