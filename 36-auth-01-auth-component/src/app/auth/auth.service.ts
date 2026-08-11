import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){

    }
    signup(email: string, password: string){
        // get the link from Firebase endpoint + API key
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBt8UJvsV4Yt4B1w31100930000000000', {
            email: email,
            password: password,
            returnSecureToken: true
        });
    }
}