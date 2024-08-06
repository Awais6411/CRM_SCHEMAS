export interface phoneNumberSchema {
  phone_no: String;
  type: String;
  is_primary: boolean;
}
export interface emailSchema {
  email_address: String;
  type: String;
  is_primary: boolean;
}

export interface BasicContactInfo {
  user_id: String;
  contact_id: String;
  phone_numbers: [phoneNumberSchema];
  emails: [emailSchema];
}
