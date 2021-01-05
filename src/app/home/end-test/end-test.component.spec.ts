import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndTestComponent } from './end-test.component';

describe('EndTestComponent', () => {
  let component: EndTestComponent;
  let fixture: ComponentFixture<EndTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndTestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
