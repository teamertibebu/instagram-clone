const sortPosts = (setPosts, data) => {
  console.log('SET POSTS', typeof setPosts);
  data.forEach((post) => {
    post.createdAt = new Date(post.createdAt);
  });

  data = data.sort((a, b) => {
    const timeB = b.createdAt.getTime();
    const timeA = a.createdAt.getTime();

    return timeB - timeA;
  });

  setPosts(data);
};

export default sortPosts;
