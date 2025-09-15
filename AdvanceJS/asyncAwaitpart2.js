function fetchPostdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data Fetch");
    }, 2000);
  });
}

function fetchCommentdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("comment data fetch");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data");
    // const blogdata = await fetchPostdata();
    // const commentData = await fetchCommentdata();
    const [postData, commentData] = await Promise.all([
      fetchPostdata(),
      fetchCommentdata(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching block data", error);
  }
}

getBlogData();
