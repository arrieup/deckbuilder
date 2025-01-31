import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { Deck } from 'src/app/models/deck.model';
import { Card } from 'src/app/models/card.model';
import { CARDS, DECKS } from 'src/app/repository';
import { DeckDetailsComponent } from '../deck-details/deck-details.component';
import { DeckFormComponent } from '../deck-form/deck-form.component';

@Component({
  selector: 'app-deck-item',
  templateUrl: './deck-item.component.html',
  styleUrls: ['./deck-item.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class DeckComponent implements OnInit {

  @Input() deck: Deck = DECKS[0]

  full : Card[] = CARDS;

  constructor(private modalCtrl: ModalController) {
      addIcons({ trash});
   }

  ngOnInit() {
  }
  
  async openDeckDetails() {
    console.debug(this.deck);
    const modal = await this.modalCtrl.create({
      component: DeckDetailsComponent,
      componentProps: {
        deck: this.deck,
      },
    });

    return await modal.present();
  }

   async openEditModal() {
      const modal = await this.modalCtrl.create({
        component: DeckFormComponent,
        componentProps: { 
          isEditMode: true, 
          deck : this.deck },
      });
  
      modal.onDidDismiss().then((data) => {
        if (data.data) {
          this.deck = data.data
        }
      });
  
      return await modal.present();
    }

}
