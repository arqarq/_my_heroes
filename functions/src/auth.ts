export class AuthService {
  admin: any;

  constructor(admin: any) {
    this.admin = admin;
  }

  public createToken(uid: string) {
    return this.admin.auth().createCustomToken(uid);
  }
}
