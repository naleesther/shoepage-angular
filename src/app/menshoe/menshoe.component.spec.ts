import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshoeComponent } from './menshoe.component';

describe('MenshoeComponent', () => {
  let component: MenshoeComponent;
  let fixture: ComponentFixture<MenshoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
