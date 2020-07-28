import * as yup from 'yup';

const jsonSchema = yup
  .object()
  .shape({
    galleryImages: yup
      .array(yup.object().shape({ url: yup.string().url().required() }))
      .required(),
  })
  .required();

const urlSchema = yup.string().url().required();

export { jsonSchema, urlSchema };
