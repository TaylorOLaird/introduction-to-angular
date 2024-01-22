import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results:HousingLocation[]=[];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  constructor() { }

  ngOnInit(): void {
  }

  seechHousingLocations(searchText: string) {
    console.log(searchText);
    if (!searchText) return;
    this.results = this.locationList
    .filter(
      curLocation => curLocation.city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
  }

  selectHousingLocation(location: HousingLocation) {
    // console.log("yay you selected a house")
    this.selectedLocationEvent.emit(location);
  }

}
