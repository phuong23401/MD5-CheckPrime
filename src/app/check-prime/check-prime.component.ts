import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-prime',
  templateUrl: './check-prime.component.html',
  styleUrls: ['./check-prime.component.css']
})
export class CheckPrimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isPrime(number: number): boolean {
    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
  }

  public getSum() : number {
    let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
    let sum = 0;

    console.log(array);
    for (let number of array) {
      if (this.isPrime(number)) {
        sum += number;
        console.log(number);
      }
    }
    return sum;
  }
  total : number = this.getSum();
}
