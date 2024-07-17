import uuid from 'uuid/dist/v4';

export default class HttpErrorResponseModel {
  id = uuid();
  status = 0;
  message = '';
  errors = [];
  url = '';
  raw = null;
}
