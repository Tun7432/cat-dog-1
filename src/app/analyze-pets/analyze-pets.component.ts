import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { DateFormatService } from '../date-format.service';

@Component({
  selector: 'app-analyze-pets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './analyze-pets.component.html',
  styleUrls: ['./analyze-pets.component.scss']
})
export class AnalyzePetsComponent implements OnInit {
  surveyData: any = {}; // Initialize as an empty object
  startDate: string = '';
  endDate: string = '';
  formattedDateRange: string = '';
  province: string = '';
  district: string = '';
  subDistrict: string = '';
  villageNumber: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private dataService: DataService,
    private dateFormatService: DateFormatService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.startDate = params['start_date'];
      this.endDate = params['end_date'];
      this.province = params['province'];
      this.district = params['district'];
      this.subDistrict = params['sub_district'];
      this.villageNumber = params['village_number'];

      this.fetchSurveyData();
    });
  }

  fetchSurveyData() {
    this.loading = true;
    this.error = '';

    this.httpClient.get<any>(`${this.dataService.apiEndpoint}/pet-analysis-report`, {
      params: {
        start_date: this.startDate,
        end_date: this.endDate,
        province: this.province,
        district: this.district,
        sub_district: this.subDistrict,
        village_number: this.villageNumber
      }
    }).subscribe(
      (response) => {
        this.surveyData = this.processSurveyData(response);
        console.log(this.surveyData);
        
        this.formattedDateRange = this.dateFormatService.formatDateRange(this.startDate, this.endDate);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching survey data:', error);
        this.error = 'Failed to load survey data. Please try again later.';
        this.loading = false;
      }
    );
  }

 processSurveyData(data: any): any {
    const result = {
      total_owner: 0,
      total_owners: 0,
        owned_dogs: 0,
        stray_dogs: 0,
        total_dogs: 0,
        neutered_dogs: 0,
        unneutered_dogs: 0,
        vaccinated_dogs: 0,
        vaccination_rate_dogs: 0,
        owned_cats: 0,
        stray_cats: 0,
        total_cats: 0,
        neutered_cats: 0,
        unneutered_cats: 0,
        vaccinated_cats: 0,
        vaccination_rate_cats: 0
    };

    data.forEach((item: any) => {
        if (item.pet_type === 'owned') {
            result.total_owner += 1;
            if (item.type === 'dog') {
                result.owned_dogs += 1;
                result.neutered_dogs += item.neutered ? 1 : 0;
                result.unneutered_dogs += item.neutered ? 0 : 1;
                result.vaccinated_dogs += item.rabies_vaccine ? 1 : 0;
            } else if (item.type === 'cat') {
                result.owned_cats += 1;
                result.neutered_cats += item.neutered ? 1 : 0;
                result.unneutered_cats += item.neutered ? 0 : 1;
                result.vaccinated_cats += item.rabies_vaccine ? 1 : 0;
            }
        } else if (item.pet_type === 'stray') {
            if (item.type === 'dog') {
                result.stray_dogs += 1;
            } else if (item.type === 'cat') {
                result.stray_cats += 1;
            }
        }
    });

    result.total_dogs = result.owned_dogs + result.stray_dogs;
   result.total_cats = result.owned_cats + result.stray_cats;
   result.total_owners = result.total_dogs + result.total_cats;
    result.vaccination_rate_dogs = result.owned_dogs ? (result.vaccinated_dogs / result.owned_dogs) * 100 : 0;
    result.vaccination_rate_cats = result.owned_cats ? (result.vaccinated_cats / result.owned_cats) * 100 : 0;

    return result;
}

}
