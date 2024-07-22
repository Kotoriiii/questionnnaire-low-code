import { post } from "./ajax";
import { AnswerInfoType, ResponseType } from "./type";

export async function postAnswer(
  answerInfo: AnswerInfoType
): Promise<ResponseType> {
  const url = "/api/answer";
  const data = await post(url, answerInfo);
  return data;
}
