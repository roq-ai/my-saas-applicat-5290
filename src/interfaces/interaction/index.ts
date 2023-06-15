import { UserInterface } from 'interfaces/user';
import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface InteractionInterface {
  id?: string;
  type: string;
  end_user_id: string;
  video_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video?: VideoInterface;
  _count?: {};
}

export interface InteractionGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  end_user_id?: string;
  video_id?: string;
}
