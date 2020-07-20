import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 

  allQuestions:any = [
    {
      questionId: 1,
      questionText: 'When was the last time india won the cricket world cup ?',
      options: [
        { optionValue: '1', optionText: '2003' },
        { optionValue: '2', optionText: '2015' },
        { optionValue: '3', optionText: '2011' },
        { optionValue: '4', optionText: '1983' }
      ],
       
        answer: '2011',
      selectedOption: ''
    },
    {
      questionId: 2,
      questionText: 'What is the highest individual score by a batsman in Test Cricket ?',
      options: [
        { optionValue: '1', optionText: '279' },
        { optionValue: '2', optionText: '375' },
        { optionValue: '3', optionText: '400' },
        { optionValue: '4', optionText: '389' },
      ],
      answer: '400',  
      selectedOption: ''
    },
    {
      questionId: 3,
      questionText: 'Who has won the most number of cricket world cup',
      options: [
        { optionValue: '1', optionText: 'India' },
        { optionValue: '2', optionText: 'Srilanka' },
        { optionValue: '3', optionText: 'South Africa' },
        { optionValue: '4', optionText: 'Australia' }
      ],
      answer: 'Australia', 
      selectedOption: ''
    },
    {
      questionId: 4,
      questionText: 'How many International centuries does sachin tendulkar has under his name ?',
      options: [
        { optionValue: '1', optionText: '51' },
        { optionValue: '2', optionText: '49' },
        { optionValue: '3', optionText: '52' },
        { optionValue: '4', optionText: '45' },
      ],
      answer: '49',
      selectedOption: ''
    }
  ];

}
