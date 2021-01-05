import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAccount1Component } from './user-account1.component';

describe('UserAccount1Component', () => {
  let component: UserAccount1Component;
  let fixture: ComponentFixture<UserAccount1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccount1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
