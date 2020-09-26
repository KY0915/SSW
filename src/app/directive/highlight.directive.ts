/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight') highlightColor: string;

  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    let originalEle = this.el.nativeElement;
    if (originalEle.classList.contains('clicked-2')) {
      originalEle.classList.remove('clicked-2');
    } else {
      originalEle.classList.add('clicked-2');
    }
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
