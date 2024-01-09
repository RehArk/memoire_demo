const Route = require('./Route');

class Router {

  constructor() {

    this.routes = {
      get: [],
      post: [],
      // ... autres verbes HTTP
    };

  }

  addRoute(route) {
    const { httpMethod } = route;
    this.routes[httpMethod.toLowerCase()].push(route);
  }

  compareRoutes(routeA, routeB) {

    const uriA = routeA.uri.string;
    const uriB = routeB.uri.string;

    // Vérifier si l'une des routes contient des paramètres
    const hasParamA = uriA.includes('{');
    const hasParamB = uriB.includes('{');

    // Si l'une a un paramètre et l'autre non, celle sans paramètre passe avant
    if (hasParamA !== hasParamB) {
      return hasParamA ? 1 : -1;
    }

    // Si les deux ont des paramètres ou aucun paramètre, utilise localeCompare
    return uriA.localeCompare(uriB);

  }

  quickSort(arr, left = 0, right = arr.length - 1) {

    if (arr.length > 1) {

      const index = this.partition(arr, left, right);

      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }

      if (index < right) {
        this.quickSort(arr, index, right);
      }

    }

    return arr;

  }
  
  partition(arr, left, right) {

    const pivot = arr[Math.floor((right + left) / 2)];

    let i = left;
    let j = right;

    while (i <= j) {
    
      while (this.compareRoutes(arr[i], pivot) === -1) {
        i++;
      }

      while (this.compareRoutes(arr[j], pivot) === 1) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }

    }

    return i;

  }
  
  sort() {
    for (const verb in this.routes) {
      if (Object.prototype.hasOwnProperty.call(this.routes, verb)) {
        this.routes[verb] = this.quickSort(this.routes[verb]);
      }
    }
  }

}

module.exports = Router;