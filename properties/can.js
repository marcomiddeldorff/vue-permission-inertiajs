import hasUserDirectPermission from "../utils/hasUserDirectPermission";
import hasUserPermissionThroughRole from "../utils/hasUserPermissionThroughRole";

export default function (app) {
    app.config.globalProperties.$can = (key) => {
        if (typeof key !== 'string') {
            console.warn('You did not specified a permission. It needs to be a string.');
            return;
        }
        const hasPermissionThroughRole = hasUserPermissionThroughRole(key);
        const hasDirectPermission = hasUserDirectPermission(key);

        if (hasPermissionThroughRole) {
            return true;
        }

        if (hasDirectPermission) {
            return true;
        }

        return false;
    }
}