import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {HttpResponse} from '@angular/common/http';
import {AngularAppServiceService} from '../../assets/services/angular-app-service.service';
// tslint:disable-next-line:import-blacklist
import {FilterPipePipe} from '../../assets/customPipes/filter-pipe.pipe';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   FirstName: string;
   Genders: Array<string> = ['Male', 'Female', 'Others'];
   RForm: FormGroup;
   Countries: Array<object>;
   // tslint:disable-next-line:no-inferrable-types
   AboutYourSelf: string = '';
  constructor(private AngularHttpService: AngularAppServiceService) { }
  ngOnInit() {
  const Url = 'https://restcountries.eu/rest/v2/all';  
  this.AngularHttpService.GetCountries(Url).subscribe((response: HttpResponse<Array<object>>) => {
   if (response !== undefined && response !== null) {
    const ResponseBody = response['body'];
    this.Countries = ResponseBody;
    console.log(this.Countries);
   }
  });
  this.RForm = new FormGroup({
    'RFormControls': new FormGroup({
      'FName': new FormControl(null, [Validators.required]),
      'LName': new FormControl(null, [Validators.required]),
      'EmailAddress': new FormControl(null, [Validators.required, Validators.email]),
      'Gender': new FormControl(null, [Validators.required]),
      'CountryName': new FormControl(null, [Validators.required]),
      'DOB': new FormControl(null, [Validators.required]),
      'CompanyName': new FormControl(null, [Validators.required]),
      'AboutYou': new FormControl(null, [Validators.required, Validators.minLength(150), Validators.maxLength(255)]),
      'Terms': new FormControl(null, [Validators.required])
    })
  });
  }


  GenderSelected($event) {
    console.log($event);
  } 

}
