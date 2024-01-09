const URI = require('./URI');

class Route {

    constructor(uri, httpMethod) {
      this.uri = uri;
      this.httpMethod = httpMethod;
    }

}

module.exports = Route;