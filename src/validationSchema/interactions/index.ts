import * as yup from 'yup';

export const interactionValidationSchema = yup.object().shape({
  type: yup.string().required(),
  end_user_id: yup.string().nullable().required(),
  video_id: yup.string().nullable().required(),
});
