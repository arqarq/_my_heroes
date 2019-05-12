import { Component } from '@angular/core';
import { navigationExtras } from '../auth.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  defaultQueryParams = navigationExtras.queryParams;
  defaultFragment = navigationExtras.fragment;
}
