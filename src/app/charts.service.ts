import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  
  constructor(private http: HttpClient) { }

  public getIncomeHisto(){
    return this.http.get("http://localhost:5000/graphs/histo?field=income");
  }

   public getScoreHisto(){
    return this.http.get("http://localhost:5000/graphs/histo?field=income");
  }

   public getAgeHisto(){
    return this.http.get("http://localhost:5000/graphs/histo?field=income");
  }

  public getCountPlot(){
    return this.http.get("http://localhost:5000/graphs/count");
  }

  public getClusters(){
    return this.http.get("http://localhost:5000/graphs/clusters");
  }


  public getEmHisto1(){
    return this.http.get("http://localhost:5000/em/graphs/histo?field=SepalLengthCm");
  }

   public getEmHisto2(){
    return this.http.get("http://localhost:5000/em/graphs/histo?field=SepalWidthCm");
  }

   public getEmHisto3(){
    return this.http.get("http://localhost:5000/em/graphs/histo?field=PetalLengthCm");
  }

  public getEmHisto4(){
    return this.http.get("http://localhost:5000/em/graphs/histo?field=PetalWidthCm");
  }

  public getSomHisto1(){
    return this.http.get("http://localhost:5000/som/graphs/histo?field=A1");
  }

   public getSomHisto2(){
    return this.http.get("http://localhost:5000/som/graphs/histo?field=A2");
  }

   public getSomHisto3(){
    return this.http.get("http://localhost:5000/som/graphs/histo?field=A3");
  }

  public getSomHisto4(){
    return this.http.get("http://localhost:5000/som/graphs/histo?field=A4");
  }


}
