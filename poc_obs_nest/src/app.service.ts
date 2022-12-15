import { Injectable } from '@nestjs/common';
// import crypto from 'node:crypto';
import * as crypto from 'crypto';

abstract class postUserSuccess {
  name: string;
  email: string;
  id: string;
}

abstract class postUserError {
  error: string;
  fields: {
    name: string;
    email: string;
  };
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postUser(name: string, email: string): postUserSuccess | postUserError {
    if (!name || !email) {
      return {
        error: 'fields requireds',
        fields: {
          name: name ? 'Name is required' : '',
          email: email ? 'Email is required' : '',
        },
      };
    }

    const user = {
      id: 'a' + crypto.randomBytes(16).toString('hex'),
      name,
      email,
    };

    return user;
  }
}
