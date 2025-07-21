import { Component,Input } from '@angular/core';
import { WishItem } from '../../Shared/WishItem';

@Component({
  selector: 'wish-list',
  standalone: false,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = []

  //toggle method (Event Bindng)
  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted
    console.log(item)


  }

}
