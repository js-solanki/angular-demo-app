import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  imports: [ScrollingModule],
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss'
})
export class VirtualScrollComponent {

  items: any = [];
  constructor(private dataService: DataService) {
      this.items = this.dataService.getData();
    }

}
