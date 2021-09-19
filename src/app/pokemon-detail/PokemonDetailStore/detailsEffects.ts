import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects/src";
import { Store } from "@ngrx/store/src";

@Injectable()
export class ListEffects {
  constructor(
    private store: Store,
    private actions$: Actions
  ) {}                                                                                                      
}