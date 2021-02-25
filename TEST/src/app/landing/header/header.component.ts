import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isCollapsed = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
  ) {
    this.userSub = new Subscription;
  }

  ngOnInit() {
    /* this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    }); */
  }

  onLogout() {
    /* this.authService.logout(); */
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
