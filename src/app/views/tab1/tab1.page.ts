import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Deck } from '../../models/deck.model';
import { DeckService } from 'src/app/services/deck.service';
import { NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { DeckFormComponent } from 'src/app/components/deck/deck-form/deck-form.component';
import { DeckComponent } from 'src/app/components/deck/deck-item/deck-item.component';
import { DeckDetailsComponent } from 'src/app/components/deck/deck-details/deck-details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule,DeckComponent, NgFor],
  standalone:true
})
export class Tab1Page {
  decks : Deck[] = [];

  constructor(private deckservice : DeckService, private modalCtrl : ModalController ) {
    addIcons({add})
  }
  
  ngOnInit(): void {
    this.decks = this.deckservice.getAllDecks();
  }
  async openCreateModal() {
      const modal = await this.modalCtrl.create({
        component: DeckFormComponent,
        componentProps: {
          isEditMode: false, 
          card: { name: '', descriptor: '', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' },
        },
      });
    
      modal.onDidDismiss().then((data) => {
        if (data.data) {
          this.decks.push(data.data);
        }
      });
    
      return await modal.present();
    }

    async openDeckDetails(deck: Deck) {
      const modal = await this.modalCtrl.create({
        component: DeckDetailsComponent,
        componentProps: {
          deck: deck
        },
      });
  
      return await modal.present();
    }
}
