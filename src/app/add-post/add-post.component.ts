import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostPayload } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm?: FormGroup;
  postPayload?: PostPayload;
  title = new FormControl('');
  body = new FormControl('');



  constructor() { 
    this.addPostForm = new FormGroup(
      {
        title: this.title,
        body: this.body
      }
    )

    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''

    }
  }



  ngOnInit(): void {
  }

  addPost() {
    this.postPayload!.content = this.addPostForm?.get('body')?.value;
    this.postPayload!.title = this.addPostForm?.get('title')?.value;
  }

}
