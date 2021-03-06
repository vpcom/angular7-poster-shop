import {Action} from '@ngrx/store';

import { PosterType, emptyPoster } from '../shared/model/poster.type';

export interface CartState {
  cartContent: PosterType[];
}
  
// TODO enum
export const ADD = 'ADD';

export function cartReducer(state: PosterType[] = [], action) {
  switch (action.type) {

    case ADD:
      return [...state, action.payload];
      
    default:
      return state;
  }
}