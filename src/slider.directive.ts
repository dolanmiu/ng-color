import { Component, OnChanges, Directive, Input, Output, ViewContainerRef, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgModule, Compiler, ReflectiveInjector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Directive({
    selector: '[slider]',
    host: {
        '(mousedown)': 'start($event)',
        '(touchstart)': 'start($event)'
    }
})
export class SliderDirective {
    @Output('newValue') newValue = new EventEmitter<any>();
    @Input('slider') slider: string;
    @Input('rgX') rgX: number;
    @Input('rgY') rgY: number;
    private listenerMove: any;
    private listenerStop: any;

    constructor(private el: ElementRef) {
        this.listenerMove = (event: any) => { this.move(event) };
        this.listenerStop = () => { this.stop() };
    }

    setCursor(event: any) {
        let height = this.el.nativeElement.offsetHeight;
        let width = this.el.nativeElement.offsetWidth;
        let x = Math.max(0, Math.min(this.getX(event), width));
        let y = Math.max(0, Math.min(this.getY(event), height));

        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        } else if (this.rgX === undefined && this.rgY !== undefined) {//ready to use vertical sliders
            this.newValue.emit({ v: y / height, rg: this.rgY });
        } else {
            this.newValue.emit({ v: x / width, rg: this.rgX });
        }
        console.log(x);
    }

    move(event: any) {
        event.preventDefault();
        this.setCursor(event);
    }

    start(event: any) {
        this.setCursor(event);
        console.log('starting');
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
    }

    stop() {
                console.log('stopping');
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
    }

    getX(event: any): number {
        return (event.pageX !== undefined ? event.pageX : event.touches[0].pageX) - this.el.nativeElement.getBoundingClientRect().left - window.pageXOffset;
    }
    getY(event: any): number {
        return (event.pageY !== undefined ? event.pageY : event.touches[0].pageY) - this.el.nativeElement.getBoundingClientRect().top - window.pageYOffset;
    }
}