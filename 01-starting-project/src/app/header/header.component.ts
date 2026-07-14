import { Component } from "@angular/core";

@Component({ // Decoratior that tells Angular this is a component
    selector: 'app-header', // Tells Angular which element to use for this component
    standalone: true, // (Auto true v19+) Tells Angular that this component is standalone
    templateUrl: './header.component.html', // Tells Angular where to find the template for this component
    styleUrls: ['./header.component.css'], // Tells Angular where to find the styles for this component

    // styles: ['h1 {color: red;} '] // Inline styles for this component
    // styleURL: './header.component.css' // Tells Angular where to find the single style for this component

    // standalone: false, // (Auto false v18-) Tells Angular that this component is not standalone; requires module-based component registration
})

export class HeaderComponent{ // You can name it whatever you want, but it's a good practice to name the class after the component name



}