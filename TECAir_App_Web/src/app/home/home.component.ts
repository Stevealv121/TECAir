import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeIndicator();
  }

  changeIndicator() {
    let slide1 = document.getElementById("s1");
    let slide2 = document.getElementById("s2");
    let slide3 = document.getElementById("s3");

    slide1?.addEventListener("click", this.setIndicator1);
    slide2?.addEventListener("click", this.setIndicator2);
    slide3?.addEventListener("click", this.setIndicator3);
  }
  setIndicator1(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(1)?.classList.remove("active");
    indicators?.item(2)?.classList.remove("active");
    this.classList.add("active");

  }
  setIndicator2(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(0)?.classList.remove("active");
    indicators?.item(2)?.classList.remove("active");
    this.classList.add("active");

  }
  setIndicator3(this: HTMLElement) {
    let indicators = document.getElementById("indicators")?.children;

    indicators?.item(0)?.classList.remove("active");
    indicators?.item(1)?.classList.remove("active");
    this.classList.add("active");

  }

}
