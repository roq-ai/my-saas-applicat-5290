import { InteractionInterface } from 'interfaces/interaction';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  url: string;
  metadata?: string;
  content_creator_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  interaction?: InteractionInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    interaction?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  url?: string;
  metadata?: string;
  content_creator_id?: string;
  organization_id?: string;
}
