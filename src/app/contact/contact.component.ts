import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	itemCount: number;
	btnText: string = 'Add new contact';
	goalText: string = 'Martina Linkova';
	goals = [];

  constructor() { }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }

  addContact(){
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  }

  
}
