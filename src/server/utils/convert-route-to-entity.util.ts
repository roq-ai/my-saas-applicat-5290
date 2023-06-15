const mapping: Record<string, string> = {
  interactions: 'interaction',
  organizations: 'organization',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
