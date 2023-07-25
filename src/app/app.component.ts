import { Component } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comment } from './interfaces/comment';
import { User } from './interfaces/user';
import { ProductInfo } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title : string = "This is the my first angular application";

  number1: number =0;

  num2: number=0;

  isUnchanged: boolean= true;

  classes : string = "test";

  posts: Comment[] = [];

  users: User[] = [];

  mytest: string = "https://www.weltec.in/wp-content/uploads/2021/01/students1.jpg";

  
  myInfo : ProductInfo = {
    products : [],
  limit : 0,
  total :0,
  skip :0
  };
 

  constructor(private  d: CommentsService)
  {

  }
  
  ngOnInit() {

    this.d.getComments().subscribe((data: Comment[]) => {
      this.posts = data;
    })

    this.d.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })

    this.d.getProduct().subscribe((p: ProductInfo)=> {

      this.myInfo = p;

    })

  }
 

}
