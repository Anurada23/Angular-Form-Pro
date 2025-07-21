import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'name-editor',
  standalone: false,
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent {
  @Input() name: String = '';
  @Output() nameChange = new EventEmitter<String>()


  onNameChange(value: String) {
    this.nameChange.emit(value)

  }


}
