import mongoose from 'mongoose';

const {
  Schema
} = mongoose;

const walletSchema = new Schema({
  phoneNumber: {
    type: Number,
    unique: true,
    required: true
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  passCode: {
    type: String
  },
  totalAmount: {
    type: Number,
    default: 0.00
  },
  embedToken: {
    type: String
  },
  transactionReference: {
    type: Array
  },
  merchantReference: {
    type: Array
  },
});

const Wallet = mongoose.model('wallet', walletSchema);

export default Wallet;
