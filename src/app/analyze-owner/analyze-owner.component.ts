import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { DateFormatService } from '../date-format.service';
import { Report } from '../model/report.model';

@Component({
  selector: 'app-analyze-owner',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './analyze-owner.component.html',
  styleUrls: ['./analyze-owner.component.scss']
})
export class AnalyzeOwnerComponent implements OnInit {
  reportData: any = {};
  startDate: string | null = null;
  endDate: string | null = null;
  province: string | null = null;
  district: string | null = null;
  subDistrict: string | null = null;
  village: string | null = null;
  formattedDateRange: string = '';

  constructor(private http: HttpClient, private dataService: DataService,private route: ActivatedRoute,private dateFormatService: DateFormatService) {}

 ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.startDate = params['start_date'];
      this.endDate = params['end_date'];
      this.province = params['province'];
      this.district = params['district'];
      this.subDistrict = params['sub_district'];
      this.village = params['village'];

      this.fetchReportData();
    });
  }

  fetchReportData() {
    let params = new HttpParams();
    if (this.startDate) params = params.set('start_date', this.startDate);
    if (this.endDate) params = params.set('end_date', this.endDate);
    if (this.province) params = params.set('province', this.province);
    if (this.district) params = params.set('district', this.district);
    if (this.subDistrict) params = params.set('sub_district', this.subDistrict);
    if (this.village) params = params.set('village_number', this.village);

    this.http.get<Report[]>(`${this.dataService.apiEndpoint}/report`, { params })
      .subscribe({
        next: (data: Report[]) => {
          if (data.length > 0) {
            this.reportData = data[0];
            this.formattedDateRange = this.dateFormatService.formatDateRange(this.startDate || '', this.endDate || '');
          } else {
            this.reportData = {}; // Handle empty data response
          }
        },
        error: (err) => {
          console.error('Error fetching report data:', err);
          // Handle error gracefully
          this.reportData = {}; // Clear data or set an error message
        }
      });
  }
}
