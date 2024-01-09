const Route = require("./core/router/Route");
const Router = require("./core/router/router");
const URI = require("./core/router/Uri");

const router = new Router();

router.addRoute(new Route(
    new URI('/home'), 
    "get"
));

router.addRoute(new Route(
    new URI('/profile/settings'), 
    "get"
));

router.addRoute(new Route(
    new URI('/profile'), 
    "get"
));

router.addRoute(new Route(
    new URI('/profile/{id}'), 
    "get"
));

router.addRoute(new Route(
    new URI('/'), 
    "get"
));

router.sort();

console.log(router.routes.get);
