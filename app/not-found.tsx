import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
        <h2 className="md:text-md text-sm">OOPS! PAGE NOT FOUND</h2>
        <h2 className="text-5xl font-bold md:text-9xl">404</h2>
        <h4 className="text-md px-10 text-center md:text-xl">
          WE ARE SORRY BUT THE PAGE YOU REQUESTED FOR WAS NOT FOUND!
        </h4>
        <Link href="/" className="mt-10 rounded-full border-2 border-blue px-4 py-2 font-bold">
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
