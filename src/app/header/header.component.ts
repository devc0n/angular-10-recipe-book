import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigateEvent = new EventEmitter<string>();

  collapsed = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToRecipes(): void {
    this.navigateEvent.emit('recipes');
  }

  navigateToShoppingList(): void {
    this.navigateEvent.emit('shoppingList');
  }

}
