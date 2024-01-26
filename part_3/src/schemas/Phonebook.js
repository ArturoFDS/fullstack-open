import moongose from "mongoose";

const phonebookSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    trim: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(\d{2,3}-)?\d{7,8}$/.test(v);
      },
      message: 'Invalid phone number format. Please use the format 09-1234556 or 040-22334455.'
    },
  },
});

const phoneModel = moongose.model("Phonebook", phonebookSchema);
export { phoneModel };
