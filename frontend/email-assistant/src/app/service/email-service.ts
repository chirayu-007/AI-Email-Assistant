import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root' 
  })

export class EmailService {

    private emailUrl = "http://localhost:8080/api/email/generate";

    constructor(private httpClient: HttpClient) { 
        console.log('EmailService constructor..');
    }


    public getEmailContent(email:string, tone : string) : Observable<string>{
        const emailRequest = {email, tone};
        return this.httpClient.post(this.emailUrl, emailRequest, {responseType : 'text'});
    }

}