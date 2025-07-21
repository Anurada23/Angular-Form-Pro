import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  // Form controls
  //senderNameControl = new FormControl('');
  //senderEmailControl = new FormControl('');
  //senderMessageControl = new FormControl('');

  contactForm = new FormGroup({
    senderNameControl : new FormControl(''),
    senderEmailControl: new FormControl(''),
    senderMessageControl: new FormControl('', [Validators.minLength(10)])
  });


  // Properties to store values after submission
  submittedName: string = '';
  submittedEmail: string = '';
  submittedMessage: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    //this.submittedName = this.contactForm.get('senderNameControl')!.value as string;
    //this.submittedEmail = this.contactForm.get('senderEmailControl')!.value as string;
    //this.submittedMessage = this.contactForm.get('senderMessageControl')!.value as string;

    //console.log(this.submittedName)

    console.log(this.contactForm.valid)
    //this.submittedEmail = this.senderEmailControl.value || '';
    //this.submittedMessage = this.senderMessageControl.value || '';
  }

}
