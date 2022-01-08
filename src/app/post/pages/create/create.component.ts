import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
form!:FormGroup
  constructor(private postService:PostService ,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      userId:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required]),
      body:new FormControl('',[Validators.required])
    })
  }
crear(){
 this.postService.create(this.form.value).subscribe(data=>{
   console.log(data)
 })
}
}
