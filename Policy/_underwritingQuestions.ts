import { VALUE_TYPE } from "../_typo";

export interface _underwritingQuestions_policy {
  question: string;
  answered: boolean;
  occurrence_date: string;
  explation: string;
  resolution_description: string;
  number_of: VALUE_TYPE;
  answer_amount: VALUE_TYPE;
  answer_choice_id: VALUE_TYPE;
  answer: string;
}

// table _underwritingQuestions_policy {
//   id integer
//   question varchar,
//   answered bool,
//   occurrence_date varchar,
//   explation varchar,
//   resolution_description varchar,
//   number_of varchar,
//   answer_amount varchar,
//   answer_choice_id varchar,
//   answer varchar
// }
