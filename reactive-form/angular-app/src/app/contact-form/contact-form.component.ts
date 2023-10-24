import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.FormData = this.fb.group({
      user_name: [''],
      user_email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target as HTMLFormElement, 'PUBLIC_KEY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
