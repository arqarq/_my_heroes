import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {
  }

  anuluj() {
    this.router.navigate(['choose']);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_image');
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
  }
}
