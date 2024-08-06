export interface Tasks {
  subject: String;
  details: String;
  contact: String;
  assigned_to: Array<String>; //Ref User
  policies: Array<String>;
  start_date: Date;
  end_date: Date;
  status: Boolean;
  priority: String;
  completion: Number;
  set_reminder: Boolean;
  ref_id: string;
}

// table Tasks {
//   id integer
//   subject varchar
//   details  varchar
//   contact  varchar
// }
