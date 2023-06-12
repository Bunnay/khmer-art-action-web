export default function History() {
  return (
    <>
      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>

        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h2 className="text-lg font-semibold text-primary leading-8 mb-3 tracking-tight">
                  History
                </h2>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Our history
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
                  We were founded in 1998 by genocide survivor and musician ARN
                  Chorn-Pond. For the first decade, we focused on reviving
                  endangered traditional performing arts.
                </p>

                <p className="relative mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
                  Over the last 20 years, we have focused on supporting the
                  potential of people to develop and sustain their careers in
                  the arts, through scholarships, fellowships, and support to
                  troupes and classes.
                </p>

                <p className="relative mt-6 text-lg leading-8 text-gray-400 sm:max-w-md lg:max-w-none">
                  After two decades, we have fully evolved our role as a
                  grantmaker and catalyst in strengthening creativity and
                  expression through different types of grants and commissioning
                  new works to develop a healthy arts ecosystem.
                </p>
              </div>

              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <picture>
                      <img
                        src="https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </picture>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <picture>
                      <img
                        src="https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/04/Cover-Page_25th-Years-01-1-scaled.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </picture>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <picture>
                      <img
                        src="https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2022/12/CLA-SUPPORTER.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </picture>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <picture>
                      <img
                        src="https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </picture>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <picture>
                      <img
                        src="https://www.cambodianlivingarts.org/en/wp-content/uploads/sites/2/2023/01/DSC09023-scaled.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                    </picture>
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
