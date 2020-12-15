import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsMLJobsComponent } from './models-ml-jobs.component';

describe('ModelsMLJobsComponent', () => {
  let component: ModelsMLJobsComponent;
  let fixture: ComponentFixture<ModelsMLJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsMLJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsMLJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
