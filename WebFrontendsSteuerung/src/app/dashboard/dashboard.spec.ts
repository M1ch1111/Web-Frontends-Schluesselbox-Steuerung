import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { MqttService } from '../shared/mqtt';
import { provideRouter } from '@angular/router';
import { Subject } from 'rxjs';

class MockMqttService {
  messages = new Subject<{ topic: string; message: string }>();
  connect() {}
  publish() {}
}

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let mockMqtt: MockMqttService;

  beforeEach(async () => {
    mockMqtt = new MockMqttService();

    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideRouter([]),
        { provide: MqttService, useValue: mockMqtt }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
