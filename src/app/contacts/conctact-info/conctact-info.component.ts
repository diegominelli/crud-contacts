import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../contact-list/contact.model';
import { ContactService } from '../contact-list/contact.service';

@Component({
  selector: 'app-conctact-info',
  templateUrl: './conctact-info.component.html',
  styleUrls: ['./conctact-info.component.scss'],
})
export class ConctactInfoComponent {
  contactId: number;
  contact: ContactModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactId = +this.activatedRoute.snapshot.params['id'];

    this.returnById();
  }

  returnById(): void {
    this.contactService.returnById(this.contactId).subscribe({
      next: (contact) => {
        this.contact = contact;
      },
      error: (e) => {
        console.log('Error in return By Id', e);
      },
    });
  }

  save(): void {
    this.contactService.save(this.contact);
  }
}
