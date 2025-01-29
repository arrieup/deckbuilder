import { Injectable } from '@angular/core';
import { Deck } from '../models/deck.model';
import { Data } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }
  
  readDeck(id: number) : Deck{
      return Data.Decks[id];
  }

  getAllDecks() : Deck[]{
    return Data.Decks;
  }
}
