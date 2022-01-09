import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
form!:FormGroup
  constructor(
    private postService:PostService ,
    private router:Router,
    private snackBar:MatSnackBar
  )
    { }

  ngOnInit(): void {
    this.form=new FormGroup({
      userId:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required, Validators.minLength(2)]),
      body:new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }
  get f(){
    return this.form.controls;
  }
crear(){
 this.postService.create(this.form.value).subscribe(data=>{
  this.snackBar.open('Agregado correctamente', 'Undo', {
    duration: 3000
  });
  
 })
}
pato(){
  console.log('esto es por pato')
}
isValid(campo:string){
  console.log(this.form.controls['title'])
   return this.form.controls[campo].errors && this.form.controls[campo].touched
    
}
volver(){
  this.router.navigateByUrl('post/index');
}
}
