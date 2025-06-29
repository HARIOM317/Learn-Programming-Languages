interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // json data
    const posts: Post[] = await response.json();

    return posts;
  } catch (error) {
    console.log("Error :", error);
    throw new Error("weak internet connection!");
  }
}

fetchPosts()
  .then((data) => {
    console.log("Posts :", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
