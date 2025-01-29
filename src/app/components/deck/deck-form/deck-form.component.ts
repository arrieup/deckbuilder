import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Deck } from 'src/app/models/deck.model';
import { Card } from 'src/app/models/card.model';
import { NgFor } from '@angular/common';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
  imports: [IonicModule, NgFor, ReactiveFormsModule]
})
export class DeckFormComponent implements OnInit {
  @Input() isEditMode: boolean = false;
  @Input() deck: Deck = { name: '', cards: [] };
  @Input() availableCards: Card[] = this.cardservice.getAllCards();

  deckForm!: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private cardservice: CardService) {}

  ngOnInit() {
    this.deckForm = this.fb.group({
      name: [this.deck.name || ''],
      descriptor: [''],
    });
  }

  addCard(cardId: number) {
    if (!this.deck.cards.includes(cardId)) {
      this.deck.cards.push(cardId);
    }
  }

  removeCard(cardId: number) {
    this.deck.cards = this.deck.cards.filter(id => id !== cardId);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.deckForm.valid) {
      const updatedDeck = {
        ...this.deck,
        name: this.deckForm.value.name,
      };
      this.modalCtrl.dismiss(updatedDeck);
    }
  }
  getCardById(cardId: number): Card | undefined {
    return this.cardservice.getAllCards().find(card => card.id === cardId);
  }
}
