import { Injectable } from '@angular/core';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor() { }

  getData = () => {
    return data; // Returns the entire data array
  }
  getItemById(id: any) {
    return data.find(item => item.id === id); // Find item by ID
  };

  filterDataByName(name: any) {
    return data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }
}
