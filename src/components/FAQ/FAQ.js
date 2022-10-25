import React, { useState } from 'react';

const FAQ = () => {
    const Item = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="border rounded shadow-sm">
            <button
              type="button"
              aria-label="Open item"
              title="Open item"
              className="flex items-center justify-between w-full p-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="text-lg font-medium">{title}</p>
              <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  className={`w-3 text-gray-600 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    points="2,7 12,17 22,7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="p-4 pt-0">
                <p className="text-gray-700">{children}</p>
              </div>
            )}
          </div>
        );
      };
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="232db96b-4aa2-422f-9086-5a77996d1df1"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span class="relative">Common</span>
                </span>{' '}
                question About the Peogramming Zone
              </h2>
              
            </div>
            <div class="space-y-4">
              <Item title="The quick, brown fox jumps over a lazy dog?">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </Item>
              <Item title="The first mate and his Skipper too will do?">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </Item>
              <Item title="Is the Space Pope reptilian!?">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </Item>
              <Item title="How much money you got on you?">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </Item>
            </div>
          </div>
        </div>
      );
};

export default FAQ;