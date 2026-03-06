export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["COACH"] = "COACH";
    UserRole["MEMBER"] = "MEMBER";
})(UserRole || (UserRole = {}));
export var Permission;
(function (Permission) {
    Permission["BOOKINGS_CREATE"] = "bookings.create";
    Permission["BOOKINGS_CANCEL"] = "bookings.cancel";
    Permission["PLANS_MANAGE"] = "plans.manage";
    Permission["SETTINGS_MANAGE"] = "settings.manage";
})(Permission || (Permission = {}));
