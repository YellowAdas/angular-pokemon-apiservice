import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { PokemonApiService } from '../../PokemonApiService/pokemon-api.service';
import { getAbilities, loadAbilitiesSuccess } from './abilities.actions';
import { selectPokemonAbilities } from './abilities.reducer';

@Injectable()
export class ListEffects {
  constructor(
    private pokemonApiService: PokemonApiService,
    private store: Store,
    private actions$: Action
  ) {}

  loadAbilityList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAbilities),
      switchMap(() => this.pokemonApiService.fetchAbilityList(99999)),
      switchMap((result) => {
        const resultRequests = result.results.map((ability) =>
          this.pokemonApiService.fetchAbility(ability.name)
        );
        return forkJoin(resultRequests);
      }),
      map((abilityProps) => loadAbilitiesSuccess({ abilityProps }))
    )
  );
}


