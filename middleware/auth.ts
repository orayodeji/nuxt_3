export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Auth Global Middleware");

  const isLoggedIn = false;
  // to is the destination
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }

  // return navigateTo("/login");

  //  redirect to a login page
});
