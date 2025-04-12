import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { data } from '../data';

@Component({
  selector: 'app-manual-scroll',
  imports: [CommonModule],
  templateUrl: './manual-scroll.component.html',
  styleUrl: './manual-scroll.component.scss'
})
export class ManualScrollComponent implements OnInit {
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
    setTimeout(() => {
      this.items.push(...nextBatch);
      this.loading = false;
    }, 500); // Simulate slight delay
  }

  onScroll(event: any) {
    const element = event.target;
    const atBottom =
      element.scrollHeight - element.scrollTop <= element.clientHeight + 50;
    if (this.page <= this.totalPage) {
      if (atBottom && !this.loading) {
        this.page++;
        this.loadItems();
      }
    }

  }

}
