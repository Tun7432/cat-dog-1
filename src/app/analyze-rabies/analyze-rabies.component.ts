import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DateFormatService } from '../date-format.service';

@Component({
  selector: 'app-analyze-rabies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyze-rabies.component.html',
  styleUrls: ['./analyze-rabies.component.scss']
})
export class AnalyzeRabiesComponent implements OnInit {
  surveyData: any = {};
  formattedDateRange: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private dataService: DataService,
    private dateFormatService: DateFormatService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const queryParams = {
        start_date: params['start_date'],
        end_date: params['end_date'],
        province: params['province'],
        amphure: params['amphure'],
        tambon: params['tambon'],
        village_number: params['village_number']
      };

      this.httpClient.get<any>(`${this.dataService.apiEndpoint}/rabies-analysis`, { params: queryParams }).subscribe(
        data => {
          this.surveyData = data || {};
          console.log('Fetched rabies data:', this.surveyData);
          
          // Format the date range using DateFormatService
          this.formattedDateRange = this.dateFormatService.formatDateRange(queryParams.start_date, queryParams.end_date);
        },
        error => console.error('Error fetching rabies data:', error)
      );
    });
  }
}
