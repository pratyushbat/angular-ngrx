import { createAction, props, } from "@ngrx/store";
import { Grocery } from "../models/grocery";

export const requestGrocery = createAction(
    '[Grocery] Request API'    
)

export const successGrocery = createAction(
    '[Grocery] Success API',  
    props<{payload:{"groceries":Grocery[]} }>()
)


// createActionGroup()