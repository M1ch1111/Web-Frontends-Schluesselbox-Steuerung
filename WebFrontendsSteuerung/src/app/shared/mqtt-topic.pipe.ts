import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mqttTopic', standalone: true })
export class MqttTopicPipe implements PipeTransform {
  private static readonly TOPIC_MAP: Record<string, string> = {
    'schluesselbox/status':   'Box-Status',
    'schluesselbox/tuer':     'Türstatus',
    'schluesselbox/wetter':   'Wetter',
    'schluesselbox/muell':    'Müllabfuhr',
    'schluesselbox/anfrage':  'Statusabfrage'
  };

  transform(topic: string): string {
    if (MqttTopicPipe.TOPIC_MAP[topic]) {
      return MqttTopicPipe.TOPIC_MAP[topic];
    }

    const erkannt = topic.match(/schluesselbox\/platz_(\d+)\/erkannt/);
    if (erkannt) return `Platz ${erkannt[1]} – Schlüssel eingehängt`;

    const entfernt = topic.match(/schluesselbox\/platz_(\d+)\/entfernt/);
    if (entfernt) return `Platz ${entfernt[1]} – Schlüssel entnommen`;

    return topic;
  }
}
