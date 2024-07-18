import { BaseModel } from 'sjs-base-model';
export default class MasterModel extends BaseModel {
  statusCode = null;
  statusMessage = null;
  timeinMillis = null;
  guestCount = 0;
  data = [];
  sysUserData = null;

  constructor(data) {
    super();
    this.update(data);
  }
}
