import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditaccountComponent } from './addeditaccount.component';

describe('AddeditaccountComponent', () => {
  let component: AddeditaccountComponent;
  let fixture: ComponentFixture<AddeditaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
