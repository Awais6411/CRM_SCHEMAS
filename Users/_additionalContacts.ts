import { VALUE_TYPE } from "../_typo";
export interface _additionalContacts {
  business_owner: Boolean;
  residency_type: String;
  comments: String;
  situation: String;
  nickname: String;
  first_name: String;
  middle_name: String;
  last_name: String;
  relationship_type: String;
  relationship_to_primary: String;
  street: String;
  apt_or_suite: String;
  city: String;
  state_or_province: String;
  country: String;
  zip_code: String;
  date_of_birth: String;
  marital_status: String;
  gender: String;
  social_security: String;
  driver_license_number: String;
  contact_web_page: String;
  industry: String;
  occupation: String;
  preferred_language: String;
  add_number: VALUE_TYPE;
  add_email: VALUE_TYPE;
  contact_id: String; //REF CONTACT or CUSTOMER
}
