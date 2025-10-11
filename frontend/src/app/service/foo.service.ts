import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  getFoo() {
    return this.apiService.get(this.config.fooUrl);
  }

}
