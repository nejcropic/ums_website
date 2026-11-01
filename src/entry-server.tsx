import { renderToReadableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
export { origin, pages } from "./seo";

export async function render(pathname: string) {
  let renderError: unknown;
  const stream = await renderToReadableStream(
    <StaticRouter location={pathname}><App prerendered /></StaticRouter>,
    { onError(error) { renderError = error; } },
  );
  // Wait for lazy routes instead of exporting their loading placeholders.
  await stream.allReady;
  const html = await new Response(stream).text();
  if (renderError) throw renderError;
  return html;
}
