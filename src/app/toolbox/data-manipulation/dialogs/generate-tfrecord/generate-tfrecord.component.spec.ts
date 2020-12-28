import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTFRecordComponent } from './generate-tfrecord.component';

describe('GenerateTFRecordComponent', () => {
  let component: GenerateTFRecordComponent;
  let fixture: ComponentFixture<GenerateTFRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTFRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTFRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
