# Minimal reproduction repo for Storybook hot reload issue

This repo is used as a minimal reproduction repository for a Storybook issue.

## Issue

If a hot reload occurs any component that is wrapped via addDecorator will be 'gone'. If you're using things like contexts that could crash your Storybook completely, and you need to refresh to recover from it. This **ONLY** occurs if you provide your stories config via main.js. If you move that config back to preview.js via `configure`, everything works fine.

## How to reproduce

- Start Storybook via `npm run storybook`
- Check the example story
- See that the background is red, and that the context has a value of `"initial value"`.
- Open `test.jsx` and change for example the text inside the div, so a hot reload occurs
- See the error `Cannot read property 'value' of null`
- You could also comment out the usage of the context inside `test.jsx` and see that if it hot reloads the red div would also be gone.

- Now remove the `stories` entry from `main.js` and enable the `configure` line in `preview.js`. Restart Storybook and follow the exact same steps defined above, and notice that this problem doesn't occur.