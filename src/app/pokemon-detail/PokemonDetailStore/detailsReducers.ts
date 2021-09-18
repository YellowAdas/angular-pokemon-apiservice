import { createReducer } from "@ngrx/store/src/reducer_creator";
import { PokemonDetailsAbility, PokemonType } from "../../pokemon-details.model";

export interface State {
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

export const initialState: State = {
  pokemonDetail: {
    name : 'default name',
    height: 0,
    id: 0,
    abilities: { 
      ability: {
        name : 'default punch',
        url: 'default url'},
      slot: 0
    },
    sprites: {
      front_default: 'default front',
      back_default: 'default back',
    },
    types: {
      type: {
        name: 'default type name',
        url: 'default type url'},
      slot: 0
      }
    };
  }
}

export const initialState: State = {
  list: { pokemonList: [], error: '' },
  pagination: {
    currentPage: 0,
    limit: 5,
    totalCount: 0,
  },
  favorites: [],
  isLoading: false,
};

export const ListReducer = createReducer<State>(
  initialState,
  on(getList, (state, action) => ({ ...state, isLoading: true })),



  name: string;
  height: number;
  id: number;
  abilities: PokemonDetailsAbility[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: PokemonType[];
}

ability: {
  name: string;
  url: string;
};
is_hidden: boolean;
slot: number;

type: {
  name:string;
  url:string;
};
slot: number;