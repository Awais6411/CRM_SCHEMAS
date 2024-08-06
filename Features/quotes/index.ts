export default interface quotes {
  ref: String; //  It's ref will be Policy
  quote_number: Number;
  policy_ref: Number;
  quote_status: String;
  quote_sub_status: String;
  writing_carrier: String;
  mga_or_broker: String;
  parent_carrier: String;
  business_type: String;
  submission_date: Date;
  quote_expiration_date: Date;
  quoted_by: String;
  condition: String;
  premium_base: String;
  ref_id: string;
}
