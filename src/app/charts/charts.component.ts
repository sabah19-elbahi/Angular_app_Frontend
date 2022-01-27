import { Component, OnInit } from '@angular/core';
import {ChartsService} from '../charts.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  ageHisto:any;
  incomeHisto:any;
  scoreHisto:any;
  countPlot:any;
  clusters:any;
  constructor(private chartsServ: ChartsService) { }

  ngOnInit(): void {
    this.setAll();
  }

  public setAll() {
    this.setAgeHisto();
    this.setIncomeHisto();
    this.setScoreHisto();
    this.setCountPlot();
    this.setClusters();

  }

  public setAgeHisto() {
    let response = this.chartsServ.getAgeHisto();
    response.subscribe(data => this.ageHisto = data);

  }

   public setIncomeHisto() {
    let response = this.chartsServ.getIncomeHisto();
    response.subscribe(data => this.incomeHisto = data);

  }

  public setScoreHisto() {
    let response = this.chartsServ.getScoreHisto();
    response.subscribe(data => this.scoreHisto = data);

  }

  public setCountPlot() {
    let response = this.chartsServ.getCountPlot();
    response.subscribe(data => this.countPlot = data);

  }

  public setClusters() {
    let response = this.chartsServ.getClusters();
    response.subscribe(data => this.clusters = data);

  }
}
