import ContactForm from "../components/contact";
import { BackspaceIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <>
      <div className="z-40 inset-0 fixed backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-branding-50 dark:bg-branding-800 bg-opacity-90">
        <div className="h-screen flex flex-grow justify-center items-center">
          <div className="bg-gray-100 rounded-md px-8 py-5 relative">
            <BackspaceIcon
              className="absolute right-2 top-3 w-8 h-8 p-1 hover:bg-coolGray-100 hover:bg-opacity-40 rounded cursor-pointer text-gray-600 hover:text-branding-200"
              onClick={() => history.back()}
            />
            <h1 className="text-2xl font-medium text-center text-gray-800">
              Contact Us!
            </h1>
            <h2 className="text-sm text-gray-500 text-center mb-6 lg:px-36">
              Drop us a note.
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
