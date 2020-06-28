import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrightComponent } from './loginright.component';

describe('LoginrightComponent', () => {
  let component: LoginrightComponent;
  let fixture: ComponentFixture<LoginrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
