import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {IonicModule, ModalController } from '@ionic/angular';
import { Card } from '../../../models/card.model';
import { CARDS } from '../../../repository';
import { CardFormComponent } from "../card-form/card-form.component";


@Component({
  selector: 'app-card',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  imports: [IonicModule],
  standalone: true
})
export class CardComponent  implements OnInit {
  @Input() card : Card = CARDS[0];

  constructor(private modalCtrl: ModalController) {}
  
  async openEditModal(card: any) {
    const modal = await this.modalCtrl.create({
      component: CardFormComponent,
      componentProps: { 
        isEditMode: true, 
        card },
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.card = data.data
      }
    });

    return await modal.present();
  }

  ngOnInit() {}

}
