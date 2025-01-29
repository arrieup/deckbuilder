import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
  imports: [
    IonicModule,
    NgIf,
    ReactiveFormsModule],
  standalone: true,
})
export class CardFormComponent implements OnInit {
  @Input() isEditMode: boolean = false;
  @Input() card: any = { name: '', descriptor: '', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg' };

  cardForm!: FormGroup;
  previewImage: string = "https://ionicframework.com/docs/img/demos/thumbnail.svg";

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      name: [this.card.name || '', [Validators.required, Validators.maxLength(15)]], 
      descriptor: [this.card.descriptor || '', [Validators.required, Validators.minLength(10)]],
      image: [this.card.image || '', [Validators.pattern('https?://.*')]],
    });

    this.previewImage = this.card.image;
  }

  onImageChange(event: any) {
    if (this.cardForm.controls['image'].valid) {
      this.previewImage = event.target.value;
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.modalCtrl.dismiss(this.cardForm.value);
    }
  }
}
