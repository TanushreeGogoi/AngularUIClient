import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientdataComponent } from './httpclientdata.component';

describe('HttpclientdataComponent', () => {
  let component: HttpclientdataComponent;
  let fixture: ComponentFixture<HttpclientdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
