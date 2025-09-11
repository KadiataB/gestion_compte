import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compte-add',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './compte-add.component.html',
  styleUrl: './compte-add.component.css'
})
export class CompteAddComponent {

}
