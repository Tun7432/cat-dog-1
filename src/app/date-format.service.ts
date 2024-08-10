import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFormatService {
  private months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  formatThaiDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear() + 543; // Thai Buddhist year

    return `${day} ${month} ${year}`;
  }

  formatDateRange(startDate: string, endDate: string): string {
    const start = this.formatThaiDate(startDate);
    const end = this.formatThaiDate(endDate);
    return `วันที่ ${start} - ${end}`;
  }
}
