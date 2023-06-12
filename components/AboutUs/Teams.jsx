import Section from "../Section";
import Card from "../Card";

const people = [
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/11/Vattei-2.jpg",
    name: "Bunnay Mao",
    position: "Administrative Assistant",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/11/Vattei-2.jpg",
    name: "Bunnay Mao",
    position: "Administrative Assistant",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/11/Vattei-2.jpg",
    name: "Bunnay Mao",
    position: "Administrative Assistant",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/11/Vattei-2.jpg",
    name: "Bunnay Mao",
    position: "Administrative Assistant",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/11/Vattei-2.jpg",
    name: "Bunnay Mao",
    position: "Administrative Assistant",
  },
];

export default function Teams() {
  return (
    <Section title="Teams" text="Meet our teams">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-6 sm:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:rounded-2xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {people.map((person) => (
                <Card key={person.name}>
                  <picture>
                    <img
                      className="object-cover h-96 w-full rounded-t-xl"
                      src={person.image}
                      alt={person.name}
                    />

                    <div className="p-4">
                      <div className="font-bold text-lg mb-2">
                        {person.name}
                      </div>
                      <p className="text-gray-500 text-base">
                        {person.position}
                      </p>
                    </div>
                  </picture>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
