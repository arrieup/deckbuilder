import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { CardComponent } from "../../components/card/card-item/card-item.component";
import { Card } from '../../models/card.model';
import { CARDS } from '../../repository';
import { CardFormComponent } from "../../components/card/card-form/card-form.component";
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule,
    CardComponent, NgFor]
})
export class Tab2Page {

  cards : Card[] = CARDS;
  constructor(private modalCtrl : ModalController,private cardservice: CardService ) {
    addIcons({add})
  }
  
  async openCreateModal() {
    const modal = await this.modalCtrl.create({
      component: CardFormComponent,
      componentProps: {
        isEditMode: false, 
        card: { name: '', descriptor: '', image: '' }, // Pass a new empty object
      },
    });
  
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.cards.push(data.data); // Add new card to list
      }
    });
  
    return await modal.present();
  }

}
