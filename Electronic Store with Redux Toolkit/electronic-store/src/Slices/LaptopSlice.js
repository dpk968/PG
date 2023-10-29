import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  laptops: [
    {
      id: 1,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/6/5/g/-original-imagtke7erkzwzfp.jpeg?q=70",
      heading:
        "Acer One Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) AO 14 Z 8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)",
      price: 26490,
    },
    {
      id: 2,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/d/i/zl12-business-laptop-infinix-original-imagm83gc6xr8sau.jpeg?q=70",
      heading:
        "Infinix ZEROBOOK 13 Intel Core i9 13th Gen 13900H - (32 GB/1 TB SSD/Windows 11 Home) ZL513 Thin and Light Laptop  (15.6 inch, Grey With Meteorite Phase Design, 1.80 Kg, With MS Office)",
      price: 69990,
    },
    {
      id: 3,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/x/m/-original-imagp7wan6syzfy4.jpeg?q=70",
      heading:
        "Acer Predator (2023) Core i9 13th Gen 13900HX - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4070) PH16-71 Gaming Laptop  (16 Inch, Abyssal Black, 2.6 Kg)",
      price: 164990,
    },
    {
      id: 4,
      url: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/u/v/o/-original-imagpeajhffvdktp.jpeg?q=70",
      heading:
        "ASUS Vivobook Pro 16 OLED (2023) For Creator, Intel H-Series Core i9 13th Gen 13900H - (16 GB/1 TB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050/120 Hz) K6602VU-LZ951WS Gaming Laptop  (16 Inch, Quiet Blue, 1.90 Kg, With MS Office)",
      price: 154990,
    },
    {
      id: 5,
      url: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/z/n/mphh3hn-a-thin-and-light-laptop-apple-original-imagmfhe3vvshdzc.jpeg?q=70",
      heading:
        "APPLE 2023 MacBook Pro M2 Pro - (16 GB/1 TB SSD/macOS Ventura) MPHJ3HN/A  (14 Inch, Silver, 1.60 Kg)",
      price: 229990,
    },
    {
      id: 6,
      url: "https://rukminim2.flixcart.com/image/416/416/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70",
      heading:
        "APPLE 2021 Macbook Pro M1 Max - (32 GB/1 TB SSD/Mac OS Monterey) MK1H3HN/A  (16.2 inch, Silver, 2,2 kg)",
      price: 303990,
    },
    {
      id: 7,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/o/-original-imagtq48z3hb9a4s.jpeg?q=70",
      heading:
        "Wings Nuvobook Pro Aluminium Alloy Metal Body Intel Core i7 11th Gen 1165G7 - (16 GB/512 GB SSD/Windows 11 Home) WL-Nuvobook Pro-GRY Thin and Light Laptop  (14 Inch, Grey, 1.48 Kg)",
      price: 41990,
    },
  ],
  laptopsUnits: 800,
};

export const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    incrementLaptopUnit: (state) => {
      state.laptopsUnits += 1;
    },
    decrementLaptopUnit: (state) => {
      state.laptopsUnits -= 1;
    },
  },
});

export default laptopSlice.reducer;

export const {incrementLaptopUnit,decrementLaptopUnit} = laptopSlice.actions;
