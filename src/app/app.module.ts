import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {
  ListReducer,
  pokemonListFeatureKey
} from './pokemon-list/store/listReducers';
import { ListEffects } from './pokemon-list/store/listEffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PokemonTypeToColorPipe } from './pokemon-type-to-color.pipe';
import { DetailsEffects } from './pokemon-detail/PokemonDetailStore/detailsEffects';
import { DetailsReducer, pokemonDetailFeatureKey } from './pokemon-detail/PokemonDetailStore/detailsReducers';

const appRoutes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemonDetail/:name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ [pokemonListFeatureKey]: ListReducer , }, {}),
    EffectsModule.forRoot([ListEffects, DetailsEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent, PokemonTypeToColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
