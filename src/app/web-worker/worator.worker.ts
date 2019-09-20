/// <reference lib="webworker" />

addEventListener('message', ({data}) => {
  const up = (data as string).toUpperCase();
  const response = `worker response: ${up}`;
  const timeoutId = setTimeout(() => {
    postMessage(response);
    return () => clearTimeout(timeoutId);
  }, 5000);
});
