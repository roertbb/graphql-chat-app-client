export const getUserId = location => {
  const receiverId = location.pathname.split('/');
  return Number(receiverId[receiverId.length - 1]);
};
