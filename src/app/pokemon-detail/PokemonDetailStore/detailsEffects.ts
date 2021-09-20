import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects/src';
import { ofType } from '@ngrx/effects/src/actions';
import { createEffect } from '@ngrx/effects/src/effect_creator';
import { Store } from '@ngrx/store/src';
import { map, switchMap } from 'rxjs/operators';
import { PokemonApiService } from '../../PokemonApiService/pokemon-api.service';
import { getDetails , getDetailsSuccess } from '../PokemonDetailStore/detailsActions';

@Injectable()
export class ListEffects {
  constructor(
    private store: Store,
    private pokemonApiService: PokemonApiService,
    private actions$: Actions
  ) {}

  getDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDetails),
      switchMap((action) => this.pokemonApiService.fetchDetails(action.id)),
      map( (pokemonDetails) => getDetailsSuccess({ pokemonDetails }) )
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
