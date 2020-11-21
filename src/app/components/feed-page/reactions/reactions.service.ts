import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { Reaction } from './reactions.model';
import { Router } from "@angular/router";


@Injectable({ providedIn: "root" })
export class ReactionService {

  constructor(private http: HttpClient, private router: Router) { }

  countReactions(id: string) {
    return this.http.get<{ postId: string , emote: string}>("http://localhost:3000/api/reactions/posts/" + id);
  }
}
