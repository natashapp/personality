import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Notification1Component } from './notification1.component';

describe('Notification1Component', () => {
  let component: Notification1Component;
  let fixture: ComponentFixture<Notification1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Notification1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Notification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
