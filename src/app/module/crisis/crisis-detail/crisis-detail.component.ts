import { Component, OnInit } from '@angular/core';
import { Crisis } from '../../../model/crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisService } from '../../../service/crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  private editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) {
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : undefined;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(
      ['../', {id: crisisId, foo: 'fighters'}],
      {relativeTo: this.route}
    );
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.crisisService.getHero(+id).subscribe(crisis => {
      this.crisis = crisis;
      this.editName = crisis.name;
    });
    // this.route.data
    //   .subscribe((data: { crisis: Crisis }) => {
    //     this.editName = data.crisis.name;
    //     this.crisis = data.crisis;
    //   });
  }
}
