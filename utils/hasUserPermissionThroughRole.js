import { usePage } from "@inertiajs/inertia-vue3";

export default function (key) {
    const roles = usePage().props.value.user.roles;

    for (let i = 0; i < roles.length; i++) {
        const role = roles[i];
        for (let j = 0; j < role[i].permissions.length; j++) {
            const permission = role[i].permission[j];
            if (permission.name == key) {
                return true;
            }
        }
    }
    return false;
}