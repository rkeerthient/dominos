import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@headlessicons/react";
import * as React from "react";

const Hours = ({ hours, title }) => {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="button"
              className="flex justify-between w-full p-4 bg-gray-300 hover:bg-gray-400"
            >
              <span>{title}</span>
              <ChevronUpIcon
                className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className={`${open ? "block" : "hidden"} p-4`}>
              <p>{hours}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
