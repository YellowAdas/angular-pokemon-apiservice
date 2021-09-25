import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { AbilityProps } from '../../pokemon-details.model';
import * as AbilitiesActions from './abilities.actions';

export interface PokemonAbilitiesState {
  abilityProps : AbilityProps;
}

export interface State extends EntityState<AbilityProps> {
  // additional state property
  isLoaded: boolean;
}

export const adapter: EntityAdapter<AbilityProps> =
  createEntityAdapter<AbilityProps>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  isLoaded: false,
});

export const userReducer = createReducer(
  initialState,
  on(AbilitiesActions.loadAbilitiesSuccess, (state, { abilityProps }) => {
    return adapter.setAll(abilityProps, {...state, isLoaded : true});
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const pokemonAbilitiesFatureKey = 'PokemonAbilities';
