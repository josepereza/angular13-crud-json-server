import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id!:number;
post!:Post;
form!:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private postService:PostService
    ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      userId:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required]),
      body:new FormControl('',[Validators.required])
    })
    this.id=this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      console.log(data)
    this.form.patchValue({
      userId:data.userId,
      title:data.title,
      body:data.body
    })
    }); 
  }
actualizar(){
  this.postService.update(this.id,this.form.value).subscribe(data=>{
    this.router.navigateByUrl('post/index');
  })

}
}
