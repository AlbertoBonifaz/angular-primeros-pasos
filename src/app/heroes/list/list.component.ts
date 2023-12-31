import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman', 'Hulk', 'CaptainAmerica', 'Thor', 'Iron man'];
  public deletedHero?: string;

  removeLastName():void{
    this.deletedHero = this.heroNames.pop();
  }

}
