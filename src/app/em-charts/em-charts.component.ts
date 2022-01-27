import { Component, OnInit } from '@angular/core';
import {ChartsService} from '../charts.service';

@Component({
  selector: 'app-em-charts',
  templateUrl: './em-charts.component.html',
  styleUrls: ['./em-charts.component.css']
})
export class EmChartsComponent implements OnInit {
   histo1:any;
   histo2:any;
   histo3:any;
   histo4:any;
  constructor(private chartsServ: ChartsService) { }

  
  ngOnInit(): void {
    this.setAll();
  }

  public setAll() {
    this.setHisto1();
    this.setHisto2();
    this.setHisto3();
    this.setHisto4();

  }

  public setHisto1() {
    let response = this.chartsServ.getEmHisto1();
    response.subscribe(data => this.histo1 = data);

  }

   public setHisto2() {
    let response = this.chartsServ.getEmHisto2();
    response.subscribe(data => this.histo2 = data);

  }

  public setHisto3() {
    let response = this.chartsServ.getEmHisto3();
    response.subscribe(data => this.histo3 = data);

  }

  public setHisto4() {
    let response = this.chartsServ.getEmHisto4();
    response.subscribe(data => this.histo4 = data);

  }

}
