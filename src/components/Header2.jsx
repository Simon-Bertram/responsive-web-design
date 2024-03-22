import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]

const Header2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:p-8">
          {/* Company branding */}
          <div className="flex lg:flex-1">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src="" alt="" />
            </a>
          </div>

          {/* Hamburger menu button */}
          <div className="flex lg:hidden">
            <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                onClick={() => setMobileMenuOpen(true)}
                className="h-8 w-8"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile navigation */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50">
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              {/* Company Branding */}
              <div className="flex justify-between">
                <a href="#">
                  <span>Your Company</span>
                  <img src="" alt="" />
                </a>
                <button onClick={() => setMobileMenuOpen(false)} type="button">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  {navigation.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* This is a container div with some padding and spacing */}

        <div className="absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          {/* This is a div with a background gradient that appears blurred and positioned absolutely */}

          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
          {/* This is a div with a complex clipping path and gradient background */}

          <div className="mx-auto max-w-xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:flex sm:justify-center sm:mb-8"></div>
          </div>
        </div>
        <div>
          <div className="relative px-3">
            Announcing the launch of our new website. Check back soon for
            updates!
            <a href="" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2
