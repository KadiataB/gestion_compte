import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAddComponent } from './compte-add.component';

describe('CompteAddComponent', () => {
  let component: CompteAddComponent;
  let fixture: ComponentFixture<CompteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
