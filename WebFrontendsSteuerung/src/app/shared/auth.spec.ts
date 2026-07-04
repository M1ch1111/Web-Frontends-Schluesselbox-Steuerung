import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';
import { UserService } from './user';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;

  beforeEach(() => {
    localStorage.removeItem('schluesselbox_users');
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService);
    userService = TestBed.inject(UserService);
  });

  afterEach(() => {
    localStorage.removeItem('schluesselbox_users');
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should initially not be logged in', () => {
    expect(authService.isLoggedIn()).toBe(false);
    expect(authService.getCurrentUsername()).toBe('');
    expect(authService.isAdmin()).toBe(false);
  });

  it('should login admin with default credentials', async () => {
    const success = await authService.login('admin', 'admin');
    expect(success).toBe(true);
    expect(authService.isLoggedIn()).toBe(true);
    expect(authService.getCurrentUsername()).toBe('admin');
    expect(authService.isAdmin()).toBe(true);
  });

  it('should fail login with wrong credentials', async () => {
    const success = await authService.login('admin', 'wrongpassword');
    expect(success).toBe(false);
    expect(authService.isLoggedIn()).toBe(false);
  });

  it('should login a newly added user', async () => {
    userService.addUser('testuser', 'password123', false);
    
    const success = await authService.login('testuser', 'password123');
    expect(success).toBe(true);
    expect(authService.isLoggedIn()).toBe(true);
    expect(authService.getCurrentUsername()).toBe('testuser');
    expect(authService.isAdmin()).toBe(false);
  });

  it('should logout correctly', async () => {
    await authService.login('admin', 'admin');
    expect(authService.isLoggedIn()).toBe(true);

    await authService.logout();
    expect(authService.isLoggedIn()).toBe(false);
    expect(authService.getCurrentUsername()).toBe('');
  });
});
