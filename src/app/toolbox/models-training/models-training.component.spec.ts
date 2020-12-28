import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsTrainingComponent } from './models-training.component';

describe('ModelsTrainingComponent', () => {
  let component: ModelsTrainingComponent;
  let fixture: ComponentFixture<ModelsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
