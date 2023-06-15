import * as yup from 'yup';
import { interactionValidationSchema } from 'validationSchema/interactions';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  metadata: yup.string(),
  content_creator_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
  interaction: yup.array().of(interactionValidationSchema),
});
