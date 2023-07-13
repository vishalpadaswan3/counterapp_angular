import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDependComponent } from './count-depend.component';

describe('CountDependComponent', () => {
  let component: CountDependComponent;
  let fixture: ComponentFixture<CountDependComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountDependComponent]
    });
    fixture = TestBed.createComponent(CountDependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
