import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-infinite-scroll',
  imports: [CommonModule,InfiniteScrollModule],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss'
})
export class InfiniteScrollComponent {
 page = 0;
  pageSize = 20;
  loading = false;
  items: any = [];
  data: any[] = [];
  totalPage = 5;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {

    this.loading = true;
    const start = this.page * this.pageSize;
    const end = start + this.pageSize;
    const nextBatch = this.data.slice(start, end);
    console.log("loadItems")

    setTimeout(() => {
      this.items.push(...nextBatch);
      this.loading = false;
    }, 500); // Simulate slight delay
  }

  onScroll() {
    console.log("in scroll");
    if (this.page <= this.totalPage) {
      this.page++;
      this.loadItems();
    }
  }

  
}
