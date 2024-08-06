interface _subLocation_policy {
  sub_location_no: string;
  sub_location_type_code: string;
  sqft: string;
  address_line: string[];
  city: string;
  province: string;
  county: string;
  zip: string;
  country: string;
  phone_no: string;
  latitude: string;
  longitude: string;
  range: string;
  horizon_code_ref_system_code: string;
  no_of_mortgagees: string;
  sub_location_description: string;
}

export interface _locationSchedule_policy {
  location: string;
  location_type: string;
  street_address: string;
  address_line: string[];
  city: string;
  state: string;
  county: string;
  zip: string;
  country: string;
  tax_code: string;
  town_code: string;
  description_of_operation: string;
  type_of_business: string;
  building_interest: string;
  sublocation: _subLocation_policy[];
}

// table _subLocation_policy {
//   id integer
//   sub_location_no varchar,
//   sub_location_type_code varchar,
//   sqft varchar,
//   address_line varchar
//   city varchar,
//   province varchar,
//   county varchar,
//   zip varchar,
//   country varchar,
//   phone_no varchar,
//   latitude varchar,
//   longitude varchar,
//   range varchar,
//   horizon_code_ref_system_code varchar,
//   no_of_mortgagees varchar,
//   sub_location_description varchar
// }

// table _locationSchedule_policy {
//   id integer
//   location varchar,
//   location_type varchar,
//   street_address varchar,
//   address_line varchar
//   city varchar,
//   state varchar,
//   county varchar,
//   zip varchar,
//   country varchar,
//   tax_code varchar,
//   town_code varchar,
//   description_of_operation varchar,
//   type_of_business varchar,
//   building_interest varchar,
//   sublocation integer
// }

// Ref:_locationSchedule_policy.sublocation - _subLocation_policy.id
