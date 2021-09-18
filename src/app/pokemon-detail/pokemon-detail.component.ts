import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetails } from '../pokemon-details.model';
import {PokemonApiService} from '../PokemonApiService/pokemon-api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private pokemonApiService: PokemonApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  paramsName = this.route.snapshot.params['name'];

  ngOnInit() {this.onFetchDetails();}

  pokemonDetails: PokemonDetails | null = null;

  onFetchDetails() {
    this.pokemonApiService
      .fetchDetails(this.paramsName)
      .subscribe(responseData => {
        this.pokemonDetails = responseData;
      });
  }

  goBackToList() {
    this.router.navigate(['']);
  }
}
