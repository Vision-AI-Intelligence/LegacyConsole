import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsInferenceComponent } from './models-inference.component';

describe('ModelsInferenceComponent', () => {
  let component: ModelsInferenceComponent;
  let fixture: ComponentFixture<ModelsInferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsInferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsInferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
