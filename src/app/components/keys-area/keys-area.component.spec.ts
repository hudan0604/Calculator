import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysAreaComponent } from './keys-area.component';

describe('KeysAreaComponent', () => {
  let component: KeysAreaComponent;
  let fixture: ComponentFixture<KeysAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeysAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
