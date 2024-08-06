interface security_policies {
  can_add_customer_policy: Boolean;
  can_modify_customer_policy: Boolean;
  can_delete_customer_policy: Boolean;
}

interface security_notes {
  can_add_notes: Boolean;
  can_modify_notes: Boolean;
  can_delete_notes: Boolean;
}

interface security_textMessages {
  can_send_text_messages: Boolean;
  can_delete_text_messages: Boolean;
}

interface security_tasks {
  can_add_tasks: Boolean;
  can_modify_tasks: Boolean;
  can_delete_tasks: Boolean;
}

interface security_userManagement {
  can_add_roles: Boolean;
  roles: Boolean;
  admins: Boolean;
  customers: Boolean;
  agents: Boolean;
}

interface Security_Permission {
  id: string;
  text_messages: security_textMessages;
  tasks: security_tasks;
  user_management: security_userManagement;
  notes: security_notes;
  policies: security_policies;
}

interface Management_Roles {
  name: String;
  type: string;
  description: string;
  permission: string; //Security_Permission ref id
}
