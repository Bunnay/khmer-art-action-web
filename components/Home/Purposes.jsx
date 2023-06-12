import Card from "../Card";
import Section from "../Section";

const posts = [
  {
    title: "Our Belief",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of  like to",
    imageUrl:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg",
  },
  {
    title: "Our Mission",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of  like to",
    imageUrl:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/04/Cover-Page_25th-Years-01-1-scaled.jpg",
  },
  {
    title: "Our Vision",
    description:
      "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and he participants and all of  like to ",
    imageUrl:
      "https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/12/CLA-SUPPORTER.jpg",
  },
];

const header = {
  title: "Our Purposes",
  text: "What We Stand For",
  description:
    "The collaboration of spoken-theater performance was so great. And we would like to thank all of the participants and performers both.",
};

export default function Header() {
  return (
    <Section title={header.title} text={header.text}>
      <div className="px-12 lg:px-12">
        <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Card image={post.imageUrl} key={post.title}>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-primary">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 h-36 text-ellipsis line-clamp-6">
                    {post.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
