import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: ContactModel[] = [];
  _filter: string;
  _contacts: ContactModel[] = [];
  filteredContacts: ContactModel[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.returnAll();
  }

  returnAll(): void {
    this.contactService.returnAll().subscribe({
      next: (contacts) => {
        this._contacts = contacts;
        this.filteredContacts = this._contacts;
      },
      error: (e) => {
        console.log('Error in returnAll', e);
      },
      complete() {
        console.log('Done');
      },
    });
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredContacts = this._contacts.filter(
      (contact: ContactModel) =>
        contact.name
          .toLocaleLowerCase()
          .indexOf(this._filter.toLocaleLowerCase()) > -1
    );
  }

  get filter(): string {
    return this._filter;
  }
}
