import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Compare1Component } from './compare1.component';

describe('Compare1Component', () => {
  let component: Compare1Component;
  let fixture: ComponentFixture<Compare1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compare1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Compare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
