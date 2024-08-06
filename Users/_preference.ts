import { _emailSetup } from "./_emailSetup";
import { _system } from "./_system";

export interface _preference {
  system: _system;
  Signatures: string;
  email_setup: _emailSetup;
  email_signature: String;
  user_id: String;
}
