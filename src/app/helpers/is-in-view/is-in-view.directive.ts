import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[isInView]',
})
export class IsInViewDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @Input() isInViewClass = 'animate';

    public listener: () => void;

    public ngOnInit() {
        this.listener = this.renderer.listen('window', 'scroll', (e) => {
            if (this.elementRef.nativeElement) {
                const rect = this.elementRef.nativeElement.getBoundingClientRect();
                const isInView =
                    (rect.top <= 0 && rect.bottom >= 0) ||
                    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
                    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
                if (isInView) {
                    let el = this.elementRef.nativeElement as HTMLElement;
                    el.classList.add(this.isInViewClass);
                    this.listener();
                }
            }
        });
    }
}
