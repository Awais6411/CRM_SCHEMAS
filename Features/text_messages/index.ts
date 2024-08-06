export default interface TextMessage {
  contact: String;
  phone_no: Number;
  attached: Array<String>;
  value: String;
  sender_ref: String; //User
  receiver_ref: String; //Contact // Do we require it or we can go with number only
  created_at: Date;
  ref_id: string;
}

/* table TextMessage {
  id integer
contact String
  phone_no Number;
  } */
