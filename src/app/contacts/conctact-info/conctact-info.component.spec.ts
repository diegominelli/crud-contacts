import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctactInfoComponent } from './conctact-info.component';

describe('ConctactInfoComponent', () => {
  let component: ConctactInfoComponent;
  let fixture: ComponentFixture<ConctactInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConctactInfoComponent]
    });
    fixture = TestBed.createComponent(ConctactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
