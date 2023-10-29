import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobiles: [
    {
      id: 1,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
      heading: "APPLE iPhone 14 Plus (Starlight, 128 GB)",
      price: 65999
    },
    {
      id: 2,
      url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70",
      heading: "MOTOROLA G32 (Mineral Gray, 128 GB)  (8 GB RAM)",
      price: 9999
    },
    {
      "id": 3,
      "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
      "heading": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)",
      "price": 17990
    },
    {
      "id": 4,
      "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70",
      "heading": "REDMI 12 (Moonstone Silver, 128 GB)  (4 GB RAM)",
      "price": 8999
    },
    {
      "id": 5,
      "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70",
      "heading": "realme 11x 5G (Purple Dawn, 128 GB)  (6 GB RAM)",
      "price": 12999
    },
    {
      "id": 6,
      "url": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/x/v/-original-imagqadf2awzzmyf.jpeg?q=70",
      "heading": "realme 11 Pro+ 5G (Oasis Green, 256 GB)  (12 GB RAM)",
      "price": 29999
    }
  ],
  mobileUnits: 500,
};

export const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    incrementMobileUnit: (state) => {
      state.mobileUnits = state.mobileUnits + 1;
    },
    decrementMobileUnit: (state) => {
      state.mobileUnits = state.mobileUnits - 1;
    },
  },
});

export const {decrementMobileUnit} = mobileSlice.actions;
export default mobileSlice.reducer;
