import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAngularTreeComponent } from './demo-angular-tree.component';

describe('DemoAngularTreeComponent', () => {
  let component: DemoAngularTreeComponent;
  let fixture: ComponentFixture<DemoAngularTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAngularTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAngularTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
