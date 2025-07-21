import { Component } from '@angular/core';
import { WishItem } from '../Shared/WishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('coffee',true),
    new WishItem('Find grass', false),

  ]


  userName: String= "Anurada"

  title = 'wishList';

  listFilter: String = '0';

  visibleItems: WishItem[] = this.items;




  filterChanged(value: any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isCompleted)
    } else {
      this.visibleItems = this.items.filter(item => item.isCompleted)
    }

  }




  }

  


