export default interface Logs {
  created_at: Date;
  category: String;
  user_ref: String; // user who perform activity
  description: String;
  ref_id: string;
}

/* table Logs {
  id integer
  created_at date
  category varchar
  user_ref varchar  
  description varchar
 } */
