import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonDetails } from '../pokemon-details.model';
import { getDetails } from './PokemonDetailStore/detailsActions';
import { selectDetails } from './PokemonDetailStore/detailsReducers';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{}>
  ) {}

  paramsName = this.route.snapshot.params['name'];
  

  ngOnInit() { this.store.dispatch( getDetails(this.paramsName) )}

  pokemonDetails$: Observable<PokemonDetails> = this.store.select(selectDetails);


  goBackToList() {
    this.router.navigate(['']);
  }
}
