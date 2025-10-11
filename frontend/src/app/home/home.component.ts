import {Component, OnInit} from '@angular/core';
import {ConfigService, FooService, UserService} from '../service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  fooResponse = {};
  whoamIResponse = {};
  allUserResponse = {};

  constructor(
    private config: ConfigService,
    private fooService: FooService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  makeRequest(path) {
    if (path === this.config.fooUrl) {
      this.fooService.getFoo()
        .subscribe(res => {
          this.forgeResonseObj(this.fooResponse, res, path);
        }, err => {
          this.forgeResonseObj(this.fooResponse, err, path);
        });
    } else if (path === this.config.whoamiUrl) {
      this.userService.getMyInfo()
        .subscribe(res => {
          this.forgeResonseObj(this.whoamIResponse, res, path);
        }, err => {
          this.forgeResonseObj(this.whoamIResponse, err, path);
        });
    } else {
      this.userService.getAll()
        .subscribe(res => {
          this.forgeResonseObj(this.allUserResponse, res, path);
        }, err => {
          this.forgeResonseObj(this.allUserResponse, err, path);
        });
    }
  }

  forgeResonseObj(obj, res, path) {
    obj.path = path;
    obj.method = 'GET';
    if (res.status && res.status !== 200) {
      // Error response (401, 403, 500, etc.)
      obj.status = res.status;
      obj.body = JSON.stringify(res, null, 2);
    } else {
      // Success response (200)
      obj.status = 200;
      obj.body = JSON.stringify(res, null, 2);
    }
  }

}
