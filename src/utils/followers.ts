export const humanizeFollowers = (followers: number) => {
  if (followers < 1000) {
    return followers;
  }
  if (followers >= 1000 && followers <= 1000000) {
    return `${Math.round(followers / 1000)}K`;
  }
  return `${Math.round((followers / 1000000) * 10) / 10}m`;
};
