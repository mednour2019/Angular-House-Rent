import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseContratComponent } from './visualise-contrat.component';

describe('VisualiseContratComponent', () => {
  let component: VisualiseContratComponent;
  let fixture: ComponentFixture<VisualiseContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiseContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
