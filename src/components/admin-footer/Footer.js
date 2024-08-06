import { footerData } from "../../dates/jummy";
export default function Footer() {
  return (
    <div>
      <footer className="dark:bg-gray-900 bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              {footerData.newsletter.heading}
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  id="email"
                  type="email"
                  placeholder={footerData.newsletter.placeholder}
                />
                <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-custom-blue px-5 py-3 text-sm font-medium text-white transition hover:bg-hover-blue">
                  {footerData.newsletter.subscribeButton}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
                {footerData.footerText}
              </p>

              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                {footerData.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> {social.name} </span>
                    <i className={`${social.icon} text-xl w-6 h-6 text-center`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              {footerData.sections.map((section, index) => (
                <div key={index}>
                  <strong className="font-medium text-gray-900 dark:text-white">
                    {section.title}
                  </strong>
                  <ul className="mt-6 space-y-1">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-hover-blue"
                          href="$"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
              {footerData.footerCredits}
              <br />
              Created with
              {footerData.footerTech.map((tech, index) => (
                <div key={index}>
                  {index > 0 && ' and '}
                  <a
                    href={tech.url}
                    className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  >
                    {tech.name}
                  </a>
                </div>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}