import hasUserDirectPermission from "../utils/hasUserDirectPermission";
import hasUserPermissionThroughRole from "../utils/hasUserPermissionThroughRole";

export default function (app) {
    app.directive('canAny', (el, binding) => {
        const values = binding.value;
        if (!Array.isArray(values)) {
            console.warn('Please specify an array to check whether the user has permissions.');
            return;
        }

        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const hasPermissionThroughRole = hasUserPermissionThroughRole(value);
            const hasDirectPermission = hasUserDirectPermission(value);

            // If the user has one of the specified permissions through a role return true.
            if (hasPermissionThroughRole) {
                el.style.display = "block";
                return;
            }

            // If user has one of the specified permissions directly without a role
            if (hasDirectPermission) {
                el.style.display = "block";
                return;
            }
        }

        el.style.display = "none";
    });
}