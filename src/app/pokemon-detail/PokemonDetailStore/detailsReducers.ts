import { createReducer, on } from "@ngrx/store/src/reducer_creator";
import { PokemonDetails}   from "../../pokemon-details.model";
import { getDetails, getDetailsSuccess } from "../PokemonDetailStore/detailsActions";

export interface PokemonDetailState {
  pokemonDetails: PokemonDetails | null
};


export const initialState: PokemonDetailState = {
  pokemonDetails: null
}

export const ListReducer = createReducer<PokemonDetailState>(
  initialState,
  on(getDetailsSuccess, (state, action) => ({ ...state, pokemonDetails : action.pokemonDetails} ) ));

  export const pokemonDetailFeatureKey = 'PokemonDetail';

  export const selectDetails = (state: PokemonDetailState) => state.pokemonDetails;


 
  // onFetchDetails() {
  //   this.pokemonApiService
  //     .fetchDetails(this.paramsName)
  //     .subscribe(responseData => {
  //       this.pokemonDetails = responseData;
  //     });
  // }