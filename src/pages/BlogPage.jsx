import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Helmet>
        <title>Blog - Nomad Coffee Roaster </title>
        <meta
          name="description"
          content="More insite on Nomad Coffee and many insites on coffee" />
      </Helmet>
      <h1 className="font-display text-3xl text-ink">Journal</h1>
      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <h2 className="font-display text-xl text-ink">{post.title}</h2>
            <p className="mt-1 text-ink/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
