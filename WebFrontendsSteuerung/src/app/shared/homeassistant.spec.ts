import { TestBed } from '@angular/core/testing';
import { HomeAssistantService, HaEntity } from './homeassistant';

describe('HomeAssistantService', () => {
  let service: HomeAssistantService;

  beforeEach(() => {
    // localStorage leeren vor jedem Test
    localStorage.removeItem('ha_server_url');
    localStorage.removeItem('ha_access_token');

    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAssistantService);
  });

  afterEach(() => {
    localStorage.removeItem('ha_server_url');
    localStorage.removeItem('ha_access_token');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be configured initially', () => {
    expect(service.isConfigured()).toBe(false);
  });

  it('should be configured after saveConfig()', () => {
    service.saveConfig('http://192.168.178.100:8123', 'test-token-abc');
    expect(service.isConfigured()).toBe(true);
  });

  it('should persist config to localStorage', () => {
    service.saveConfig('http://192.168.178.100:8123/', 'my-token');
    expect(localStorage.getItem('ha_server_url')).toBe('http://192.168.178.100:8123');
    expect(localStorage.getItem('ha_access_token')).toBe('my-token');
  });

  it('should remove trailing slash from URL', () => {
    service.saveConfig('http://ha.local:8123///', 'token');
    expect(service.getServerUrl()).toBe('http://ha.local:8123');
  });

  it('should return masked token preview', () => {
    service.saveConfig('http://localhost:8123', 'abcdefghijklmnop');
    const preview = service.getTokenPreview();
    expect(preview).toBe('abcd...mnop');
  });

  it('should return **** for short tokens', () => {
    service.saveConfig('http://localhost:8123', 'short');
    expect(service.getTokenPreview()).toBe('****');
  });

  it('should extract domain from entity_id', () => {
    expect(service.getDomain('light.wohnzimmer')).toBe('light');
    expect(service.getDomain('switch.steckdose_1')).toBe('switch');
    expect(service.getDomain('sensor.temperatur')).toBe('sensor');
    expect(service.getDomain('climate.heizung')).toBe('climate');
  });

  it('should group entities by domain', () => {
    const entities: HaEntity[] = [
      { entity_id: 'light.lampe1', state: 'on', attributes: {}, last_changed: '', last_updated: '' },
      { entity_id: 'light.lampe2', state: 'off', attributes: {}, last_changed: '', last_updated: '' },
      { entity_id: 'switch.dose1', state: 'on', attributes: {}, last_changed: '', last_updated: '' },
      { entity_id: 'sensor.temp', state: '22.5', attributes: {}, last_changed: '', last_updated: '' }
    ];

    const groups = service.groupByDomain(entities);
    expect(Object.keys(groups).length).toBe(3);
    expect(groups['light'].length).toBe(2);
    expect(groups['switch'].length).toBe(1);
    expect(groups['sensor'].length).toBe(1);
  });

  it('should return correct domain icons', () => {
    expect(service.getDomainIcon('light')).toBe('💡');
    expect(service.getDomainIcon('switch')).toBe('🔌');
    expect(service.getDomainIcon('sensor')).toBe('🌡️');
    expect(service.getDomainIcon('climate')).toBe('❄️');
    expect(service.getDomainIcon('unknown')).toBe('📟');
  });

  it('should return correct domain labels', () => {
    expect(service.getDomainLabel('light')).toBe('Lichter');
    expect(service.getDomainLabel('switch')).toBe('Schalter');
    expect(service.getDomainLabel('sensor')).toBe('Sensoren');
    expect(service.getDomainLabel('climate')).toBe('Klima');
  });

  it('should throw error on getStates() when not configured', async () => {
    await expect(service.getStates()).rejects.toThrowError('Home Assistant ist nicht konfiguriert.');
  });

  it('should throw error on callService() when not configured', async () => {
    await expect(
      service.callService('light', 'turn_on', 'light.test')
    ).rejects.toThrowError('Home Assistant ist nicht konfiguriert.');
  });
});
