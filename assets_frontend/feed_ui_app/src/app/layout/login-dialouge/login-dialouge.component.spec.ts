import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialougeComponent } from './login-dialouge.component';

describe('LoginDialougeComponent', () => {
  let component: LoginDialougeComponent;
  let fixture: ComponentFixture<LoginDialougeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDialougeComponent]
    });
    fixture = TestBed.createComponent(LoginDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
