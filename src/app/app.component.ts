import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Quill from 'quill';

const font = Quill.import('formats/font')

font.whitelist = ['sans serif', 'serif', 'monospace', 'Bamini', 'FMSamantha' ]
Quill.register(font, true)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  editorForm: FormGroup;
  modules = {}
  title = 'WYSIWYG-editor';
  content = ''
  editorModel = [{
    attributes: {
      font: 'sans serif'
    },
    insert: 'test'
  }]

  constructor(){
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    })
  }

  onSubmit(){
    alert(this.editorForm.get('editor')?.value)
    console.log(this.editorForm.get('editor')?.value)
  }
}
