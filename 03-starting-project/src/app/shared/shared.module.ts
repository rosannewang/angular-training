import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    // no bootstrap because it's in root
    declarations: [CardComponent],
    exports: [CardComponent] 
})

export class SharedModule{
    
}