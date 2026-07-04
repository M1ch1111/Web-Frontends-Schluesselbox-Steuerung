import { Injectable } from '@angular/core';

/** Typdefinition für eine Home Assistant Entität */
export interface HaEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    icon?: string;
    unit_of_measurement?: string;
    [key: string]: unknown;
  };
  last_changed: string;
  last_updated: string;
}

/** Unterstützte Gerätedomains */
export type HaDomain = 'light' | 'switch' | 'sensor' | 'climate';

const SUPPORTED_DOMAINS: HaDomain[] = ['light', 'switch', 'sensor', 'climate'];

const STORAGE_KEY_URL = 'ha_server_url';
const STORAGE_KEY_TOKEN = 'ha_access_token';

@Injectable({
  providedIn: 'root'
})
export class HomeAssistantService {

  private serverUrl: string = '';
  private accessToken: string = '';

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.serverUrl = localStorage.getItem(STORAGE_KEY_URL) ?? '';
      this.accessToken = localStorage.getItem(STORAGE_KEY_TOKEN) ?? '';
    }
  }

  /** Prüft ob URL und Token konfiguriert sind */
  isConfigured(): boolean {
    return this.serverUrl.length > 0 && this.accessToken.length > 0;
  }

  /** Gibt die aktuelle Server-URL zurück */
  getServerUrl(): string {
    return this.serverUrl;
  }

  /** Gibt den aktuellen Token zurück (maskiert) */
  getTokenPreview(): string {
    if (this.accessToken.length <= 8) return '****';
    return this.accessToken.substring(0, 4) + '...' + this.accessToken.substring(this.accessToken.length - 4);
  }

  /** Speichert die HA-Konfiguration in localStorage */
  saveConfig(url: string, token: string): void {
    // URL normalisieren: Trailing slash entfernen
    this.serverUrl = url.replace(/\/+$/, '');
    this.accessToken = token.trim();

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_URL, this.serverUrl);
      localStorage.setItem(STORAGE_KEY_TOKEN, this.accessToken);
    }
  }

  /** Erstellt die HTTP-Header für API-Anfragen */
  private getHeaders(): Record<string, string> {
    return {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  /** Holt alle Entitäten von Home Assistant und filtert nach unterstützten Domains */
  async getStates(): Promise<HaEntity[]> {
    if (!this.isConfigured()) {
      throw new Error('Home Assistant ist nicht konfiguriert.');
    }

    const response = await fetch(`${this.serverUrl}/api/states`, {
      method: 'GET',
      headers: this.getHeaders()
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Authentifizierung fehlgeschlagen – Token prüfen.');
      }
      throw new Error(`HTTP Fehler: ${response.status} ${response.statusText}`);
    }

    const allEntities: HaEntity[] = await response.json();
    return this.filterSupportedEntities(allEntities);
  }

  /** Ruft einen Home Assistant Service auf (z.B. light/turn_on) */
  async callService(domain: string, service: string, entityId: string): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error('Home Assistant ist nicht konfiguriert.');
    }

    const response = await fetch(`${this.serverUrl}/api/services/${domain}/${service}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ entity_id: entityId })
    });

    if (!response.ok) {
      throw new Error(`Service-Aufruf fehlgeschlagen: ${response.status} ${response.statusText}`);
    }
  }

  /** Schaltet ein Gerät um (toggle) – bestimmt automatisch die richtige Aktion */
  async toggleEntity(entity: HaEntity): Promise<void> {
    const domain = this.getDomain(entity.entity_id);

    if (domain === 'light' || domain === 'switch') {
      const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
      await this.callService(domain, service, entity.entity_id);
    }
  }

  /** Extrahiert die Domain aus einer entity_id (z.B. "light" aus "light.wohnzimmer") */
  getDomain(entityId: string): string {
    return entityId.split('.')[0];
  }

  /** Filtert Entitäten nach unterstützten Domains */
  private filterSupportedEntities(entities: HaEntity[]): HaEntity[] {
    return entities.filter(entity => {
      const domain = this.getDomain(entity.entity_id);
      return SUPPORTED_DOMAINS.includes(domain as HaDomain);
    });
  }

  /** Gruppiert Entitäten nach Domain */
  groupByDomain(entities: HaEntity[]): Record<string, HaEntity[]> {
    const groups: Record<string, HaEntity[]> = {};

    for (const entity of entities) {
      const domain = this.getDomain(entity.entity_id);
      if (!groups[domain]) {
        groups[domain] = [];
      }
      groups[domain].push(entity);
    }

    return groups;
  }

  /** Gibt ein passendes Emoji für eine Domain zurück */
  getDomainIcon(domain: string): string {
    switch (domain) {
      case 'light': return '💡';
      case 'switch': return '🔌';
      case 'sensor': return '🌡️';
      case 'climate': return '❄️';
      default: return '📟';
    }
  }

  /** Gibt einen lesbaren Domain-Namen zurück */
  getDomainLabel(domain: string): string {
    switch (domain) {
      case 'light': return 'Lichter';
      case 'switch': return 'Schalter';
      case 'sensor': return 'Sensoren';
      case 'climate': return 'Klima';
      default: return domain;
    }
  }
}
