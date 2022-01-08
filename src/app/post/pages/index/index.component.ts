import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import {MatTable} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'id', 'title', 'body','Accion'];
posts:Post[]=[]
dataSource=new MatTableDataSource()
constructor(public postService:PostService) { }

  ngOnInit(): void {
this.postService.getAll().subscribe((data:any)=>{
  //this.dataSource= new MatTableDataSource(data);
  //this.dataSource.data=data
  this.dataSource.data=data
  console.log(this.dataSource.data)
})
  }
delete(id:number){
  this.postService.delete(id).subscribe(data=>{
    console.log('registro borrado')
  })
}
}
