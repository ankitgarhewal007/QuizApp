
import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Data} from './data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { select } from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ansarray:any=[];
  totalquestions;
  chartData;
  score:number=0;
  wronganswer;
  answer:any;
  dummydata: Observable<Data>;
  getquestion=[];
  forminvalid=false;
  flag;
  showchart=true;
  trackarray=[];
  errormsg=false;
  constructor(private http: HttpClient,private data:DataService) {}

  ngOnInit() {
    this.getquestion=this.data.allQuestions;
    this.totalquestions=this.data.allQuestions.length;
    this.dummydata = this.http.get<Data>('./assets/data.json');
    
  }

  onSelect(question: any, option: any) {
    
    this.getquestion.filter((queid)=>{
      
      if(queid.questionId===question){
        this.trackarray[queid.questionId]=1;
        queid.selectedOption=option;
        if(queid.answer!==option&&this.ansarray[queid.questionId]===1){
          this.ansarray[queid.questionId]=undefined;
        
        }

        if(queid.answer===option&&this.ansarray[queid.questionId]!=1){
           
          this.ansarray[queid.questionId]=1;
        
        }
        
      }
      
    })
  
}

 myFunction() {
   this.trackarray=[];
   this.ansarray=[];
  this.wronganswer=0;
  this.score=0;
  var resetForm = <HTMLFormElement>document.getElementById("myForm");
  resetForm.reset();
  this.showchart=false;
 
}

showscore(f:any){
  if(this.trackarray.length<this.totalquestions+1){
    this.errormsg=true;
  }
  else
  {
    this.errormsg=false;
  }
  this.showchart=true;
  this.ansarray.forEach(element => {
    if(element==1){
      this.score++;
    }
  });
  this.wronganswer=this.totalquestions-this.score;
this.chartData=[
  {
    "letter": "Correct",
    "frequency": this.score
  },
  {
    "letter": "Incorrect",
    "frequency": this.wronganswer
  }
]
  
}


}