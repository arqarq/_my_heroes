/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  const up = (data as string).toUpperCase();
  const response = `worker response: ${up}`;
  postMessage(response);
});
