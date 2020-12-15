import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsGenerateComponent } from './models-generate.component';

describe('ModelsGenerateComponent', () => {
  let component: ModelsGenerateComponent;
  let fixture: ComponentFixture<ModelsGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
