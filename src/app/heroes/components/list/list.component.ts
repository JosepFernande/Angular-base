import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitan America', 'Doctor Strange'];
  public deleteHero?: string;

  remobeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
