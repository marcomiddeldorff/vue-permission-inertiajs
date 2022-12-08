import hasUserDirectPermission from "../utils/hasUserDirectPermission";
import hasUserPermissionThroughRole from "../utils/hasUserPermissionThroughRole";

export default function (app) {
    app.directive('can', (el, binding) => {
        const value = binding.value;
        if (typeof value !== 'string') {
            console.warn('You did not specified a permission. It needs to be a string.');
            return;
        }
        const hasPermissionThroughRole = hasUserPermissionThroughRole(value);
        const hasDirectPermission = hasUserDirectPermission(value);

        if (hasPermissionThroughRole) {
            el.style.display = "block";
            return;
        }

        if (hasDirectPermission) {
            el.style.display = "block";
            return;
        }

        el.style.display = "none";
    });
}