import can from "./can";
import canAll from "./canAll";
import canAny from "./canAny";

// Register all directives.
export default function(app) {
    can(app);
    canAny(app);
    canAll(app);
}