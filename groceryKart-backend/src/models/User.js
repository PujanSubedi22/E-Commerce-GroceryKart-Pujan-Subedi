import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },

  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
        validator: (value)=>{
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            return emailRegex.test(value)
        },
        message: "Invalid email address."
    }
  },

  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [8, "Password length must be greater than 8"]
  },

  phone: {
    type: String,
    required: [true, "Phone number is required. "],
    minLength: [6, "Invalid phone number"],
    maxLength: [13, "Invalid phone number"],
  },

  address: {
    city: {
      type: String,
      required: [true, "Address City is required"],
    },
    province: {
      type: String,
      required: [true, "Address Province is required"],
    },
    Street: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },

  roles: {
    type: [String],
    default: ["USER"],
    enum: ["USER", "MERCHANT", "ADMIN"],
  },

  profileImageUrl: String,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const model = mongoose.model("User", userSchema);

export default model;
