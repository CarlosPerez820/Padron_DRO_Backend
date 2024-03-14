import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpashscreenComponent } from './spashscreen.component';

describe('SpashscreenComponent', () => {
  let component: SpashscreenComponent;
  let fixture: ComponentFixture<SpashscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpashscreenComponent]
    });
    fixture = TestBed.createComponent(SpashscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
