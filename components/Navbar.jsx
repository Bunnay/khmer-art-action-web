import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartPieIcon,
  ClipboardIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/img/khmer_art_action.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 bg-background border rounded-xl border-gray-700/50 mx-5 mt-5">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-4">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <Image
                        className="block h-20 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <Image
                        className="hidden h-20 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex">
                    <Link
                      href="/about-us"
                      className={
                        router.asPath == "/about-us"
                          ? "flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                          : "flex items-center rounded-lg px-2 h-8 text-sm font-medium text-white"
                      }
                    >
                      <UserIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                      About us
                    </Link>
                    <Link
                      href="/events"
                      className={
                        router.asPath == "/events"
                          ? "flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                          : "flex items-center rounded-lg px-2 h-8 text-sm font-medium text-white"
                      }
                    >
                      <CalendarIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                      />
                      Events
                    </Link>
                    <Link
                      href="/contact-us"
                      className={
                        router.asPath == "/contact-us"
                          ? "flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                          : "flex items-center rounded-lg px-2 h-8 text-sm font-medium text-white"
                      }
                    >
                      <PhoneIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                      Contact Us
                    </Link>
                    <Link
                      href="/gallery"
                      className={
                        router.asPath == "/gallery"
                          ? "flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                          : "flex items-center rounded-lg px-2 h-8 text-sm font-medium text-white"
                      }
                    >
                      <CalendarIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                      />
                      Gallery
                    </Link>
                    <Link
                      href="/admin/dashboard"
                      className={
                        router.asPath == "/dashboard"
                          ? "flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                          : "flex items-center rounded-lg px-2 h-8 text-sm font-medium text-white"
                      }
                    >
                      <ChartPieIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                      />
                      Dashboard
                    </Link>
                  </div>
                </div>

                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden lg:ml-4 lg:block">
                  <div className="flex items-center">
                    <Link
                      href="/donate-us"
                      className="flex items-center rounded-lg px-2 h-8 bg-primary text-sm font-medium text-white"
                    >
                      <HeartIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                      Donate Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Disclosure.Button
                  as="a"
                  href="/about-us"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white"
                >
                  About Us
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/events"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Events
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/contact-us"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contact Us
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/gallery"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Gallery
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/donate-us"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Donate Us
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
