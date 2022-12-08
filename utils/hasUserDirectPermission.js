import { usePage } from "@inertiajs/inertia-vue3";

export default function (key) {
    const permissions = usePage().props.value.user.permissions;

    for (let i = 0; i < permissions.length; i++) {
        const permission = permissions[i];
        if (permission.name == key) {
            return true;
        }
    }
    return false;
}