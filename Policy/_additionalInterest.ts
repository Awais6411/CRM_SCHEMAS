import { VALUE_TYPE } from "../_typo";
interface _evidence_interest {
  certificate: boolean;
  policy: boolean;
  send_bill: boolean;
}
interface InterestNameAndAddress {
  name: string;
  street_address: string;
  apt: string;
  address_line: string[];
  country: string;
  city: string;
  province: string;
  county: string;
  zip: string;
  interest_phone: VALUE_TYPE;
  alternative_phone: VALUE_TYPE;
  policy_date_required: string;
  certificate_date: string;
  interest_end_date: string;
  percentage_of_interest: string;
  lien_amount: string;
  worker_compensation_coverage: string;
  evidence: _evidence_interest;
}

interface InterestInItemNo {
  location: string;
  building: string;
  vehicle: string;
  boat: string;
  item_class: string;
  item: string;
  item_description: string;
}

interface Interest {
  interest: string;
  description: string;
  interest_is_payor: boolean;
  information_billing: boolean;
  rank: string;
  policy_frequency: string;
  policy_required: string;
  reference: string;
  certificate_frequency: string;
  certificate_required: string;
  billing_frequency: string;
}

export interface _additionalInterest_policy {
  interest: Interest;
  name_and_address: InterestNameAndAddress;
  interest_in_item_no: InterestInItemNo;
}

// table _evidence_interest {
//   id integer
//   certificate bool,
//   policy bool,
//   send_bill bool
// }

// table InterestNameAndAddress {
//   id integer
//   name varchar,
//   street_address varchar,
//   apt varchar,
//   address_line varchar[], -
//   country varchar,
//   city varchar,
//   province varchar,
//   county varchar,
//   zip varchar,
//   interest_phone integer
//   alternative_phone integer
//   policy_date_required varchar,
//   certificate_date varchar,
//   interest_end_date varchar,
//   percentage_of_interest varchar,
//   lien_amount varchar,
//   worker_compensation_coverage varchar,
//   evidence integer
// }

// Ref:InterestNameAndAddress.interest_phone - VALUE_TYPE.id
// Ref:InterestNameAndAddress.alternative_phone - VALUE_TYPE.id
// Ref:InterestNameAndAddress.evidence - _evidence_interest.id

// table InterestInItemNo {
//   id integer
//   location varchar,
//   building varchar,
//   vehicle varchar,
//   boat varchar,
//   item_class varchar,
//   item varchar,
//   item_description varchar
// }

// table Interest {
//   id integer
//   interest varchar,
//   description varchar,
//   interest_is_payor bool,
//   information_billing bool,
//   rank varchar,
//   policy_frequency varchar,
//   policy_required varchar,
//   reference varchar,
//   certificate_frequency varchar,
//   certificate_required varchar,
//   billing_frequency varchar
// }

// table _additionalInterest_policy {
//   id integer
//   interest integer
//   name_and_address integer
//   interest_in_item_no integer
// }

// Ref:_additionalInterest_policy.interest - Interest.id
// Ref:_additionalInterest_policy.name_and_address - InterestNameAndAddress.id
// Ref:_additionalInterest_policy.interest_in_item_no - InterestInItemNo.id
