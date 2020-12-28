import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTrainDialogComponent } from './start-train-dialog.component';

describe('StartTrainDialogComponent', () => {
  let component: StartTrainDialogComponent;
  let fixture: ComponentFixture<StartTrainDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTrainDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTrainDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
