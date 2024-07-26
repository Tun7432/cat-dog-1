import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// import { LoginComponent } from './login/login.component';
// import { RecordRegistrationComponent } from './record-registration/record-registration.component';
// import { RegistrationOwnerComponent } from './registration-owner/registration-owner.component';
// import { RegistrationAddressComponent } from './registration-address/registration-address.component';
// import { RegistrationPetsComponent } from './registration-pets/registration-pets.component';
// import { HistoryRegistrationComponent } from './history-registration/history-registration.component';
// import { HistoryOwnerComponent } from './history-owner/history-owner.component';
// import { HistoryPetsManageComponent } from './history-pets-manage/history-pets-manage.component';
// import { RegistrationStrayComponent } from './registration-stray/registration-stray.component';
// import { HistoryStrayComponent } from './history-stray/history-stray.component';
// import { HistoryRegistrationStrayComponent } from './history-registration-stray/history-registration-stray.component';
// import { HistoryRegistrationPetsComponent } from './history-registration-pets/history-registration-pets.component';
// import { HistoryStrayManageComponent } from './history-stray-manage/history-stray-manage.component';
// import { RecordRabiesComponent } from './record-rabies/record-rabies.component';
// import { RecordRabiesSickComponent } from './record-rabies-sick/record-rabies-sick.component';
// import { HistoryRabiesComponent } from './history-rabies/history-rabies.component';
// import { HistoryRegistrationRabiesComponent } from './history-registration-rabies/history-registration-rabies.component';
// import { HistoryRabiesManageComponent } from './history-rabies-manage/history-rabies-manage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    // LoginComponent,
    // RecordRegistrationComponent,
    // RegistrationOwnerComponent,
    // RegistrationAddressComponent,
    // RegistrationPetsComponent,
    // HistoryRegistrationComponent,
    // HistoryOwnerComponent,
    // HistoryPetsManageComponent,
    // RegistrationStrayComponent,
    // HistoryStrayComponent,
    // HistoryRegistrationStrayComponent,
    // HistoryRegistrationPetsComponent,
    // HistoryStrayManageComponent,
    // RecordRabiesComponent,
    // RecordRabiesSickComponent,
    // HistoryRabiesComponent,
    // HistoryRegistrationRabiesComponent,
    // HistoryRabiesManageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dog_and_Cat';
}
