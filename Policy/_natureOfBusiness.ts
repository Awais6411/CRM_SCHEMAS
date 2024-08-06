interface RetailsStore {
  installation: string;
  off_premises: string;
}
export interface _natureOfBusiness_policy {
  nature_of_business: string;
  other: string;
  date_business_started: string;
  description_of_primary_operation: string;
  retails_store: RetailsStore;
  description_of_operation_other_named_insured: string;
}

// table RetailsStore {
//   id integer
//   installation varchar,
//   off_premises varchar
// }

// table _natureOfBusiness_policy {
//   id integer
//   nature_of_business varchar,
//   other varchar,
//   date_business_started varchar,
//   description_of_primary_operation varchar,
//   description_of_operation_other_named_insured varchar
//   retails_store integer
// }

// Ref:_natureOfBusiness_policy.retails_store - RetailsStore.id
