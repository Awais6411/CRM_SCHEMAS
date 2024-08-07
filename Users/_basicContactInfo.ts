export interface _phoneNumberSchema {
  phone_no: String;
  type: String;
  is_primary: boolean;
}
export interface _emailSchema {
  email_address: String;
  type: String;
  is_primary: boolean;
}

export interface _basicContactInfo {
  user_id: String;
  contact_id: String;
  phone_numbers: [_phoneNumberSchema];
  emails: [_emailSchema];
}
