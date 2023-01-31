import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesshoeComponent } from './ladiesshoe.component';

describe('LadiesshoeComponent', () => {
  let component: LadiesshoeComponent;
  let fixture: ComponentFixture<LadiesshoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiesshoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadiesshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
