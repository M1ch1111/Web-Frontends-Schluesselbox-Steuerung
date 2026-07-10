import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSlotStatus]',
  standalone: true
})
export class SlotStatusDirective implements OnChanges {
  
  @Input('appSlotStatus') status: string = 'leer';

  @HostBinding('class.occupied')
  get isOccupied(): boolean {
    return this.status !== 'leer';
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.applyGlow(false);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.applyGlow(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.applyGlow(false);
  }

  private applyGlow(hovered: boolean): void {
    const shadow = this.isOccupied
      ? (hovered ? '0 0 22px rgba(16, 185, 129, 0.45)' : '0 0 12px rgba(16, 185, 129, 0.2)')
      : (hovered ? '0 4px 16px rgba(0, 0, 0, 0.10)' : 'none');

    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
  }
}
