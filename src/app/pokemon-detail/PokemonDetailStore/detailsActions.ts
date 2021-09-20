import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from '../../pokemon-details.model';

export const getDetails = createAction('[fetch-detail] get details',
props<{ idOrName: number | string }>()
);

export const getDetailsSuccess = createAction('[fetch-detail] get details success',
props<{ pokemonDetails: PokemonDetails }>()
);
