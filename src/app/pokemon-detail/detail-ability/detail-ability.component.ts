import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AbilityProps } from '../../pokemon-details.model';
import { getAbilityProp } from '../PokemonDetailStore/detailsActions';
import { selectAbilityProp } from '../PokemonDetailStore/detailsReducers';

@Component({
  selector: 'app-detail-ability',
  templateUrl: './detail-ability.component.html',
  styleUrls: ['./detail-ability.component.css'],
})
export class DetailAbilityComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{}>
  ) {}

  paramsName = this.route.snapshot.params['name'];
  abilityProps$: Observable<AbilityProps> =
    this.store.select(selectAbilityProp);

  ngOnInit() {
    this.store.dispatch(getAbilityProp({ name: this.paramsName }));
  }
  goBackToList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  findEnglish(array: string[]) {
    return array.find((element) => element == 'en');
  }
}
