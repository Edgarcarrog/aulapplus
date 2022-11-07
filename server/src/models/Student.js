const { Schema, model } = require("mongoose");

const studentSchema = Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    firstLastname: {
      type: String,
      required: true,
      trim: true,
    },
    secondLastname: {
      type: String,
      required: true,
      trim: true,
    },
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Student", studentSchema);
