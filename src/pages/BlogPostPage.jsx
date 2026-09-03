import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/posts.json")
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts.find((p) => p.slug === slug) ?? null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-ink/50">Loading...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-ink/70">Post not found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Helmet>
        <title>{post.title}</title>
        <meta
        name="description"
        content={post.excerpt}/>
      </Helmet>
      <h1 className="font-display text-3xl text-ink">{post.title}</h1>
      <p className="mt-6 text-ink/80 leading-relaxed">{post.content}</p>
    </main>
  );
}
