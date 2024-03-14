import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPageComponent } from './shared-page.component';

describe('SharedPageComponent', () => {
  let component: SharedPageComponent;
  let fixture: ComponentFixture<SharedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedPageComponent]
    });
    fixture = TestBed.createComponent(SharedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
