const moongoose = require("mongoose");
const UserSchema = new moongoose.Schema(
    {
        firstname: { type: String, require: true },
        lastname: { type: String, require: true },
        age: { type: String, require: true },
        sex: { type: String, require: true },
        religion: { type: String, require: true },
        phone: { type: String, require: true },
        image: { type: String, require: true},
        email: { type: String, require: true },
        state: { type: String, require: true },
        password: { type: String, require: true },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isAdmitted: {
            type: Boolean,
            default: false
        },
        isBanned: {
            type: Boolean,
            default: false
        },
        isRejected: {
            type: Boolean,
            default: false
        },
        isPayed: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: false
        },
    }, { timestamps: true }, 
);



module.exports = moongoose.model("User", UserSchema);