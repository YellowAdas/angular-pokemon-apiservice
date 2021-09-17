import { act } from '@ngrx/effects/src/act';
import {
  createFeatureSelector,
  createReducer,
  on,
  createSelector,
} from '@ngrx/store';
import { PokemonDetails } from '../../pokemon-details.model';
import { AppState } from '../../state/state';
import { errorList, loadList, setFavs, setPagination, toggleFavs } from './listActions';

export interface State {
  list: { pokemonList: PokemonDetails[]; error: string };
  pagination: {
    currentPage: number;
    limit: number;
    totalCount: number;
  };
  favorites: number[];
}

export const initialState: State = {
  list: { pokemonList: [], error: '' },
  pagination: {
    currentPage: 0,
    limit: 5,
    totalCount: 0,
  },
  favorites: [],
};

export const ListReducer = createReducer<State>(
  initialState,
  on(loadList, (state, action) => ({
    ...state,
    list: { pokemonList: action.pokemonListItems, error: '' },
    pagination: {
      ...state.pagination,
      totalCount: action.totalCount,
    },
  })),
  on(errorList, (state, action) => ({
    ...state,
    list: { pokemonList: [], error: action.message },
  })),
  on(setPagination, (state, action) => ({
    ...state,
    pagination: {
      ...state.pagination,
      currentPage: action.currentPage,
      limit: action.limit,
    },
  })),
  on(toggleFavs, (state, action) => {
    const favoritesPokemons = new Set<number>(state.favorites);
    const id = action.id;
    if (!favoritesPokemons.has(id)) {
      favoritesPokemons.add(id);
    } else {
      favoritesPokemons.delete(id);
    }
    return { ...state, favorites: [...favoritesPokemons] };
  }),
  on(setFavs, (state, action) => ({
    ...state,
    favorites : action.favorites
  })
  )
);

export const pokemonListFeatureKey = 'PokemonList';

export const selectItems = (state: State) => state.list.pokemonList;

export const selectError = (state: State) => state.list.error;

export const _selectFav = (state: State) => state.favorites;

export const selectPokemonListState = createFeatureSelector<AppState, State>(
  pokemonListFeatureKey
);

export const selectPokemonListItems = createSelector(
  selectPokemonListState,
  selectItems
  // (state) => state.list.pokemonList.map(detail => ({...detail, favorite: state.favorites.includes(detail.id)}))
);

export const selectPokemonListPagination = createSelector(
  selectPokemonListState,
  (state) => state.pagination
);

export const selectFav = createSelector(
  selectPokemonListState,
  _selectFav
);
