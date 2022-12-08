import can from "./can";
import canAll from "./canAll";
import canAny from "./canAny";

export default function (app) {
    can(app);
    canAny(app);
    canAll(app);
}