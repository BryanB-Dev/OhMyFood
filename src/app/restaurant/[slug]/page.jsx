export default function RestaurantPage({ params }) {
  return (
    <div>
      <h1>Restaurant: {params.slug}</h1>
      <p>Voici la page du restaurant avec le slug: {params.slug}</p>
    </div>
  );
}