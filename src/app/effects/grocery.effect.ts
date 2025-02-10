import { inject } from "@angular/core";
import { GroceryService } from "../services/grocery.service";
// import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap } from "rxjs/operators";
import { pipe } from "rxjs";
export class MoviesEffects {
    // constructor(private actions$:Actions,private groceryService:GroceryService){}

  
    // loadMovies$ = createEffect(() => {
    //   return this.actions$.pipe(
    //       ofType('[Movies Page] Load Movies'),
    //       exhaustMap(() => this.groceryService.getAlGrocery();
    //         .pipe(
    //           map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    //           catchError(() => EMPTY)
    //         ))
    //   );
    // });
  }