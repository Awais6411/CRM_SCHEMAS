interface Comments {
  user_ref: String;
  created_at: Date;
  comment: String;
}

export default interface Note {
  title: String;
  create_task: Boolean;
  add_to_important_notes: Boolean;
  customer_ref: String; // Customer Ref ID
  created_ref: String; // Agent/customer Ref ID
  comments: Comments[];
  assoicate_policy: String;
  ref_id: string;
}

/* table Note {
  id integer
title  varchar
create_task bool
add_to_important_notes bool
} */
