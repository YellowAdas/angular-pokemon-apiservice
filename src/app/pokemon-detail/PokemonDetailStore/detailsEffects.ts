import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { PokemonApiService } from '../../PokemonApiService/pokemon-api.service';
import {
  getDetails,
  getDetailsSuccess,
} from '../PokemonDetailStore/detailsActions';

@Injectable()
export class DetailsEffects {
  constructor(
    private pokemonApiService: PokemonApiService,
    private actions$: Actions
  ) {}

  getDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDetails),
      switchMap((action) => this.pokemonApiService.fetchDetails(action.idOrName)),
      map((pokemonDetails) => getDetailsSuccess({ pokemonDetails }))
    )
  );
}

// onFetchDetails() {
//   this.pokemonApiService
//     .fetchDetails(this.paramsName)
//     .subscribe(responseData => {
//       this.pokemonDetails = responseData;
//     });
// }
