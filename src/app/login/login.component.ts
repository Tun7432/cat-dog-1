import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {}

  login(username: string, password: string) {
    if (!username || !password) {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'กรุณากรอกอีเมลและรหัสผ่าน',
        icon: 'error',
        confirmButtonText: 'ตกลง',
      });
      return;
    }

    const loginData = { username, password };
    console.log(loginData);

    this.http
      .post(this.dataService.apiEndpoint + '/login', loginData)
      .subscribe(
        (response: any) => {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userData', JSON.stringify(response.user));
          Swal.fire({
            title: 'เข้าสู่ระบบสำเร็จ!',
            text: 'คุณได้ทำการเข้าสู่ระบบสำเร็จ',
            icon: 'success',
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#198b75',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });

          if (response && response.user) {
            const { role } = response.user;
            console.log(response);

            const userData = localStorage.getItem('userData');

            console.log('userData' + userData);

            if (role === 'admin') {
              this.router.navigate(['/RecordRegistration']);
            } else {
              this.router.navigate(['/']);
            }
          }
        },
        (error) => {
          console.error('Login failed:', error);
          Swal.fire({
            title: 'เกิดข้อผิดพลาด!',
            text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
            icon: 'error',
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#198b75',
          });
        }
      );
  }
}
