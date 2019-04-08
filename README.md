# San Diego JS React Monthly Demo

A quick data fetching demo, illustrates data fetching with classes, hooks, and suspense. Includes code-splitting with React _lazy_, Concurrent mode, and both Data and Image fetching using suspense.

### Usage

the options are displayed on the main page, both classes and hooks work in virtually the same way, they are both loading data on mount and imperatively so if things don't come through in a timely manner, you can see a small _'jump'_ on the loader. By contrast, using Suspense, not only do we reduce the code boilerplate even further, but allows us to treat the data as if it was a synchronous operation, it will use the algebraic effect of an error boundary to find the nearest fallback up its tree and wait until everything is ready to render taking advantage of concurrent mode.

If you open the suspense example page, you will notice it caches the data, this prevents unnecesary re-renders and provides a faster response to user interaction.
The hooks based example will always evaluate if it should load or not the fallback UI, and even if its a split second a flash of loading state will be displayed, giving a bad UX even if the timing is identical to the Concurrent Suspense implementation.
You can put this to the test by re-loading the tabs multiple times, the hooks based fetch will always have a spinner, even if it doesn't need one, the Suspense implementation will avoid flashing a spinner if it can get the content before the next render.

Suspense data fetching and hooks are not mutually exclusive, there are valid scenarios for using both like controlled inputs, an example can be found on this demo as well.