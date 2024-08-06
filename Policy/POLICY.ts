import { _additionalInfo_policy } from "./_additionalInfo";
import { _binderInfo_policy } from "./_binderInfo";
import { _extendedPolicyInfo_policy } from "./_extendedPolicyInfo";
import { _locationSchedule_policy } from "./_locationSchedule";
import { _namedInsuredInfo_policy } from "./_namedInsuredInfo";
import { _paymentPlan_policy } from "./_paymentPlan";
import { _policyInfo_policy } from "./_policyInfo";
import { _additionalInterest_policy } from "./_additionalInterest";
import { _natureOfBusiness_policy } from "./_natureOfBusiness";
import { _policyAttachment_policy } from "./_policyAttachment";
import { _policyForm_policy } from "./_policyForm";
import { _priorPolicyInfo_policy } from "./_priorPolicyInfo";
import { _underwritingQuestions_policy } from "./_underwritingQuestions";
import { _generalLiabilityUnderwriting_policy } from "./_generalLiabilityUnderwriting";
import { _commercialAdditionalInfo_policy } from "./_commercialAdditionalInfo";
import { _contractorUnderwriting_policy } from "./_contractorUnderwriting";
import { _products_policy } from "./_products";

interface Fee {
  fee_name: string;
  amount: string;
}

export interface Policy {
  policy_type: string;
  line_of_business: string;
  effective_date: string;
  policy_number: string;
  term: string;
  estimated_premium: string;
  customer_id: string; //Ref Customer
  status: string;
  named_insureds: _namedInsuredInfo_policy[];
  binder_info: _binderInfo_policy;
  policy_info: _policyInfo_policy;
  additional_info: _additionalInfo_policy;
  extended_policy_info: _extendedPolicyInfo_policy;
  agency_fees: Fee[];
  payment_plan: _paymentPlan_policy;
  location_schedule: _locationSchedule_policy[];
  additional_interest: _additionalInterest_policy[];
  nature_of_business: _natureOfBusiness_policy;
  policy_attachments: _policyAttachment_policy[];
  policy_form: _policyForm_policy[];
  prior_policy_info: _priorPolicyInfo_policy;
  underwriting_questions: _underwritingQuestions_policy[];
  general_liability_underwriting: _generalLiabilityUnderwriting_policy;
  commercial_lane_additional_info: _commercialAdditionalInfo_policy;
  contractor_underwriting: _contractorUnderwriting_policy;
  completed_operations_underwriting: _products_policy;
  ref_id: string;
}

// table Fee {
//   id integer
//   fee_name varchar
//   amount varchar
// }

// table Policy {
//   id integer
//   policy_type varchar
//   line_of_business varchar
//   effective_date varchar
//   policy_number varchar
//   term varchar
//   estimated_premium varchar
//   customer_id varchar
//   status varchar

//   named_insureds: _namedInsuredInfo_policy[];
//   binder_info: _binderInfo_policy;
//   policy_info: _policyInfo_policy;
//   additional_info: _additionalInfo_policy;
//   extended_policy_info: _extendedPolicyInfo_policy;
//   agency_fees: Fee[];
//   payment_plan: _paymentPlan_policy;
//   location_schedule: _locationSchedule_policy[];
//   additional_interest: _additionalInterest_policy[];
//   nature_of_business: _natureOfBusiness_policy;
//   policy_attachments: _policyAttachment_policy[];
//   policy_form: _policyForm_policy[];
//   prior_policy_info: _priorPolicyInfo_policy;
//   underwriting_questions: _underwritingQuestions_policy[];
//   general_liability_underwriting: _generalLiabilityUnderwriting_policy;
//   commercial_lane_additional_info: _commercialAdditionalInfo_policy;
//   contractor_underwriting: _contractorUnderwriting_policy;
//   completed_operations_underwriting: _products_policy;
// }

// Ref:Policy.named_insureds - _namedInsuredInfo_policy.id
// Ref:Policy.binder_info - _binderInfo_policy.id
// Ref:Policy.policy_info - _policyInfo_policy.id
// Ref:Policy.additional_info - _additionalInfo_policy.id
// Ref:Policy.extended_policy_info - _extendedPolicyInfo_policy.id
// Ref:Policy.agency_fees - Fee.id
// Ref:Policy.payment_plan - _paymentPlan_policy.id
// Ref:Policy.location_schedule - _locationSchedule_policy.id
// Ref:Policy.additional_interest - _additionalInterest_policy.id
// Ref:Policy.nature_of_business - _natureOfBusiness_policy.id
// Ref:Policy.policy_attachments - _policyAttachment_policy.id
// Ref:Policy.policy_form - _policyForm_policy.id
// Ref:Policy.prior_policy_info - _priorPolicyInfo_policy.id
// Ref:Policy.underwriting_questions - _underwritingQuestions_policy.id
// Ref:Policy.general_liability_underwriting - _generalLiabilityUnderwriting_policy.id
// Ref:Policy.commercial_lane_additional_info - _commercialAdditionalInfo_policy.id
// Ref:Policy.contractor_underwriting - _contractorUnderwriting_policy.id
// Ref:Policy.completed_operations_underwriting - _products_policy.id
