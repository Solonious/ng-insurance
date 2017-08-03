import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../services/contract.service';

import { CarContract } from '../../../models/car-contract';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css'],
  providers: [AppService]
})
export class MyCarsComponent implements OnInit {
contracts: CarContract[];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.getContracts();
  }
  getContracts(): void {
    this.service.getContracts()
      .subscribe(data => this.contracts = data,
        err => console.log(err));
  }

}
