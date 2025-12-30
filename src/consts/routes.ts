export const routeLoaders = {
  home: () => import("@/pages/Home"),
  services: () => import("@/pages/Services"),
  training: () => import("@/pages/Training"),
  rental: () => import("@/pages/Rental"),
};

const routePrefetchers: Record<string, () => void> = {
  "/": () => {
    void routeLoaders.home();
  },
  "/services": () => {
    void routeLoaders.services();
  },
  "/training": () => {
    void routeLoaders.training();
  },
  "/rental": () => {
    void routeLoaders.rental();
  },
};

export const preloadRoute = (path: string) => {
  const preload = routePrefetchers[path];
  if (preload) {
    preload();
  }
};
