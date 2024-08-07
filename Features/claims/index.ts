interface Insured_vehicle {
  year: number;
  make: string;
  model: string;
  vin: string;
  vehicle_type: string;
}
interface Claim_parties {
  full_name: string;
  phone_number: string;
  email: string;
  party_type: string;
}
interface Claim_payments {
  date: string;
  check_number: string;
  amount: number;
  comments?: string;
}

export default interface Claims {
  claim_number: number;
  claim_status: string;
  claim_type: string;
  date_opened: string;
  date_of_loss: string;
  date_reported: string;
  created_by: string;
  coverage: string;
  date_closed?: string;
  disputed_suit_pending: boolean;
  chargeable_to_company: boolean;
  amount_of_loss: number;
  amount_salvaged: number;
  amount_reserved: number;
  amount_paid: number;
  location_street: string;
  location_city: string;
  location_state_province: string;
  location_zip_code: number;
  location_country: string;
  location_description: string;
  incident_description?: string;
  damage_description?: string;
  insured_vehicle: Insured_vehicle;
  claim_parties: Claim_parties[];
  claim_payments: Claim_payments[];
  ref_id: string;
}
