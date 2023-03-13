import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services='';

  ngOnInit(): void {
    let index = 0;

    const text = 'Services'

    const repeat = () =>{
      if(index < text.length){
        this.services += text[index]
        index++
        setTimeout(repeat,100)
      }
    }
    repeat()  

  }

}
