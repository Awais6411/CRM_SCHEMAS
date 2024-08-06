export interface _paymentPlan_policy {
  plan_type: string;
  due_date: string;
  deposit_amount: string;
  down_payment_percentage: string;
  no_of_payments: string;
  no_of_month_between_payment: string;
  installment_fee: string;
  installment_percentage: string;
  amount_collected_by_agent: string;
  method_of_payment: string;
  payment_currency: string;
  next_term_payment_plan_type: string;
  required_deposit_amount: string;
  return_premium_mailed: string;
  return_premium_payee: string;
}

// table _paymentPlan_policy {
//   id integer
//   plan_type varchar,
//   due_date varchar,
//   deposit_amount varchar,
//   down_payment_percentage varchar,
//   no_of_payments varchar,
//   no_of_month_between_payment varchar,
//   installment_fee varchar,
//   installment_percentage varchar,
//   amount_collected_by_agent varchar,
//   method_of_payment varchar,
//   payment_currency varchar,
//   next_term_payment_plan_type varchar,
//   required_deposit_amount varchar,
//   return_premium_mailed varchar,
//   return_premium_payee varchar
// }
