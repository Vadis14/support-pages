import axios from "axios";

const API_URL =
  "https://content.whitebird.io/api/main-faqs/?locale[0]=ru&sort[0]=Order%3Aasc&populate[questions][sort][0]=Order%3Aasc";
const TOKEN =
  "4fd2da866cbc534f89633d430ca95d5c5e34830b9e8b6a3c0d510c19dff3a8ca9082e89f23948b5a7a81e15b8cc4bbbd9b8dd9dc90e55b6eaa4cd3de8edc8e4736afdbe4fce1fe70dcc92e88551a89fbf42d3b4a83c62662b34c8869fb1d05ce58c09f5d973d23a7ab7b7ddbf64a96ea8881cd6b394338c2b73e42073f01bbda";

export const getFAQ = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const questions = response.data.data[0].attributes.questions.data.map(
    (question: { attributes: { Caption: string; Text: string } }) => {
      return {
        caption: question.attributes.Caption,
        text: question.attributes.Text,
      };
    },
  );
  console.log(questions);
  return {
    questions: questions,
  };
};
