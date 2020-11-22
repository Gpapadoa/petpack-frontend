import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

<<<<<<< HEAD
// For search Bar
=======
// import { AuthService } from 'auth';


/*import { LoggingService, Config } from 'loggerservice';*/


//Search Bar
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { element } from 'protractor';

export interface Username {
  username: string;
}
//End Search Bar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

<<<<<<< HEAD
  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = '/';
=======
  //Search Bar {{option.name}}

  //End Search Bar

  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = '/';
    
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071

  constructor(private router: Router, private authService: AuthService) {

    this.router.events.subscribe( (event) => {

      if (event instanceof NavigationEnd) {

        this.returnUrl = event.url;

        //this.logger.info('NavbarComponent returnUrl: ' + this.returnUrl);
      }

    } );

  }
<<<<<<< HEAD

  //Settings for Search Bar
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
  myControl = new FormControl();
  options: Username[] = this.authService.getUsernames();
  filteredOptions: Observable<Username[]>;

<<<<<<< HEAD
  //Profile
  public onHome() {

    this.router.navigate(['../feed-page']);
  }

  //Profile
  public onProfile() {

    this.router.navigate(['../profile']);
  }

  //Logout
=======
  public onProfile() {

    this.router.navigate(['users/profile']);
  }

>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
  public logout() {

    this.authService.logout();
  }

<<<<<<< HEAD
  //Settings
  public settings(){
    this.router.navigate(['../settings']);
  }


  //Search Bar

=======
  public settings(){
    // this.settings.....kati
  }

>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
  display = false;
  onPress() {
    this.display = true;
  }

<<<<<<< HEAD
=======
  //Search Bar
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
  ngOnInit(): void {
    console.log(this.options);
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

  displayFn(user: Username): string {
    return user && user.username ? user.username : ''; //User.ts
  }

  private _filter(name: string): Username[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.username.toLowerCase().indexOf(filterValue) === 0);
  }
  //End Search Bar

}