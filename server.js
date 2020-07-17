const logEnv = () =>
  setInterval(
    () => console.log(`my secret env is ${process.env.verySecret}`),
    500
  );

logEnv();
