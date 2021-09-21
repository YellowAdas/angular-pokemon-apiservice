import { createReducer, on, createFeatureSelector,
  createSelector } from '@ngrx/store';
import { PokemonDetails } from '../../pokemon-details.model';
import { AppState } from '../../state/state';
import { getDetailsSuccess } from '../PokemonDetailStore/detailsActions';

export interface PokemonDetailState {
  pokemonDetails: PokemonDetails | null;
  abilityDesc : string;
}

export const initialState: PokemonDetailState = {
  pokemonDetails: null,
  abilityDesc : ''
};

export const DetailsReducer = createReducer<PokemonDetailState>(
  initialState,
  on(getDetailsSuccess, (state, action) => ({
    ...state,
    pokemonDetails: action.pokemonDetails,
  }))
);

export const pokemonDetailFeatureKey = 'PokemonDetail';

export const selectPokemonDetailsState = createFeatureSelector<
  AppState,
  PokemonDetailState
>(pokemonDetailFeatureKey);

export const selectDetails = createSelector(
  selectPokemonDetailsState,
  (state) => state.pokemonDetails
);

// onFetchDetails() {
//   this.pokemonApiService
//     .fetchDetails(this.paramsName)
//     .subscribe(responseData => {
//       this.pokemonDetails = responseData;
//     });
// }
