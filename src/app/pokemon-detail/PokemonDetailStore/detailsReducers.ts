import { createReducer, on } from "@ngrx/store/src/reducer_creator";
import { PokemonDetails, PokemonDetailsAbility, PokemonType } from "../../pokemon-details.model";
import { getDetails } from "../PokemonDetailStore/detailsActions";

export interface PokemonDetailState {
  pokemonDetail: PokemonDetails | null};
}

export const initialState: PokemonDetailState = {
  pokemonDetail: null
}

export const ListReducer = createReducer<PokemonDetailState>(
  initialState,
  on(getDetails, (state, action) => ({ ...state, pokemonDetail : action.getDetailsSuccess )));

  export const pokemonDetailFeatureKey = 'PokemonDetail';
 
  // onFetchDetails() {
  //   this.pokemonApiService
  //     .fetchDetails(this.paramsName)
  //     .subscribe(responseData => {
  //       this.pokemonDetails = responseData;
  //     });
  // }