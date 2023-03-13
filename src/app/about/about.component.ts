import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  bienvenida='';

  ngOnInit(): void {
    let index = 0;

    const text = 'about us'

    const repeat = () =>{
      if(index < text.length){
        this.bienvenida += text[index]
        index++
        setTimeout(repeat,100)
      }
    }
    repeat()  

  }


}
