export const routeLoaders = {
  home: () => import("@/pages/Home"),
  services: () => import("@/pages/Services"),
  training: () => import("@/pages/Training"),
  rental: () => import("@/pages/Rental"),
  homeFr: () => import("@/pages/fr/HomeFr"),
  servicesFr: () => import("@/pages/fr/ServicesFr"),
  trainingFr: () => import("@/pages/fr/TrainingFr"),
  rentalFr: () => import("@/pages/fr/RentalFr"),
};

const routePrefetchers: Record<string, () => void> = {
  "/": () => {
    void routeLoaders.home();
  },
  "/fr": () => {
    void routeLoaders.homeFr();
  },
  "/services": () => {
    void routeLoaders.services();
  },
  "/fr/services": () => {
    void routeLoaders.servicesFr();
  },
  "/training": () => {
    void routeLoaders.training();
  },
  "/fr/training": () => {
    void routeLoaders.trainingFr();
  },
  "/rental": () => {
    void routeLoaders.rental();
  },
  "/fr/rental": () => {
    void routeLoaders.rentalFr();
  },
};

export const preloadRoute = (path: string) => {
  const preload = routePrefetchers[path];
  if (preload) {
    preload();
  }
};
