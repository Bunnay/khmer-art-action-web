import Section from "../components/Section";
import Card from "../components/Card";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Guest from "../components/Layouts/Guest";

const events = [
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/04/Cover-Page_25th-Years-01-1-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/12/CLA-SUPPORTER.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },

  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
  {
    image:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/02/DSC07153-scaled.jpg",
    name: "Khmer Art Action",
    location: "Paragon International University",
    time: "10:00 AM - 11:00 AM",
    date: "10 April 2023",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of like.",
  },
];

export default function Events() {
  return (
    <Guest>
      <Section>
        <div className="mx-auto max-w-7xl">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Upcoming Events
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className="py-6 sm:py-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-8 sm:rounded-2xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {events.map((event) => (
                  <Card key={event.name}>
                    <div className="relative">
                      <picture>
                        <img
                          className="object-cover h-48 w-full rounded-t-xl"
                          src={event.image}
                          alt={event.name}
                        />
                      </picture>
                      <div className="absolute inset-x-0 z-10 top-0 flex h-72 items-start justify-start">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black opacity-75 rounded-t-xl"
                        />
                        <p className="relative text-sm top-6 rounded-r-lg px-2 py-1 bg-primary/75">
                          {event.date}
                        </p>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="font-bold text-lg mb-2">{event.name}</div>
                      <div className="space-y-1">
                        <div className="flex text-gray-500">
                          <MapPinIcon
                            className="h-4 w-4 mr-2"
                            aria-hidden="true"
                          />
                          <small>{event.location}</small>
                        </div>
                        <div className="flex text-gray-500">
                          <CalendarIcon
                            className="h-4 w-4 mr-2"
                            aria-hidden="true"
                          />
                          <small>{event.time}</small>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm h-16 mt-3 text-ellipsis line-clamp-3">
                        {event.description}
                      </p>

                      {/* <button className="flex flex mt-5 text-sm text-gray-400 justify-center items-center w-full bg-gray-700 ring-1 ring-gray-600 rounded-lg py-2 px-3">
                        <CalendarIcon
                          className="h-4 w-4 mr-2"
                          aria-hidden="true"
                        />
                        Buy ticket
                      </button> */}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Guest>
  );
}
