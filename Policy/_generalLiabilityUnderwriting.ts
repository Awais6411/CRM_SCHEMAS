interface Questions_underwriting {
  title: string;
  response_number: string;
  high_impact: boolean;
  response: string;
}
export interface _generalLiabilityUnderwriting_policy {
  medical_facilities: boolean;
  radioactive_exposure_code: boolean;
  hazardous_material_involved: boolean;
  operation_change: boolean;
  loaned_machinery: boolean;
  water_exposure: boolean;
  parking_facilities_ownership: boolean;
  parking_change_reason: boolean;
  recreation_facilities_provided: boolean;
  swimming_pool_premises: boolean;
  sporting_social_events_sponsored: boolean;
  structural_alteration_contemplated: boolean;
  demolition_exposure_contemplated: boolean;
  question: Questions_underwriting[];
}

// table Questions_underwriting {
//   id integer
//   title varchar,
//   response_number varchar,
//   high_impact boolean,
//   response varchar
// }

// table _generalLiabilityUnderwriting_policy {
//   id integer
//   medical_facilities bool,
//   radioactive_exposure_code bool,
//   hazardous_material_involved bool,
//   operation_change bool,
//   loaned_machinery bool,
//   water_exposure bool,
//   parking_facilities_ownership bool,
//   parking_change_reason bool,
//   recreation_facilities_provided bool,
//   swimming_pool_premises bool,
//   sporting_social_events_sponsored bool,
//   structural_alteration_contemplated bool,
//   demolition_exposure_contemplated bool,
//   question integer
// }

// Ref:_generalLiabilityUnderwriting_policy.question - Questions_underwriting.id
