import { ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeHolder: string = "";
  @Input() label: string = "";
}
