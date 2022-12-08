# Vue Permission Inertia

![Current Version](https://badgen.net/npm/v/vue-permission-inertiajs)
![License](https://badgen.net/badge/license/MIT/red)

This package helps you to retrieve permissions from your laravel application with Inertia.js as dependency.

## Requirements
* Vue3
* Inertia.js


## Setup

Install the package
```npm
npm i vue-permission-inertia
```

## Basic Usage

can
```vue
<span v-can="'myPermissionIWantToCheck'"></span>

Or as property

<span v-if="$can('myPermissionIWantToCheck')"></span>
```
Checks if the user has this permission.

canAny
```vue
<span v-canAny="['myPermissionIWantToCheck', 'mySecondPermissionIWantToCheck']"></span>

Or as property

<span v-if="$can('myPermissionIWantToCheck', 'mySecondPermissionIWantToCheck')"></span>
```
This checks if the user has at least one permission.

canAll
```vue
<span v-canAny="['myPermissionIWantToCheck', 'mySecondPermissionIWantToCheck']"></span>

Or as property

<span v-if="$canAll('myPermissionIWantToCheck', 'mySecondPermissionIWantToCheck')"></span>
```
This checks if the user has all provided permissions.
