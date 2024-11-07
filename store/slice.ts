import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './appStore';
import { REQUEST_HEADERS } from '@/constants/data';

interface PaymentState {
  isoCurrency: string;
  amount: string;
  paymentConcept: string;
  paymentGateway: string | null;
  paymentIdentifier: string | null;
  phoneCode: string;
  phoneNumber: string;
}

const initialState: PaymentState = {
  isoCurrency: 'EUR',
  amount: '',
  paymentConcept: '',
  paymentGateway: null,
  paymentIdentifier: null,
  phoneCode: '+34',
  phoneNumber: '300 678 9087',
};

export const createPayment = createAsyncThunk('payment/createPayment', async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState
    const formData = new FormData();
    formData.append('expected_output_amount', state.payment.amount.toString());
    formData.append('fiat', state.payment.isoCurrency);
    formData.append('notes', state.payment.paymentConcept);

    try {
      const response = await fetch('https://payments.pre-bnvo.com/api/v1/orders/', {
        ...REQUEST_HEADERS.post_order,
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to create payment');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isoCurrency = 'EUR';
      state.amount = '';
      state.paymentConcept = '';
      state.paymentGateway = null;
      state.paymentIdentifier = null;
      state.phoneCode = '+34';
      state.phoneNumber = '300 678 9087';
    },
    setIsoCurrency: (state, action: PayloadAction<string>) => {
      state.isoCurrency = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setPaymentConcept: (state, action: PayloadAction<string>) => {
      state.paymentConcept = action.payload;
    },
    setPhoneCode: (state, action: PayloadAction<string>) => {
      state.phoneCode = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPayment.fulfilled, (state, action: PayloadAction<{ identifier: string; web_url: string }>) => {
      state.paymentIdentifier = action.payload.identifier;
      state.paymentGateway = action.payload.web_url;
    });
  },
});

export const {
  resetState,
  setIsoCurrency,
  setAmount,
  setPaymentConcept,
  setPhoneCode,
  setPhoneNumber,
} = paymentSlice.actions;
export default paymentSlice.reducer;
