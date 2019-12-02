import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      accountname: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.showHideCandidates()
  }

  showHideCandidates(){
    console.log(this.info)
    if(this.info.authorities[0] == 'ROLE_USER'){
      var element = document.getElementById("myCandidate");
      element.classList.add("hideCondidate");
    }
  }

}
