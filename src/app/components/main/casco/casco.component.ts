import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../../services/contract.service';

import { CarContract } from '../../../models/car-contract';
import { CarContractInfo } from '../../../models/car-contract-info';

@Component({
  selector: 'app-casco',
  templateUrl: './casco.component.html',
  styleUrls: ['./casco.component.css'],
  providers: [AppService]
})
export class CascoComponent implements OnInit {
@Input() data: CarContract;
carContractInfo: CarContractInfo;
visibility = false;
  constructor(private service: AppService) { }

  ngOnInit() {
  }
  getCarContractInfo(id: number): void {
    this.service.getContractInfo(id)
      .subscribe(res => this.carContractInfo = res,
        err => console.log(err));
  }
  showDetail(id: number): void {
    this.getCarContractInfo(id);
    this.visibility = !this.visibility;
  }

}
