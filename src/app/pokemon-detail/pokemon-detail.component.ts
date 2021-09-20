import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  

  ngOnInit() {}

  pokemonDetails$: Observable<PokemonDetails>;


  goBackToList() {
    this.router.navigate(['']);
  }
}
