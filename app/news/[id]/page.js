export default function NewsDetailPage({ params }) {
  const newsID = params.id;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {newsID}</p>
    </>
  );
}
