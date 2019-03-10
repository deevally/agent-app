import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  phoneNumber: {
    type: Number,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    description: 'sorry, this username is taken.'
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['owner', 'masterAgent', 'agent']
  },
  fullname: {
    type: String,
    trim: true,
  },
  address: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    description: 'Email has already been used by another agent'
  },
  deviceId: {
    type: String
  },
  deactivate: {
    type: Boolean,
    default: false
  },
  devices: {
    type: Object,
    enum: ['pos', 'igrpay', 'bvn', 'nimc']
  },

  date: {
    type: Date,
    default: new Date().toString()
  }
});

const User = mongoose.model('user', userSchema);

export default User;
