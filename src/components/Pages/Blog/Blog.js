import React from 'react';

const Blog = () => {
  return (
    <section className="py-10  dark:text-white dark:bg-[#2e2e2e]">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 lg:w-2/4  dark:text-white dark:bg-[#2e2e2e]">
        <h2 className="text-2xl my-5 text-center font-semibold text-blue-600 sm:text-4xl">Blogs</h2>

        <div className="space-y-4">
          <details className="w-full dark:bg-[#1a1a1a] border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold"> What is cors?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900 dark:text-gray-100">The CORS Policy Enables Cross-origin resource sharing (CORS) in Express Gateway. CORS defines a way in which a browser and server can interact and determine whether or not it is safe to allow a cross-origin request. </p>
          </details>
          <details className="w-full border dark:bg-[#1a1a1a] rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">Why are you using firebase? What other options do you have to implement authentication?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900 dark:text-gray-100">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
              Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>
          </details>
          <details className="w-full border dark:bg-[#1a1a1a] rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold"> How does the private route work?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900 dark:text-gray-100">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utility folder .</p>
          </details>
          <details className="w-full border dark:bg-[#1a1a1a] rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold"> What is Node? How does Node work?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900 dark:text-gray-100">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable,lightweight, fast, and data-intensive.</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;