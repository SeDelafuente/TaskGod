import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: false
})
export class PopoverComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() onSave: (value: number) => void = () => {};

  save() {
    if (this.onSave) {
      this.onSave(this.value);
    }
  }
}
