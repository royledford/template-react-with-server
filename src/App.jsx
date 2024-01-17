import { use } from "chai";
import AuthProvider from "./providers/AuthProvider"
import Routes from "./routes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

export default function App() {

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn:  () => wait(1000).then(() => [...POSTS])
  })


  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>

  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
