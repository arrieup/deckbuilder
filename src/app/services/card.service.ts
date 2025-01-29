import { Injectable } from '@angular/core';
import { Data } from '../repository';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }


  createCard(card: Card){
    card.id = Data.Cards.length;
    Data.Cards.push(card);
  }

  readCard(id: number) : Card{
    return Data.Cards[id];
  }
  updateCard(card: Card) {
    Data.Cards[card.id] = card;
  }

  getAllCards() : Card[]{
    return Data.Cards;
  }


  

}
