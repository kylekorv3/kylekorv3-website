import * as Yup from 'yup';

const mailSchema = Yup.object({
  subject: Yup.string().required("Subject Required !"),
  body: Yup.string().required("Body Required !"),
});

export default mailSchema;
