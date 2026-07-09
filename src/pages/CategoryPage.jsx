import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import LazyImage from "../components/ui/LazyImage";
import RevealSection from "../components/RevealSection";
import FloatingDecoration from "../components/FloatingDecoration";
import { WHATSAPP_LINK } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// s1 - s45
import image1 from "../assets/Bouquet/Bouquet1.jpg";
import image2 from "../assets/Bouquet/Bouquet2.jpg";
import image3 from "../assets/Bouquet/Bouquet3.jpg";
import image4 from "../assets/Bouquet/Bouquet4.jpg";
import image5 from "../assets/Bouquet/Bouquet5.jpg";
import image6 from "../assets/Bouquet/Bouquet6.jpg";
import image7 from "../assets/Bouquet/Bouquet7.jpg";
import image8 from "../assets/Bouquet/Bouquet8.jpg";
import image9 from "../assets/Bouquet/Bouquet9.jpg";
import image10 from "../assets/Bouquet/Bouquet10.jpg";



import image11 from "../assets/recepmarriage/bride1.jpg";
import image12 from "../assets/recepmarriage/bride2.jpg";
import image13 from "../assets/recepmarriage/bride3.jpg";
import image14 from "../assets/recepmarriage/bride4.jpg";
import image15 from "../assets/recepmarriage/bride5.jpg";
import image16 from "../assets/recepmarriage/r1.jpg";
import image17 from "../assets/recepmarriage/r2.jpg";
import image18 from "../assets/recepmarriage/r3.jpg";
import image19 from "../assets/s19.png";
import image20 from "../assets/s20.png";
import image21 from "../assets/birthday/birthday1.png";
import image22 from "../assets/birthday/birthday2.png";
import image23 from "../assets/birthday/birthday3.png";
import image24 from "../assets/birthday/birthday4.png";
import image25 from "../assets/anniversory/anni1.jpg";
import image26 from "../assets/anniversory/anni2.jpg";
import image27 from "../assets/anniversory/anni3.jpg";
import image28 from "../assets/devotional/dev1.jpg";
import image29 from "../assets/devotional/dev2.jpg";
import image30 from "../assets/devotional/dev3.jpg";
import image31 from "../assets/devotional/dev4.jpg";
import image32 from "../assets/devotional/dev12.jpg";
import image33 from "../assets/devotional/dev6.jpg";
import image34 from "../assets/devotional/dev7.jpg";

import image35 from "../assets/baloons/b1.jpg";
import image36 from "../assets/baloons/b2.jpg";
import image37 from "../assets/baloons/b3.jpg";
import image38 from "../assets/baloons/b4.jpg";
import image39 from "../assets/baloons/b5.jpg";
import image40 from "../assets/candle/can1.jpg";
import image41 from "../assets/candle/can2.jpg";
import image42 from "../assets/candle/can3.jpg";
import image43 from "../assets/candle/can4.jpg";
import image44 from "../assets/candle/can5.jpg";
import image45 from "../assets/candle/can6.jpg";


// s46 - s85
import image46 from "../assets/Bouquet/Bouquet11.jpg";
import image47 from "../assets/Bouquet/Bouquet12.jpg";
import image48 from "../assets/Bouquet/Bouquet13.jpg";
import image49 from "../assets/Bouquet/Bouquet14.jpg";
import image50 from "../assets/Bouquet/Bouquet15.jpg";

import image51 from "../assets/recepmarriage/bride6.jpg";
import image52 from "../assets/recepmarriage/bride7.jpg";
import image53 from "../assets/recepmarriage/bride8.jpg";
import image54 from "../assets/recepmarriage/bride9.jpg";
import image55 from "../assets/recepmarriage/bride10.jpg";
import image56 from "../assets/recepmarriage/bride11.jpg";
import image57 from "../assets/recepmarriage/r4.jpg";
import image58 from "../assets/recepmarriage/r5.jpg";
import image59 from "../assets/recepmarriage/r7.jpg";
import image60 from "../assets/recepmarriage/r8.jpg";
import image61 from "../assets/recepmarriage/r9.jpg";
import image62 from "../assets/haldi/h1.jpg";
import image63 from "../assets/haldi/h2.jpg";
import image64 from "../assets/haldi/h3.jpg";
import image65 from "../assets/haldi/h4.jpg";
import image66 from "../assets/haldi/h5.jpg";
import image67 from "../assets/birthday/birthday5.png";
import image68 from "../assets/birthday/birthday6.png";
import image69 from "../assets/birthday/birthday7.png";
import image70 from "../assets/birthday/birthday8.png";
import image71 from "../assets/anniversory/anni4.jpg";
import image72 from "../assets/anniversory/anni5.jpg";
import image73 from "../assets/anniversory/anni6.jpg";
import image74 from "../assets/anniversory/anni8.png";
import image75 from "../assets/devotional/dev8.jpg";
import image76 from "../assets/devotional/dev9.jpg";
import image77 from "../assets/devotional/dev10.jpg";
import image78 from "../assets/devotional/dev11.jpg";

import image79 from "../assets/baloons/b6.jpg";
import image80 from "../assets/baloons/b7.jpg";
import image81 from "../assets/baloons/b8.jpg";
import image82 from "../assets/baloons/b9.jpg";
import image83 from "../assets/candle/can7.jpg";
import image84 from "../assets/candle/can8.jpg";
import image85 from "../assets/candle/can9.jpg";


import {
  ShoppingBag,
  Star,
  SlidersHorizontal,
  ChevronDown,
  X,
  Leaf,
  Truck,
  Sparkles,
  Search,
  Loader2,
  Phone,
} from "lucide-react";

const ITEMS_PER_PAGE = 12;

const allProducts = [
  { id: 1, name: "Romantic Rosebloom Bouquet", price: 849, originalPrice: 1099, rating: 4.9, reviews: 128, image: image1, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Deep red roses with baby's breath" },
  { id: 2, name: "Sunshine Sunflower Bunch", price: 599, originalPrice: null, rating: 4.8, reviews: 94, image: image2, category: "Bouquets", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fresh farm sunflowers, 12 stems" },
  { id: 3, name: "Pastel Dream Bouquet", price: 1199, originalPrice: 1499, rating: 4.7, reviews: 61, image: image3, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Mixed pastel blooms, beautifully wrapped" },
  { id: 4, name: "Blushing Pink Peony Bunch", price: 1299, originalPrice: 1599, rating: 4.9, reviews: 112, image: image4, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Soft pink peonies with eucalyptus sprigs" },
  { id: 5, name: "Lavender Love Posy", price: 749, originalPrice: null, rating: 4.8, reviews: 87, image: image5, category: "Bouquets", tag: "Popular", tagColor: "purple", isNew: false, desc: "Fresh lavender stems tied with ribbon" },
  { id: 6, name: "Tropical Paradise Bouquet", price: 1099, originalPrice: null, rating: 4.8, reviews: 47, image: image6, category: "Bouquets", tag: "New", tagColor: "purple", isNew: true, desc: "Exotic birds of paradise & heliconias" },
  { id: 7, name: "White Elegance Bouquet", price: 999, originalPrice: 1199, rating: 4.7, reviews: 73, image: image7, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Pure white blooms with greenery" },
  { id: 8, name: "Mixed Garden Bouquet", price: 699, originalPrice: null, rating: 4.6, reviews: 58, image: image8, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Seasonal garden flowers, freshly picked" },
  { id: 9, name: "Royal Red Rose Bouquet", price: 1499, originalPrice: 1799, rating: 4.9, reviews: 145, image: image9, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "24 premium red roses, hand-tied" },
  { id: 10, name: "Sunrise Gerbera Bunch", price: 549, originalPrice: null, rating: 4.6, reviews: 66, image: image10, category: "Bouquets", tag: null, tagColor: null, isNew: true, desc: "Bright gerberas in cheerful colours" },
  { id: 46, name: "Fresh Rose Bouquet", price: 799, originalPrice: 999, rating: 4.8, reviews: 83, image: image46, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Fresh seasonal roses, hand-tied with love" },
  { id: 47, name: "Pink Blossom Bouquet", price: 899, originalPrice: null, rating: 4.7, reviews: 61, image: image47, category: "Bouquets", tag: "New", tagColor: "purple", isNew: true, desc: "Soft pink mixed blooms, beautifully wrapped" },
  { id: 48, name: "Elegant White Bouquet", price: 1099, originalPrice: 1299, rating: 4.9, reviews: 74, image: image48, category: "Bouquets", tag: "Popular", tagColor: "amber", isNew: false, desc: "Pure white blooms with lush greenery" },
  { id: 49, name: "Colourful Fiesta Bouquet", price: 649, originalPrice: null, rating: 4.6, reviews: 55, image: image49, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Vibrant mixed colour blooms, 15 stems" },
  { id: 50, name: "Garden Fresh Bouquet", price: 749, originalPrice: 899, rating: 4.7, reviews: 48, image: image50, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Farm-fresh garden flowers, seasonal pick" },
  { id: 11, name: "Luxury White Orchid Vase", price: 2199, originalPrice: 2599, rating: 4.8, reviews: 35, image: image11, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Elegant white orchids in ceramic pot" },
  { id: 12, name: "Golden Lily Centrepiece", price: 1849, originalPrice: 2199, rating: 4.7, reviews: 54, image: image12, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Golden oriental lilies for wedding table" },
  { id: 13, name: "Blush Hydrangea Dome", price: 1649, originalPrice: null, rating: 4.8, reviews: 63, image: image13, category: "Wedding", tag: "Popular", tagColor: "rose", isNew: false, desc: "Full blush hydrangeas wedding centrepiece" },
  { id: 14, name: "Bridal Table Arrangement", price: 2399, originalPrice: null, rating: 4.9, reviews: 41, image: image14, category: "Wedding", tag: "New", tagColor: "purple", isNew: true, desc: "Luxury bridal table floral arrangement" },
  { id: 15, name: "Wedding Stage Flowers", price: 3499, originalPrice: 3999, rating: 4.9, reviews: 38, image: image15, category: "Wedding", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Premium stage decoration flowers" },
  { id: 51, name: "White Rose Wedding Arch", price: 4999, originalPrice: 5999, rating: 5.0, reviews: 29, image: image51, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Full white rose arch for wedding ceremony" },
  { id: 52, name: "Bridal Bouquet Roses", price: 1799, originalPrice: null, rating: 4.9, reviews: 67, image: image52, category: "Wedding", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Classic bridal bouquet with white roses" },
  { id: 53, name: "Wedding Car Decoration", price: 1299, originalPrice: 1599, rating: 4.7, reviews: 44, image: image53, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Floral car decoration for wedding day" },
  { id: 54, name: "Mandap Flower Decor", price: 5999, originalPrice: null, rating: 4.8, reviews: 32, image: image54, category: "Wedding", tag: "Popular", tagColor: "amber", isNew: false, desc: "Traditional mandap floral decoration" },
  { id: 55, name: "Wedding Gate Flowers", price: 3999, originalPrice: 4499, rating: 4.9, reviews: 51, image: image55, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Grand floral gate decoration for wedding" },
  { id: 56, name: "Phool Mala Set", price: 899, originalPrice: null, rating: 4.8, reviews: 112, image: image56, category: "Wedding", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Fresh flower garland set for varmala" },
  { id: 16, name: "Reception Table Flowers", price: 1299, originalPrice: null, rating: 4.8, reviews: 92, image: image16, category: "Reception", tag: "Popular", tagColor: "amber", isNew: false, desc: "Elegant table flowers for reception" },
  { id: 17, name: "Reception Stage Decor", price: 3999, originalPrice: null, rating: 4.9, reviews: 29, image: image17, category: "Reception", tag: "New", tagColor: "purple", isNew: true, desc: "Grand floral stage for reception night" },
  { id: 18, name: "Centrepiece Arrangement", price: 1349, originalPrice: 1599, rating: 4.7, reviews: 47, image: image18, category: "Reception", tag: "Sale", tagColor: "green", isNew: false, desc: "Premium centrepiece for reception tables" },
  { id: 57, name: "Reception Backdrop Flowers", price: 4499, originalPrice: 5499, rating: 4.8, reviews: 38, image: image57, category: "Reception", tag: "Sale", tagColor: "green", isNew: false, desc: "Lush floral backdrop for reception photos" },
  { id: 58, name: "Couple Seat Decoration", price: 2199, originalPrice: null, rating: 4.9, reviews: 56, image: image58, category: "Reception", tag: "Popular", tagColor: "rose", isNew: false, desc: "Royal floral decor for bride & groom seat" },
  { id: 59, name: "Reception Entrance Arch", price: 3299, originalPrice: 3799, rating: 4.7, reviews: 43, image: image59, category: "Reception", tag: "Sale", tagColor: "green", isNew: false, desc: "Grand floral arch for reception entrance" },
  { id: 60, name: "Welcome Board Flowers", price: 799, originalPrice: null, rating: 4.6, reviews: 71, image: image60, category: "Reception", tag: null, tagColor: null, isNew: true, desc: "Fresh flower decor for welcome board" },
  { id: 61, name: "Reception Aisle Flowers", price: 1599, originalPrice: 1999, rating: 4.8, reviews: 34, image: image61, category: "Reception", tag: "Sale", tagColor: "green", isNew: false, desc: "Beautiful aisle flower decorations" },
  { id: 62, name: "Haldi Marigold Garland", price: 499, originalPrice: null, rating: 4.8, reviews: 143, image: image62, category: "Haldi", tag: "Bestseller", tagColor: "amber", isNew: false, desc: "Fresh marigold garlands for haldi ceremony" },
  { id: 63, name: "Haldi Decor Set", price: 1299, originalPrice: 1599, rating: 4.7, reviews: 87, image: image63, category: "Haldi", tag: "Sale", tagColor: "green", isNew: false, desc: "Complete haldi ceremony floral decor" },
  { id: 64, name: "Yellow Flower Backdrop", price: 2499, originalPrice: null, rating: 4.9, reviews: 62, image: image64, category: "Haldi", tag: "Popular", tagColor: "amber", isNew: false, desc: "Bright yellow floral backdrop for haldi" },
  { id: 65, name: "Haldi Stage Decoration", price: 1999, originalPrice: 2399, rating: 4.8, reviews: 48, image: image65, category: "Haldi", tag: "Sale", tagColor: "green", isNew: false, desc: "Traditional marigold stage for haldi" },
  { id: 66, name: "Haldi Chair Flowers", price: 799, originalPrice: null, rating: 4.7, reviews: 95, image: image66, category: "Haldi", tag: "New", tagColor: "purple", isNew: true, desc: "Floral chair decoration for haldi function" },
  { id: 19, name: "Birthday Flower Box", price: 1799, originalPrice: null, rating: 5.0, reviews: 43, image: image19, category: "Birthday", tag: "New", tagColor: "purple", isNew: true, desc: "Beautiful flower box for birthday gift" },
  { id: 20, name: "Birthday Rose Basket", price: 1299, originalPrice: null, rating: 5.0, reviews: 38, image: image20, category: "Birthday", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fresh roses in a gift basket" },
  { id: 21, name: "Birthday Surprise Bouquet", price: 999, originalPrice: null, rating: 5.0, reviews: 66, image: image21, category: "Birthday", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Colourful surprise bouquet for birthday" },
  { id: 22, name: "Happy Birthday Flower Cake", price: 1499, originalPrice: 1799, rating: 5.0, reviews: 81, image: image22, category: "Birthday", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Flower arrangement in birthday cake style" },
  { id: 23, name: "Birthday Bloom Box", price: 1599, originalPrice: 1899, rating: 4.7, reviews: 34, image: image23, category: "Birthday", tag: "Sale", tagColor: "green", isNew: false, desc: "Premium blooms in a luxury gift box" },
  { id: 24, name: "Birthday Teddy & Flowers", price: 1299, originalPrice: null, rating: 4.9, reviews: 52, image: image24, category: "Birthday", tag: "Gift", tagColor: "amber", isNew: false, desc: "Cute teddy with fresh flower bouquet" },
  { id: 67, name: "Pink Birthday Bouquet", price: 849, originalPrice: null, rating: 4.8, reviews: 76, image: image67, category: "Birthday", tag: "Popular", tagColor: "rose", isNew: false, desc: "Soft pink roses birthday special bouquet" },
  { id: 68, name: "Birthday Balloon & Flowers", price: 1199, originalPrice: 1399, rating: 4.7, reviews: 59, image: image68, category: "Birthday", tag: "Sale", tagColor: "green", isNew: false, desc: "Flower bouquet with birthday balloons" },
  { id: 69, name: "Birthday Number Flowers", price: 1599, originalPrice: null, rating: 4.9, reviews: 41, image: image69, category: "Birthday", tag: "New", tagColor: "purple", isNew: true, desc: "Age number shaped flower arrangement" },
  { id: 70, name: "Birthday Chocolate Hamper", price: 1799, originalPrice: 2099, rating: 4.8, reviews: 88, image: image70, category: "Birthday", tag: "Sale", tagColor: "green", isNew: false, desc: "Flowers with premium birthday chocolates" },
  { id: 25, name: "Anniversary Rose Box", price: 2499, originalPrice: null, rating: 4.9, reviews: 210, image: image25, category: "Anniversary", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "50 red roses in a luxury heart box" },
  { id: 26, name: "Forever Rose Dome", price: 2999, originalPrice: 3499, rating: 4.9, reviews: 175, image: image26, category: "Anniversary", tag: "Popular", tagColor: "amber", isNew: false, desc: "Preserved roses under glass dome" },
  { id: 27, name: "Anniversary Surprise Pack", price: 1799, originalPrice: null, rating: 4.8, reviews: 98, image: image27, category: "Anniversary", tag: "New", tagColor: "purple", isNew: true, desc: "Flowers, candles & chocolates combo" },
  { id: 71, name: "Red Rose Heart Bouquet", price: 1499, originalPrice: 1799, rating: 4.9, reviews: 134, image: image71, category: "Anniversary", tag: "Sale", tagColor: "green", isNew: false, desc: "Heart shaped red rose arrangement" },
  { id: 72, name: "Anniversary Couple Gift", price: 2199, originalPrice: null, rating: 4.8, reviews: 76, image: image72, category: "Anniversary", tag: "Gift", tagColor: "amber", isNew: false, desc: "Romantic flowers & personalised gift combo" },
  { id: 73, name: "100 Roses Luxury Box", price: 3299, originalPrice: 3799, rating: 5.0, reviews: 89, image: image73, category: "Anniversary", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Premium 100 roses in velvet box" },
  { id: 74, name: "Anniversary Flower Cake", price: 1699, originalPrice: 1999, rating: 4.7, reviews: 52, image: image74, category: "Anniversary", tag: "Sale", tagColor: "green", isNew: false, desc: "Flower arrangement in anniversary cake style" },
  { id: 28, name: "Pooja Marigold Mala", price: 199, originalPrice: null, rating: 4.6, reviews: 143, image: image28, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Fresh marigold garland for daily pooja" },
  { id: 29, name: "Temple Flower Basket", price: 349, originalPrice: null, rating: 4.6, reviews: 78, image: image29, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Mixed devotional flowers in basket" },
  { id: 30, name: "Lotus & Rose Pooja Set", price: 499, originalPrice: null, rating: 4.8, reviews: 58, image: image30, category: "Devotional", tag: "Popular", tagColor: "amber", isNew: false, desc: "Sacred lotus with rose petals set" },
  { id: 31, name: "Rose Petal Pack", price: 149, originalPrice: null, rating: 4.7, reviews: 62, image: image31, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Fresh rose petals for pooja, 500g" },
  { id: 32, name: "Jasmine Garland", price: 299, originalPrice: null, rating: 4.7, reviews: 52, image: image32, category: "Devotional", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fragrant jasmine garland, 1 meter" },
  { id: 33, name: "Marigold Flower Bunch", price: 249, originalPrice: null, rating: 4.6, reviews: 41, image: image33, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Fresh marigold bunch for festivals" },
  { id: 34, name: "Navratri Flower Pack", price: 599, originalPrice: 799, rating: 4.8, reviews: 87, image: image34, category: "Devotional", tag: "Sale", tagColor: "green", isNew: false, desc: "Special navratri flower decoration pack" },
  { id: 75, name: "Diwali Flower Rangoli Kit", price: 799, originalPrice: 999, rating: 4.8, reviews: 63, image: image75, category: "Devotional", tag: "Sale", tagColor: "green", isNew: false, desc: "Flower petals for beautiful rangoli" },
  { id: 76, name: "Ganpati Flower Decor", price: 1299, originalPrice: null, rating: 4.9, reviews: 74, image: image76, category: "Devotional", tag: "Popular", tagColor: "amber", isNew: false, desc: "Premium flower decor for Ganpati festival" },
  { id: 77, name: "Puja Thali Flower Set", price: 399, originalPrice: null, rating: 4.7, reviews: 91, image: image77, category: "Devotional", tag: null, tagColor: null, isNew: true, desc: "Assorted flowers for pooja thali" },
  { id: 78, name: "Durga Puja Flower Pack", price: 699, originalPrice: 899, rating: 4.8, reviews: 48, image: image78, category: "Devotional", tag: "Sale", tagColor: "green", isNew: false, desc: "Special flower pack for Durga Puja" },
  { id: 35, name: "Flower & Balloon Combo", price: 999, originalPrice: 1199, rating: 4.6, reviews: 29, image: image35, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "Fresh flowers with colourful balloons" },
  { id: 36, name: "Birthday Balloon Bouquet", price: 799, originalPrice: null, rating: 4.7, reviews: 34, image: image36, category: "Balloon", tag: "Popular", tagColor: "amber", isNew: false, desc: "Colourful balloon bouquet with ribbons" },
  { id: 37, name: "Heart Balloon & Roses", price: 1199, originalPrice: null, rating: 4.8, reviews: 45, image: image37, category: "Balloon", tag: "Popular", tagColor: "rose", isNew: false, desc: "Red heart balloons with fresh roses" },
  { id: 38, name: "Anniversary Balloon Set", price: 899, originalPrice: 1099, rating: 4.7, reviews: 38, image: image38, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "Golden anniversary balloon decoration" },
  { id: 39, name: "Surprise Balloon Box", price: 1499, originalPrice: null, rating: 4.9, reviews: 56, image: image39, category: "Balloon", tag: "New", tagColor: "purple", isNew: true, desc: "Balloon surprise box with flower top" },
  { id: 79, name: "Foil Number Balloons", price: 599, originalPrice: null, rating: 4.6, reviews: 82, image: image79, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Shiny foil balloons in any number" },
  { id: 80, name: "Baby Shower Balloon Kit", price: 1299, originalPrice: 1499, rating: 4.8, reviews: 47, image: image80, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "Pastel balloon decoration for baby shower" },
  { id: 81, name: "Graduation Balloon Set", price: 999, originalPrice: null, rating: 4.7, reviews: 36, image: image81, category: "Balloon", tag: "New", tagColor: "purple", isNew: true, desc: "Graduation themed balloons & ribbons" },
  { id: 82, name: "Party Balloon Arch Kit", price: 1799, originalPrice: 2199, rating: 4.9, reviews: 63, image: image82, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "DIY balloon arch kit for any party" },
  { id: 40, name: "Bloom & Glow Candle Set", price: 999, originalPrice: 1299, rating: 4.9, reviews: 89, image: image40, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: false, desc: "Rose & jasmine scented candle trio" },
  { id: 41, name: "Rose & Oud Diffuser Set", price: 1299, originalPrice: null, rating: 4.9, reviews: 96, image: image41, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: true, desc: "Reed diffuser with rose & oud blend" },
  { id: 42, name: "Floral Bath & Body Kit", price: 849, originalPrice: 999, rating: 4.7, reviews: 64, image: image42, category: "Candles & More", tag: "Sale", tagColor: "green", isNew: false, desc: "Rose & lavender bath salts with soap" },
  { id: 43, name: "Flower & Chocolate Hamper", price: 1599, originalPrice: null, rating: 4.8, reviews: 72, image: image43, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: false, desc: "Mini bouquet with premium chocolates" },
  { id: 44, name: "Luxury Fragrance Gift Box", price: 1899, originalPrice: 2199, rating: 4.9, reviews: 48, image: image44, category: "Candles & More", tag: "Sale", tagColor: "green", isNew: false, desc: "Floral perfume & scented candle combo" },
  { id: 45, name: "Aromatic Flower Tea Set", price: 699, originalPrice: null, rating: 4.6, reviews: 37, image: image45, category: "Candles & More", tag: "New", tagColor: "purple", isNew: true, desc: "Dried floral herbal tea blend gift set" },
  { id: 83, name: "Soy Wax Rose Candle", price: 599, originalPrice: null, rating: 4.8, reviews: 54, image: image83, category: "Candles & More", tag: "New", tagColor: "purple", isNew: true, desc: "Hand-poured rose soy wax candle" },
  { id: 84, name: "Floral Gift Hamper", price: 2199, originalPrice: 2599, rating: 4.9, reviews: 67, image: image84, category: "Candles & More", tag: "Sale", tagColor: "green", isNew: false, desc: "Flowers, candles & chocolates luxury hamper" },
  { id: 85, name: "Potpourri Gift Set", price: 799, originalPrice: null, rating: 4.7, reviews: 43, image: image85, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: false, desc: "Dried floral potpourri in decorative jar" },
];

const categoryFilters = [
  "All",
  "Bouquets",
  "Wedding",
  "Reception",
  "Haldi",
  "Birthday",
  "Anniversary",
  "Devotional",
  "Balloon",
  "Candles & More",
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "priceLow", label: "Price: Low to High" },
  { value: "priceHigh", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest First" },
];

const tagStyles = {
  rose: "bg-[#F4C9D1]/90 text-[#D6537A] border-#F4C9D1/60",
  amber: "bg-amber-50/90 text-amber-600 border-amber-100/60",
  green: "bg-emerald-50/90 text-emerald-600 border-emerald-100/60",
  purple: "bg-purple-50/90 text-purple-600 border-purple-100/60",
  blue: "bg-blue-50/90 text-blue-600 border-blue-100/60",
};

const CategoryPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("cat") || "All";

  const handleCategoryChange = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("cat");
    } else {
      newParams.set("cat", cat);
    }
    setSearchParams(newParams);
  };
  const [sortBy, setSortBy] = useState("popular");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addedToCart, setAddedToCart] = useState({});
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loadingMore, setLoadingMore] = useState(false);
  const loaderRef = useRef(null);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        season: product.desc,
        color: "#f43f5e",
        bg: "#fff1f2",
      })
    );
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedToCart((prev) => ({ ...prev, [product.id]: false })), 1800);
  };

  const filtered = allProducts
    .filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.isNew - a.isNew;
      return b.reviews - a.reviews;
    });

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, searchQuery, sortBy]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < filtered.length && !loadingMore) {
          setLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filtered.length));
            setLoadingMore(false);
          }, 600);
        }
      },
      { rootMargin: "100px" }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filtered.length, loadingMore]);

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleShowMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filtered.length));
      setLoadingMore(false);
    }, 600);
  };

  return (
    <div className="w-full bg-[#fafaf9] min-h-screen pb-12 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={28} opacity={0.1} delay={0.2} duration={14} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={24} opacity={0.1} delay={1} duration={13} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={32} opacity={0.1} delay={0.6} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={22} opacity={0.1} delay={1.8} duration={15} animation="sway2" color="#d1bca8" />
      </div>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-rose-950 via-rose-900 to-pink-950 overflow-hidden py-20 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D6537A]/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-500/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-rose-300/50 text-[10px] font-bold tracking-widest uppercase mb-4">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">All Products</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="font-serif-display text-4xl md:text-6xl font-black text-white leading-[1.1] mb-4">
                Bespoke Blooms,<br />
                <span className="text-rose-300 italic font-medium font-serif-display">For Every Feeling</span>
              </h1>
              <p className="text-rose-200/60 text-xs sm:text-sm max-w-md leading-relaxed font-light font-inter">
                Hand-arranged with surgical precision, sourced fresh daily, and delivered with same-day care across Delhi NCR.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              {[
                { text: "Free delivery available" },
                { text: "Fresh from the farm daily" },
                { text: "Same-day delivery NCR wide" },
              ].map(({ text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm select-none"
                >
                  <span className="text-white/80 text-xs font-semibold tracking-wider font-inter">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter / Search Bar ── */}
      <div className="sticky top-[80px] z-40 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
          {/* Scrollable Categories List */}
          <div className="flex gap-2.5 overflow-x-auto scrollbar-hide py-1">
            {categoryFilters.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`shrink-0 rounded-2xl px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${isSelected
                      ? "bg-[#14301F] text-white border-[#14301F] shadow-soft shadow-[#14301F]/20"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-[#14301F] hover:scale-[1.04]"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search, Stats, & Sort */}
          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-gray-50/50 border border-gray-200 text-xs text-[#14301F] placeholder-gray-400 outline-none focus:border-rose-300 focus:bg-white focus:ring-1 focus:ring-rose-300/10 transition-all duration-300 font-inter font-medium"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={13} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest hidden md:block">
              {visibleProducts.length} of {filtered.length} items
            </span>

            {/* Sort Dropdown */}
            <div className="relative ml-auto shrink-0 select-none">
              <button
                onClick={() => setShowSortDropdown((v) => !v)}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-2.5 text-xs font-bold text-gray-700 hover:border-gray-300 transition-all duration-300"
              >
                <SlidersHorizontal size={12} className="text-gray-500" />
                <span>{sortOptions.find((s) => s.value === sortBy)?.label}</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${showSortDropdown ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showSortDropdown && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 top-11 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 w-48 z-50 overflow-hidden"
                    >
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setSortBy(opt.value);
                            setShowSortDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-rose-50 hover:text-[#D6537A] ${sortBy === opt.value ? "text-[#D6537A] bg-[#F4C9D1]/40" : "text-gray-600"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <RevealSection className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 flex flex-col items-center gap-4"
            >
              <div className="text-5xl select-none">🌸</div>
              <h3 className="font-serif-display text-2xl font-bold text-[#14301F]">No Blooms Found</h3>
              <p className="text-gray-400 text-sm max-w-xs font-light">Try adjusting your filters or search query to find the perfect flower arrangement.</p>
              <button
                onClick={() => {
                  handleCategoryChange("All");
                  setSearchQuery("");
                }}
                className="mt-2 bg-[#14301F] text-white rounded-2xl px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[#1a3320] hover:shadow-soft-lg hover:shadow-[#14301F]/30 hover:scale-[1.04] transition-all duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <>
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {visibleProducts.map((product, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    key={product.id}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-soft-lg hover:shadow-rose-500/10 cursor-pointer relative flex flex-col"
                  >
                    {/* Image Block */}
                    <div className="relative overflow-hidden bg-[#F4C9D1]/20 aspect-[4/3] w-full tilt-card">
                      <div className="tilt-card-inner">
                        <LazyImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="absolute top-3 left-3 flex items-start justify-between z-10 pointer-events-none">
                        {product.tag ? (
                          <span className={`text-[8px] font-black tracking-widest uppercase rounded-full px-2.5 py-1 border ${tagStyles[product.tagColor]} backdrop-blur-md`}>
                            {product.tag}
                          </span>
                        ) : (
                          <span />
                        )}
                      </div>

                      {/* Hover Slide Add Button */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 hidden sm:block">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className={`w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 ${addedToCart[product.id] ? "bg-emerald-500 text-white" : "bg-slate-900 text-white hover:bg-[#D6537A] hover:scale-[1.02]"
                            }`}
                        >
                          {addedToCart[product.id] ? "✓ Added" : "Quick Add"}
                        </button>
                      </div>
                    </div>

                    {/* Meta Details Block */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[9px] font-bold text-rose-400 tracking-widest uppercase mb-1">{product.category}</p>
                      <h3 className="font-serif-display text-sm font-bold text-[#14301F] leading-snug mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-1 font-light">{product.desc}</p>

                      {/* Review row */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={10}
                              className={
                                s <= Math.round(product.rating)
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-gray-200 fill-gray-200"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-[9px] text-gray-400 font-bold font-inter mt-0.5">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Pricing Row */}
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                        <div className="flex flex-col">
                          <a href="tel:9540849659" className="font-bold text-[#D6537A] text-sm inline-flex items-center gap-1.5"><Phone size={14} className="icon-wiggle" /> Call for Price</a>
                        </div>

                        {/* Quick Cart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className={`group w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shadow-soft ${addedToCart[product.id]
                              ? "bg-emerald-500 border-emerald-500"
                              : "bg-[#14301F] border-[#14301F] hover:bg-[#D6537A] hover:border-rose-500 hover:scale-105"
                            }`}
                          aria-label="Add to cart"
                        >
                          <ShoppingBag size={14} className="text-white icon-wiggle" strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Load More Section */}
              {hasMore && (
                <div ref={loaderRef} className="flex flex-col items-center gap-4 mt-12">
                  {loadingMore ? (
                    <div className="flex items-center gap-2 text-[#D6537A]">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-xs font-bold tracking-widest uppercase font-inter">Loading more blooms...</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleShowMore}
                      className="group inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-[#D6537A] hover:border-rose-300 rounded-2xl px-8 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:scale-[1.03]"
                    >
                      <span>Show More ({filtered.length - visibleCount} remaining)</span>
                      <ChevronDown size={14} className="icon-wiggle" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </RevealSection>

      {/* ── Bottom Custom Order Banner ── */}
      <RevealSection className="py-20 px-6 bg-gradient-to-r from-rose-50 via-pink-50/50 to-amber-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest text-rose-400 uppercase font-inter">Custom Arrangements</p>
          <h2 className="font-serif-display text-3xl md:text-4xl font-black text-[#14301F] leading-tight">
            Can't find exactly what you want?
          </h2>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light font-inter">
            Tell us your budget, occasion, and favorite blooms. Our master florists will craft a bespoke arrangement just for you.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#14301F] text-white rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#1a3320] hover:shadow-soft-lg hover:shadow-[#14301F]/30 hover:scale-[1.04] transition-all duration-300 shadow-soft"
          >
            💬 Custom Order WhatsApp
          </a>
        </div>
      </RevealSection>
    </div>
  );
};

export default CategoryPage;