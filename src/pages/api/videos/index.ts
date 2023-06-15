import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { videoValidationSchema } from 'validationSchema/videos';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getVideos();
    case 'POST':
      return createVideo();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVideos() {
    const data = await prisma.video
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'video'));
    return res.status(200).json(data);
  }

  async function createVideo() {
    await videoValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.interaction?.length > 0) {
      const create_interaction = body.interaction;
      body.interaction = {
        create: create_interaction,
      };
    } else {
      delete body.interaction;
    }
    const data = await prisma.video.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
