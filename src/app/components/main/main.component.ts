import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
documentTabs = [{
  title: 'Всі договори',
  icon: ''
}, {
  title: 'Мої автомобілі',
  icon: ''
}, {
  title: 'Моє майно',
  icon: ''
}, {
  title: "Моє здоров\'я",
  icon: ''
}, {
  title: 'Мої подорожі',
  icon: ''
}];
selectedTab: any;
  constructor() { }

  ngOnInit() {
  }
  onSelect(tab: any) { this.selectedTab = tab}

}
