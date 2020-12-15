import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIOJobsComponent } from './data-io-jobs.component';

describe('DataIOJobsComponent', () => {
  let component: DataIOJobsComponent;
  let fixture: ComponentFixture<DataIOJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataIOJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataIOJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
