export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  return {
    provide: {
      sayHello: (msg: String) => console.log(`Hello ${msg}`),
    },
  };
});
