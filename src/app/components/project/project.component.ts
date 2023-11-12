import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DirtyComponent } from '../../interfaces';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnsavedDataConfirmModal } from '../modals';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule, UnsavedDataConfirmModal],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit, DirtyComponent {
  public projectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: new FormControl('The Water is Gold'),
      country: new FormControl('Bolivia'),
      isImportant: new FormControl(true)
    });
  }

  isDirty(): boolean {
    // Here you have to define what "dirty" means for your application.
    return this.projectForm.dirty;
  }
}
