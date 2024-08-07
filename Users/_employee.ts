import { VALUE_TYPE } from "../_typo";

export interface _employee {
  company: String;
  title: String;
  street: String;
  apt_or_suite: String;
  city: String;
  state_or_province: String;
  country: String;
  zip_code: number;
  employer_web_page: String;
  industry: string;
  occupation: string;
  employed_from: string;
  employed_to: string;
  employee_first_name: string;
  employee_last_name: string;
  add_number: VALUE_TYPE;
  add_email: VALUE_TYPE;
  comments: String;
  contact_id: String;
}
