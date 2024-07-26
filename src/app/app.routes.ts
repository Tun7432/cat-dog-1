import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecordRegistrationComponent } from './record-registration/record-registration.component';
import { RegistrationOwnerComponent } from './registration-owner/registration-owner.component';
import { RegistrationAddressComponent } from './registration-address/registration-address.component';
import { RegistrationPetsComponent } from './registration-pets/registration-pets.component';
import { HistoryRegistrationComponent } from './history-registration/history-registration.component';
import { HistoryOwnerComponent } from './history-owner/history-owner.component';
import { HistoryRegistrationPetsComponent } from './history-registration-pets/history-registration-pets.component';
import { HistoryPetsManageComponent } from './history-pets-manage/history-pets-manage.component';
import { RegistrationStrayComponent } from './registration-stray/registration-stray.component';
import { HistoryStrayComponent } from './history-stray/history-stray.component';
import { HistoryInformerComponent } from './history-informer/history-informer.component';
import { HistoryRegistrationStrayComponent } from './history-registration-stray/history-registration-stray.component';
import { HistoryStrayManageComponent } from './history-stray-manage/history-stray-manage.component';
import { RecordRabiesComponent } from './record-rabies/record-rabies.component';
import { RecordRabiesSickComponent } from './record-rabies-sick/record-rabies-sick.component';
import { HistoryRabiesComponent } from './history-rabies/history-rabies.component';
import { HistoryRegistrationRabiesComponent } from './history-registration-rabies/history-registration-rabies.component';
import { HistoryRabiesManageComponent } from './history-rabies-manage/history-rabies-manage.component';
import { AnalyzeSearchOwnerComponent } from './analyze-search-owner/analyze-search-owner.component';
import { AnalyzeOwnerComponent } from './analyze-owner/analyze-owner.component';
import { InformationAreaComponent } from './information-area/information-area.component';
import { InformationDetailComponent } from './information-detail/information-detail.component';
import { InformationOwnerComponent } from './information-owner/information-owner.component';
import { InformationPetsComponent } from './information-pets/information-pets.component';
import { InformationPetsManageComponent } from './information-pets-manage/information-pets-manage.component';
import { AnalyzeSearchPetsComponent } from './analyze-search-pets/analyze-search-pets.component';
import { AnalyzePetsComponent } from './analyze-pets/analyze-pets.component';
import { AnalyzeSearchRabiesComponent } from './analyze-search-rabies/analyze-search-rabies.component';
import { AnalyzeRabiesComponent } from './analyze-rabies/analyze-rabies.component';
import { InformationGeographicComponent } from './information-geographic/information-geographic.component';
export const routes: Routes = [
    {'path': '', component: LoginComponent},
    {'path': 'login', component: LoginComponent},
    {'path': 'RecordRegistration', component: RecordRegistrationComponent},
    {'path': 'RegistrationOwner', component: RegistrationOwnerComponent},
    {'path': 'RegistrationAddress', component: RegistrationAddressComponent},
    {'path': 'RegistrationPets', component: RegistrationPetsComponent},
    {'path': 'HistoryRegistration', component: HistoryRegistrationComponent},
    {'path': 'HistoryOwnerComponent', component: HistoryOwnerComponent},
    {'path': 'HistoryPetsManage', component: HistoryPetsManageComponent},
    {'path': 'RegistrationStray', component: RegistrationStrayComponent},
    {'path': 'HistoryStray', component: HistoryStrayComponent},
    {'path': 'HistoryInformer', component: HistoryInformerComponent},
    {'path': 'HistoryRegistrationStray', component: HistoryRegistrationStrayComponent},
    {'path': 'HistoryRegistrationPets', component: HistoryRegistrationPetsComponent},
    {'path': 'HistoryStrayManage', component: HistoryStrayManageComponent},
    {'path': 'RecordRabies', component: RecordRabiesComponent},
    {'path': 'RecordRabiesSick', component: RecordRabiesSickComponent},
    {'path': 'HistoryRabies', component: HistoryRabiesComponent},
    {'path': 'HistoryRegistrationRabies', component: HistoryRegistrationRabiesComponent},
    {'path': 'HistoryRabiesManage', component: HistoryRabiesManageComponent},
    {'path': 'AnalyzeSearchOwner', component: AnalyzeSearchOwnerComponent},
    {'path': 'AnalyzeOwner', component: AnalyzeOwnerComponent},
    {'path': 'InformationArea', component: InformationAreaComponent},
    {'path': 'InformationDetail', component: InformationDetailComponent},
    {'path': 'InformationOwner', component: InformationOwnerComponent},
    {'path': 'InformationPets', component: InformationPetsComponent},
    {'path': 'InformationPetsManage', component: InformationPetsManageComponent},
    {'path': 'AnalyzeSearchPets', component: AnalyzeSearchPetsComponent},
    {'path': 'AnalyzePets', component: AnalyzePetsComponent},
    {'path': 'AnalyzeSearchRabies', component: AnalyzeSearchRabiesComponent},
    {'path': 'AnalyzeRabies', component: AnalyzeRabiesComponent},
    {'path': 'InformationGeographic', component: InformationGeographicComponent},
];
