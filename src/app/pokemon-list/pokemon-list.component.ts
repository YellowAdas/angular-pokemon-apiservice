import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { Subject, switchMap, Observable, tap } from 'rxjs';

import {
  PokemonApiService,
  PokemonListResult
} from '../PokemonApiService/pokemon-api.service';
import { PokemonListItem } from '../pokemon-list-item.model';
import { Store, select } from '@ngrx/store';
import { getList, setPagination, toggleFavs, initFavs  } from './store/listActions';
import {
  selectPokemonListItems,
  selectPokemonListPagination,
  selectFav
} from './store/listReducers';
import { PokemonDetails } from '../pokemon-details.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  items$: Observable<PokemonDetails[]> = this.store.pipe(
    select(selectPokemonListItems)
  );

  pagination$ = this.store.pipe(select(selectPokemonListPagination));
  favorites$ = this.store.pipe(select(selectFav));
  favoritesPokemons = new Set<number>();

  constructor(
    private pokemonApiService: PokemonApiService,
    private store: Store<{}>
  ) {}

  totalCount: number;
  pageSize: number = 20;
  currentPage = 0;
  toggleList = true;

  pokemonListItemFetchRequest$ = new Subject<{
    limit: number;
    offset: number;
  }>();

  pokemonListResult$: Observable<
    PokemonListResult
  > = this.pokemonListItemFetchRequest$.pipe(
    switchMap(fetchRequest => {
      return this.pokemonApiService.fetchList(
        fetchRequest.limit,
        fetchRequest.offset
      );
    })
  );
  pokemonListItem: PokemonListItem[] = [];

  ngOnInit() {
    this.store.dispatch(getList());
    this.pokemonListResult$.subscribe(responseData => {
      this.pokemonListItem = responseData.results;
      this.totalCount = responseData.count;
    });
    this.store.dispatch(initFavs());
  }

  onFetch() {
    const offset = this.currentPage * this.pageSize;
    this.pokemonListItemFetchRequest$.next({
      offset,
      limit: this.pageSize
    });
  }

  onPageChange(event: PageEvent) {
    this.store.dispatch(
      setPagination({ currentPage: event.pageIndex, limit: event.pageSize })
    );
  }

  onFetchtest() {
    this.toggleList= !this.toggleList;
    const offset = this.currentPage * this.pageSize;
    this.pokemonListItemFetchRequest$.next({
      offset,
      limit: this.pageSize
    });
  }

  // już tłumaczę - tutaj oczekujesz stringa  - type name, ale zapomniałeś że tam jest jeszcze type po drodze czyli zamiast item.types.0.name trzeba było item.types[0].type.name - zauważ też że dałem [0]. zamiast .0. bo tak się przechodzi do pierwszego (zerowego indexu) elementu tablicy
  // zadanie przerob funkcje setColorByType na pipe i poczytaj czemu są lepsze - pure function / mnemonification
  //https://angular.io/guide/pipes
  //https://indepth.dev/posts/1061/the-essential-difference-between-pure-and-impure-pipes-in-angular-and-why-that-matters
  //https://www.youtube.com/watch?v=I6ZvpdRM1eQ


  // Wersja na localStorage bez Store
  // onFavClick(id: number) {
  //   if (!this.favoritesPokemons.has(id)) {
  //     this.favoritesPokemons.add(id);
  //     localStorage.setItem('Favorites',JSON.stringify([...this.favoritesPokemons]));
  //   } else {
  //     this.favoritesPokemons.delete(id);
  //   }

  // Wersja na localStorage wraz z Store

  
  onFavClick(id: number) {
    this.store.dispatch(toggleFavs({id}))
    // localStorage.setItem('Favorites',)
  }

  checkSet() {
    // console.log([...this.favoritesPokemons]);
    
  }


}



