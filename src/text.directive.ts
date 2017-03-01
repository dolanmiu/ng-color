import { Component, OnChanges, Directive, Input, Output, ViewContainerRef, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgModule, Compiler, ReflectiveInjector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Directive({
    selector: '[text]',
    host: {
        '(input)': 'changeInput($event.target.value)'
    }
})
export class TextDirective {
    @Output('newValue') newValue = new EventEmitter<any>();
    @Input('text') text: any;
    @Input('rg') rg: number;

    changeInput(value: string) {
        if (this.rg === undefined) {
            this.newValue.emit(value);
        } else {
            let numeric = parseFloat(value)
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    }
}