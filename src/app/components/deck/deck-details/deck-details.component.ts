import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {IonicModule, ModalController } from '@ionic/angular';
import { Card } from 'src/app/models/card.model';
import { Deck } from 'src/app/models/deck.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss'],
  imports:[IonicModule, NgFor],
  standalone: true,
})
export class DeckDetailsComponent {
  @Input() deck!: Deck;

  constructor(private modalCtrl: ModalController, private cardservice: CardService) {}
  close() {
    this.modalCtrl.dismiss();
  }
  
  getCardById(cardId: number): Card | undefined {
    return this.cardservice.getAllCards().find(card => card.id === cardId);
  }
}