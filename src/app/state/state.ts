import {
  pokemonDetailFeatureKey,
  PokemonDetailState,
} from '../pokemon-detail/PokemonDetailStore/detailsReducers';
import {
  pokemonListFeatureKey,
  PokemonListState,
} from '../pokemon-list/store/listReducers';

import { pokemonAbilitiesFatureKey, PokemonAbilitiesState } from './abilities/abilities.reducer';

export interface AppState {
  [pokemonListFeatureKey]: PokemonListState;
  [pokemonDetailFeatureKey]: PokemonDetailState;
  [pokemonAbilitiesFatureKey]: PokemonAbilitiesState;
}
