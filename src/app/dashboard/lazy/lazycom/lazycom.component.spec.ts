import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycomComponent } from './lazycom.component';

describe('LazycomComponent', () => {
  let component: LazycomComponent;
  let fixture: ComponentFixture<LazycomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazycomComponent]
    });
    fixture = TestBed.createComponent(LazycomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
