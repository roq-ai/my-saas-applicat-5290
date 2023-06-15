import * as yup from 'yup';
import { videoValidationSchema } from 'validationSchema/videos';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  video: yup.array().of(videoValidationSchema),
});
