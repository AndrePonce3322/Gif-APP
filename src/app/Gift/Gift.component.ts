import { Component } from "@angular/core";

@Component({
    selector: 'app-gift',
    templateUrl: './Gift.component.html',
    styleUrls: ['./Gift.component.css']
})

export class GiftComponent {

    apikey = 'PRmUDE1xZgZ09Q5UokujGzMNbTpMPhTl';

    allGift: any[] = [];

    ngOnInit(): void {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=amor&limit=30&offset=0&rating=g&lang=en`

        fetch(url).then((response) => response.json())
            .then(data => {

                for (let i = 0; i < data.data.length; i++) {
                    this.allGift.push(data.data[i].images.original.url);
                }

            })
    }

    Buscar(inputValue: string) {

        // Reiniciando todos los gift

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`

        this.allGift = [];


        fetch(url).then((response) => response.json())
            .then(data => {

                for (let i = 0; i < data.data.length; i++) {
                    this.allGift.push(data.data[i].images.original.url);
                }

            })
    }
}