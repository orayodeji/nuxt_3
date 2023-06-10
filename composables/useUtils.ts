export const useUtils = () => {
  const sayHello = () => {
    console.log("Say Hello From use utils");
  };

  return {
    sayHello,
  };
};
