import { ContactsService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact.model';

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

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this._contacts = this.contactsService.returnAll();
    this.filteredContacts = this._contacts;
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
