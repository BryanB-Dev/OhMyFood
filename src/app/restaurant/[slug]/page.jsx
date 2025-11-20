import Image from "next/image";
import { notFound } from "next/navigation";
import restaurantsData from "@/data/restaurants.json";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";

export default async function RestaurantPage({ params }) {
  // Récupération asynchrone des params
  const { slug } = await params;
  
  // Recherche du restaurant par slug
  const restaurant = restaurantsData.restaurants.find(r => r.slug === slug);
  
  // Si le restaurant n'existe pas, déclencher la page 404
  if (!restaurant) {
    notFound();
  }

  return (
    <div>
      {/* Image hero du restaurant */}
      <div className="heroImage">
        <Image 
          src={restaurant.image} 
          alt={`${restaurant.name} restaurant`}
          fill
          className="image"
          priority
        />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          {/* Header avec nom et coeur */}
          <RestaurantHeader name={restaurant.name} />

          {/* Menu */}
          <div className="menu">
            {/* Section Entrées */}
            <section>
              <h2 className="sectionTitle">Entrées</h2>
              {restaurant.menu.entrées.map((item, index) => (
                <MenuItem
                  key={`entree-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </section>

            {/* Section Plats */}
            <section>
              <h2 className="sectionTitle">Plats</h2>
              {restaurant.menu.plats.map((item, index) => (
                <MenuItem
                  key={`plat-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </section>

            {/* Section Desserts */}
            <section>
              <h2 className="sectionTitle">Desserts</h2>
              {restaurant.menu.desserts.map((item, index) => (
                <MenuItem
                  key={`dessert-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </section>
          </div>

          {/* Bouton Commander */}
          <button className="orderButton">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}