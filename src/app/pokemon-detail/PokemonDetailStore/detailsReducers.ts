import { createReducer, on } from "@ngrx/store/src/reducer_creator";
import { PokemonDetailsAbility, PokemonType } from "../../pokemon-details.model";

export interface PokemonDetailState {
  pokemonDetail: {
    name : string;
    height: number;
    id: number;
    abilities: PokemonDetailsAbility[];
    sprites: {
      front_default: string;
      back_default: string;
    };
    types: PokemonType[];
  }
}

export const initialState: PokemonDetailState = {
  pokemonDetail: {
    name : 'default name',
    height: 0,
    id: 0,
    abilities: [],
    sprites: {
      front_default: 'default front',
      back_default: 'default back',
    },
    types: []
      }
    };

export const ListReducer = createReducer<PokemonDetailState>(
  initialState,
  on(actionName, (state, action) => ({ ...state, action.actionName }));

  export const pokemonDetailFeatureKey = 'PokemonDetail';