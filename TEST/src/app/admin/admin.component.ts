import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuItems: any;

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      { title: 'Accounting', icon: 'calculator', path: 'admin/home/0' },
      { title: 'Contacts', icon: '', path: 'admin/home/1' },
      { title: 'Credentials', icon: '', path: 'admin/home/2' },
      { title: 'Documents', icon: '', path: 'admin/home/6' },
      { title: 'Knowledge Base', icon: '', path: 'admin/home/3' },
      { title: 'Marketing', icon: '', path: 'admin/home/4' },
      { title: 'Messaging', icon: '', path: 'admin/home/5' },
      /* { title: 'Users', icon: '', path: 'admin/home/7' }, */
      /* { title: 'Passwords', icon: '', path: 'admin/home/8' }, */
      { title: 'Servers', icon: '', path: 'admin/home/9' },
    ]
  }

}
