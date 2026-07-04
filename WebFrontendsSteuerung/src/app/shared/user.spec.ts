import { TestBed } from '@angular/core/testing';
import { UserService } from './user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    localStorage.removeItem('schluesselbox_users');
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    localStorage.removeItem('schluesselbox_users');
  });

  it('should be created and have default admin user', () => {
    expect(service).toBeTruthy();
    const users = service.getUsers();
    expect(users.length).toBe(1);
    expect(users[0].username).toBe('admin');
    expect(users[0].isAdmin).toBe(true);
  });

  it('should add a new user', () => {
    const added = service.addUser('michi', 'password123', false);
    expect(added).toBe(true);
    const users = service.getUsers();
    expect(users.length).toBe(2);
    expect(users[1].username).toBe('michi');
    expect(users[1].password).toBe('password123');
    expect(users[1].isAdmin).toBe(false);
  });

  it('should not add a user with existing name', () => {
    service.addUser('michi', 'pw1', false);
    const added = service.addUser('Michi', 'pw2', true);
    expect(added).toBe(false);
    expect(service.getUsers().length).toBe(2); // admin + michi
  });

  it('should authenticate correctly', () => {
    service.addUser('michi', 'pw1', false);
    
    expect(service.authenticate('michi', 'pw1')).toBeTruthy();
    expect(service.authenticate('Michi', 'pw1')).toBeTruthy();
    expect(service.authenticate('michi', 'wrong')).toBeNull();
    expect(service.authenticate('unknown', 'pw1')).toBeNull();
  });

  it('should remove a user', () => {
    service.addUser('michi', 'pw1', false);
    expect(service.getUsers().length).toBe(2);
    
    const removed = service.removeUser('michi');
    expect(removed).toBe(true);
    expect(service.getUsers().length).toBe(1);
    expect(service.getUsers()[0].username).toBe('admin');
  });

  it('should toggle automation devices', () => {
    service.addUser('michi', 'pw1', false);
    
    // Add
    let toggled = service.toggleAutomationDevice('michi', 'light.wohnzimmer');
    expect(toggled).toBe(true);
    expect(service.isDeviceInAutomation('michi', 'light.wohnzimmer')).toBe(true);
    expect(service.getAutomationDevices('michi')).toContain('light.wohnzimmer');
    
    // Remove
    toggled = service.toggleAutomationDevice('michi', 'light.wohnzimmer');
    expect(toggled).toBe(false);
    expect(service.isDeviceInAutomation('michi', 'light.wohnzimmer')).toBe(false);
    expect(service.getAutomationDevices('michi')).not.toContain('light.wohnzimmer');
  });
});
