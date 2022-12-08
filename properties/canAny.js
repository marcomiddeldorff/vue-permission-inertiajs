import hasUserDirectPermission from "../utils/hasUserDirectPermission";
import hasUserPermissionThroughRole from "../utils/hasUserPermissionThroughRole";

export default function (app) {
    app.config.globalProperties.$canAny = (...keys) => {
        const values = keys;

        let hasPermissionsLength = 0;
        let needPermissionLength = values.length;

        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const hasPermissionThroughRole = hasUserPermissionThroughRole(value);
            const hasDirectPermission = hasUserDirectPermission(value);

            if (hasPermissionThroughRole) {
                hasPermissionsLength++;
            }

            if (hasDirectPermission) {
                hasPermissionsLength++;
            }
        }

        if (hasPermissionsLength < needPermissionLength) {
            return false;
        }

        return true;
    }
}