import Section from "../components/Section";
import Guest from "../components/Layouts/Guest";

export default function Gallery() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Article",
        href: "#",
        color: "bg-indigo-500/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-red/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-red/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-red/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-red/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-red/50 text-gray-300",
      },
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Michael Foster",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <>
      <Guest>
        <Section>
          <div className="mx-auto max-w-7xl">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Gallery
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Checkout out the latest release of Basic Tees, new and improved
                with four openings!
              </p>
            </div>
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <picture>
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                  </picture>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.datetime} className="mr-8">
                      {post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        <div>
                          <span
                            className={classNames(
                              post.category.color,
                              "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                            )}
                          >
                            {post.category.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </Section>
      </Guest>
    </>
  );
}
