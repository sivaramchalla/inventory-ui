import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmainComponent } from './accountmain.component';

describe('AccountmainComponent', () => {
  let component: AccountmainComponent;
  let fixture: ComponentFixture<AccountmainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountmainComponent]
    });
    fixture = TestBed.createComponent(AccountmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
