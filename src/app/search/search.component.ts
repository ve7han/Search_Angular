import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  post:any={
    id:null
  }
  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigateByUrl('view/' + this.post.id)
    // this.post.id = null




  }

}
