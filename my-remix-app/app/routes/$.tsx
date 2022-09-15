import type { LoaderFunction } from "@remix-run/node";
const EXPRESS_APP_URL = "http://localhost:3001";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const incomingURL = new URL(request.url);
    console.log(`[REMIX DEBUG]: incoming reques to: ${incomingURL.pathname}`);
    const proxiedURL = request.url.replace(incomingURL.origin, EXPRESS_APP_URL);
    console.log(
      `[REMIX DEBUG]: Making a request to other server located at: ${proxiedURL} since ${incomingURL.pathname} does not exist on our server (${incomingURL.host})`
    );
    const response = await fetch(proxiedURL); // fetch from the other server
    const bodyContent = (await response.text()).replace(
      EXPRESS_APP_URL,
      incomingURL.origin
    );

    return new Response(bodyContent, { headers: response.headers });
  } catch (error) {
    console.error(error);
    throw Error("Not found");
  }
};
