import { Component } from '@angular/core';
import { EmailService } from './service/email-service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, ClipboardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'email-assistant';

  constructor(private emailService : EmailService){

  }

  emailContent : string  = "";
  tone : string  = "";
  emailReply : string = "";

  submitEmail(){
    this.emailService.getEmailContent(this.emailContent, this.tone).subscribe((data) =>{
      this.emailReply = data;
    })
  }

  copySuccess = false;

  copyReply() {
    navigator.clipboard.writeText(this.emailReply || '').then(() => {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2000);
    });
  }
  
  
}
