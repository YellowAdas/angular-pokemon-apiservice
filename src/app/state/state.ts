import { pokemonDetailFeatureKey } from '../pokemon-detail/PokemonDetailStore/detailsReducers';
import {
  pokemonListFeatureKey,
  State
} from '../pokemon-list/store/listReducers';

export interface AppState {
  [pokemonListFeatureKey]: State;
  [pokemonDetailFeatureKey]: State;
}
