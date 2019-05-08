import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { fromEventPattern } from 'rxjs';
import { MyserviceService } from '../../services/myservice.service';
import { User } from '../../model/model';
import { Title } from '@angular/platform-browser';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  posts: User[];
  post: User;
  canactive: boolean;
  constructor(private route: ActivatedRoute,
    private postService: MyserviceService,
    private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('status');
    console.log(id);
    this.postService.getPosts().subscribe(posts=> {
      console.log(posts);
    })
  }

  validate(email,password,event)
  {
    if(!email||!password)
    {
      alert('Please enter the fields');
    }

    if(email!="vasan@dnm.in"&&password!="hello")
    {
       this.canactive = true
       event.preventDefault();
    }
    if(email=="vasan@dnm.in"&&password=="hello")
    {
      this.postService.savePost({email,password} as User)
      .subscribe(post=>{this.post=post});

      this.router.navigate(['/home']);
    }

  }
}

