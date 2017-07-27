import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _user_url = '/user';

  private _refresh_token_url = '/refresh';

  private _login_url = '/login';

  private _logout_url = '/logout';

  private _change_password_url = '/changePassword';

  private _whoami_url = this._user_url + '/whoami';

  private _users_url = this._user_url + '/all';

  private _foo_url = '/foo';

  get refresh_token_url(): string {
      return this._refresh_token_url;
  }

  get whoami_url(): string {
      return this._whoami_url;
  }

  get users_url(): string {
      return this._users_url;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get change_password_url(): string {
      return this._change_password_url;
  }

  get foo_url(): string {
      return this._foo_url;
  }

}
