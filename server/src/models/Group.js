const { Schema, model } = require("mongoose");

const groupSchema = Schema(
  {
    grade: {
      type: String,
      required: true,
      trim: true,
    },
    group: {
      type: String,
      required: true,
      trim: true,
    },
    cicle: {
      type: String,
      required: true,
      trim: true,
    },
    subjects: {
      type: [String],
    },
    partials: {
      type: Number,
      default: 1,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Group", groupSchema);
