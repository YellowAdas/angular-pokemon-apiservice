import { pokemonDetailFeatureKey, PokemonDetailState } from '../pokemon-detail/PokemonDetailStore/detailsReducers';
import {
  pokemonListFeatureKey,
  PokemonListState
} from '../pokemon-list/store/listReducers';

export interface AppState {
  [pokemonListFeatureKey]: PokemonListState;
  [pokemonDetailFeatureKey]: PokemonDetailState;
}
