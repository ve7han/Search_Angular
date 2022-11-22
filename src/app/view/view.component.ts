import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id!: number;
  post!: Post;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.api.find(this.id).subscribe((data: any)=>{
      this.post = data;
      // this.route.snapshot.params['id'] = null
    });

  }


}
