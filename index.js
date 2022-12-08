import directives from './directives';
import properties from "./properties";

export default {
    install(app, options) {
        // Register properties and directives.
        properties(app);
        directives(app);
    }
}