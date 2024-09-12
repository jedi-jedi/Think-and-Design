const moongoose = require("mongoose");
const PaidSchema = new moongoose.Schema(
    {
        firstname: { type: String, require: true },
        lastname: { type: String, require: true },
        age: { type: String, require: true },
        sex: { type: String, require: true },
        religion: { type: String, require: true },
        phone: { type: String, require: true },
        email: { type: String, require: true },
        state: { type: String, require: true },
    } { timestamps: true },
);



module.exports = moongoose.model("Paid", PaidSchema);