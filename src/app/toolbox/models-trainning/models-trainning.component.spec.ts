import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsTrainningComponent } from './models-trainning.component';

describe('ModelsTrainningComponent', () => {
  let component: ModelsTrainningComponent;
  let fixture: ComponentFixture<ModelsTrainningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsTrainningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsTrainningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
