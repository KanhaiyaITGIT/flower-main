import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import LazyImage from "../components/ui/LazyImage";
import RevealSection from "../components/RevealSection";
import FloatingDecoration from "../components/FloatingDecoration";
import Badge from "../components/ui/Badge";
import { WHATSAPP_LINK } from "../constants";
import CallForPricing from "../components/ui/CallForPricing";
import CategoryHero from "../components/CategoryHero";
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
import image12 from "../assets/optimized/bride2-320.webp";
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
import image25 from "../assets/optimized/anni1-320.webp";
import image26 from "../assets/anniversory/anni2.jpg";
import image27 from "../assets/anniversory/anni3.jpg";
import image28 from "../assets/devotional/dev1.jpg";
import image29 from "../assets/devotional/dev2.jpg";
import image30 from "../assets/devotional/dev3.jpg";
import image31 from "../assets/devotional/dev4.jpg";
import image32 from "../assets/devotional/dev12.jpg";
import image33 from "../assets/devotional/dev6.jpg";
import image34 from "../assets/devotional/dev7.jpg";

import image35 from "../assets/optimized/b1-320.webp";
import image36 from "../assets/baloons/b2.jpg";
import image37 from "../assets/baloons/b3.jpg";
import image38 from "../assets/baloons/b4.jpg";
import image39 from "../assets/baloons/b5.jpg";
import image40 from "../assets/candle/cand1.jpg";
import image41 from "../assets/candle/cand2.jpg";
import image42 from "../assets/candle/cand3.jpg";
import image43 from "../assets/candle/cand4.jpg";
import image44 from "../assets/candle/cand5.jpg";
import image45 from "../assets/candle/cand6.jpg";


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
import image83 from "../assets/candle/cand7.jpg";
import image84 from "../assets/candle/cand8.jpg";
import image85 from "../assets/candle/cand9.jpg";
import image146 from "../assets/haldi/h7.jpg";
import image147 from "../assets/haldi/h8.jpg";
import image148 from "../assets/haldi/h9.jpg";
import image149 from "../assets/haldi/h10.jpg";
import image150 from "../assets/haldi/h11.jpg";
import image151 from "../assets/haldi/h12.jpg";
import image152 from "../assets/haldi/h13.jpg";
import image153 from "../assets/haldi/h14.jpg";
import image154 from "../assets/haldi/h15.jpg";
import image155 from "../assets/haldi/h16.jpg";
import image106 from "../assets/recepmarriage/wed1.jpg";
import image107 from "../assets/recepmarriage/wed2.jpg";
import image108 from "../assets/recepmarriage/wed3.jpg";
import image109 from "../assets/recepmarriage/wed4.jpg";
import image110 from "../assets/recepmarriage/wed5.jpg";
import image111 from "../assets/recepmarriage/wed6.jpg";
import image112 from "../assets/recepmarriage/wed7.jpg";
import image113 from "../assets/recepmarriage/wed8.jpg";
import image114 from "../assets/recepmarriage/wed9.jpg";
import image115 from "../assets/recepmarriage/wed10.jpg";
import image116 from "../assets/recepmarriage/wed11.jpg";
import image117 from "../assets/recepmarriage/wed12.jpg";
import image118 from "../assets/recepmarriage/wed13.jpg";
import image119 from "../assets/recepmarriage/wed14.jpg";
import image120 from "../assets/recepmarriage/wed15.jpg";
import image206 from "../assets/devotional/d1.jpg";
import image207 from "../assets/devotional/d2.jpg";
import image208 from "../assets/devotional/d3.jpg";
import image209 from "../assets/devotional/d4.jpg";
import image210 from "../assets/devotional/d5.jpg";
import image211 from "../assets/devotional/d6.jpg";
import image212 from "../assets/devotional/d7.jpg";
import image213 from "../assets/devotional/d8.jpg";
import image214 from "../assets/devotional/d9.jpg";
import image215 from "../assets/devotional/d10.jpg";
import image216 from "../assets/devotional/d11.jpg";
import image217 from "../assets/devotional/d12.jpg";
import image218 from "../assets/devotional/d13.jpg";
import image219 from "../assets/devotional/d14.jpg";
import image220 from "../assets/devotional/d15.jpg";

import image86 from "../assets/Bouquet/Bouquet16.jpg";
import image87 from "../assets/Bouquet/Bouquet17.jpg";
import image88 from "../assets/Bouquet/Bouquet18.jpg";
import image89 from "../assets/Bouquet/Bouquet19.jpg";
import image90 from "../assets/Bouquet/Bouquet20.jpg";
import image91 from "../assets/Bouquet/Bouquet21.jpg";
import image92 from "../assets/Bouquet/Bouquet22.jpg";
import image93 from "../assets/Bouquet/Bouquet23.jpg";
import image94 from "../assets/Bouquet/Bouquet24.jpg";
import image95 from "../assets/Bouquet/Bouquet25.jpg";
import image96 from "../assets/Bouquet/Bouquet26.jpg";
import image97 from "../assets/Bouquet/Bouquet27.jpg";
import image98 from "../assets/Bouquet/Bouquet28.jpg";
import image99 from "../assets/Bouquet/Bouquet29.jpg";
import image100 from "../assets/Bouquet/Bouquet30.jpg";
import image101 from "../assets/Bouquet/Bouquet31.jpg";
import image102 from "../assets/Bouquet/Bouquet32.jpg";
import image103 from "../assets/Bouquet/Bouquet33.jpg";
import image104 from "../assets/Bouquet/Bouquet34.jpg";
import image105 from "../assets/Bouquet/Bouquet35.jpg";
import image186 from "../assets/anniversory/anni13.jpg";
import image187 from "../assets/anniversory/anni14.jpg";
import image188 from "../assets/anniversory/anni15.jpg";
import image189 from "../assets/anniversory/anni16.jpg";
import image190 from "../assets/anniversory/anni17.jpg";
import image191 from "../assets/anniversory/anni18.jpg";
import image192 from "../assets/anniversory/anni19.jpg";
import image193 from "../assets/anniversory/anni20.jpg";
import image194 from "../assets/anniversory/anni21.jpg";
import image195 from "../assets/anniversory/anni22.jpg";
import image196 from "../assets/anniversory/anni23.jpg";
import image226 from "../assets/baloons/b13.jpg";
import image227 from "../assets/baloons/b14.jpg";
import image228 from "../assets/baloons/b15.jpg";
import image229 from "../assets/baloons/b16.jpg";
import image230 from "../assets/baloons/b17.jpg";
import image231 from "../assets/baloons/b18.jpg";
import image232 from "../assets/baloons/b19.jpg";
import image233 from "../assets/baloons/b20.jpg";
import image234 from "../assets/baloons/b21.jpg";
import image235 from "../assets/baloons/b22.jpg";
import image236 from "../assets/baloons/b23.jpg";
import image237 from "../assets/baloons/b9.jpg";
import image238 from "../assets/baloons/b10.jpg";
import image239 from "../assets/baloons/b11.jpg";
import image240 from "../assets/baloons/b12.jpg";
import image166 from "../assets/birthday/bi13.jpg";
import image167 from "../assets/birthday/bi14.jpg";
import image168 from "../assets/birthday/bi15.jpg";
import image169 from "../assets/birthday/bi16.jpg";
import image170 from "../assets/birthday/bi17.jpg";
import image171 from "../assets/birthday/bi18.jpg";
import image172 from "../assets/birthday/bi19.jpg";
import image173 from "../assets/birthday/bi20.jpg";
import image174 from "../assets/birthday/bi21.jpg";
import image175 from "../assets/birthday/bi22.jpg";
import image176 from "../assets/birthday/bi23.jpg";
import image177 from "../assets/birthday/bi24.jpg";
import image178 from "../assets/birthday/bi25.jpg";
import rece1 from "../assets/recepmarriage/rece1.jpg";
import rece2 from "../assets/recepmarriage/rece2.jpg";
import rece3 from "../assets/recepmarriage/rece3.jpg";
import rece4 from "../assets/recepmarriage/rece4.jpg";
import rece5 from "../assets/recepmarriage/rece5.jpg";
import rece6 from "../assets/recepmarriage/rece6.jpg";
import rece7 from "../assets/recepmarriage/rece7.jpg";
import rece8 from "../assets/recepmarriage/rece8.jpg";
import rece9 from "../assets/recepmarriage/rece9.jpg";
import rece10 from "../assets/recepmarriage/rece10.jpg";
import c1 from "../assets/candle/c1.jpg";
import c2 from "../assets/candle/c2.jpg";
import c3 from "../assets/candle/c3.jpg";
import c4 from "../assets/candle/c4.jpg";
import c5 from "../assets/candle/c5.jpg";
import c6 from "../assets/candle/c6.jpg";
import c7 from "../assets/candle/c7.jpg";
import c8 from "../assets/candle/c8.jpg";
import c9 from "../assets/candle/c9.jpg";
import c10 from "../assets/candle/c10.jpg";
import c11 from "../assets/candle/c11.jpg";
import c12 from "../assets/candle/c12.jpg";
import c13 from "../assets/candle/c13.jpg";
import c14 from "../assets/candle/c14.jpg";
import c15 from "../assets/candle/c15.jpg";



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

  // ── New products (20 per category) ──

  // Bouquets
  { id: 86, name: "Premium Blush Posy", price: 499, originalPrice: null, rating: 4.6, reviews: 99, image: image86, category: "Bouquets", tag: "New", tagColor: "purple", isNew: true, desc: "Handcrafted luxury blooms in elegant paper wrap", placeholderFile: "bouquet-11.jpg" },
{ id: 87, name: "Luxury Crimson Bunch", price: 599, originalPrice: null, rating: 4.7, reviews: 22, image: image87, category: "Bouquets", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fresh seasonal flowers tied with silk ribbon", placeholderFile: "bouquet-12.jpg" },
{ id: 88, name: "Artisan Golden Bouquet", price: 699, originalPrice: null, rating: 4.8, reviews: 62, image: image88, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Premium mixed arrangement in signature style", placeholderFile: "bouquet-13.jpg" },
{ id: 89, name: "Fresh Ivory Collection", price: 799, originalPrice: null, rating: 4.9, reviews: 53, image: image89, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Artisan bouquet with curated seasonal stems", placeholderFile: "bouquet-14.jpg" },
{ id: 90, name: "Hand-tied Coral Bundle", price: 899, originalPrice: null, rating: 5.0, reviews: 66, image: image90, category: "Bouquets", tag: "Gift", tagColor: "amber", isNew: false, desc: "Delicate hand-tied posy for any occasion", placeholderFile: "bouquet-15.jpg" },
{ id: 91, name: "Garden Misty Wrap", price: 999, originalPrice: null, rating: 4.6, reviews: 97, image: image91, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Handcrafted luxury blooms in elegant paper wrap", placeholderFile: "bouquet-16.jpg" },
{ id: 92, name: "Floral Sunrise Ensemble", price: 1099, originalPrice: null, rating: 4.7, reviews: 82, image: image92, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Fresh seasonal flowers tied with silk ribbon", placeholderFile: "bouquet-17.jpg" },
{ id: 93, name: "Classic Twilight Spray", price: 1199, originalPrice: null, rating: 4.8, reviews: 25, image: image93, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Premium mixed arrangement in signature style", placeholderFile: "bouquet-18.jpg" },
{ id: 94, name: "Velvet Velvet Cluster", price: 1299, originalPrice: null, rating: 4.9, reviews: 42, image: image94, category: "Bouquets", tag: "New", tagColor: "purple", isNew: true, desc: "Artisan bouquet with curated seasonal stems", placeholderFile: "bouquet-19.jpg" },
{ id: 95, name: "Charming Silk Mix", price: 1499, originalPrice: null, rating: 5.0, reviews: 85, image: image95, category: "Bouquets", tag: "Popular", tagColor: "amber", isNew: false, desc: "Delicate hand-tied posy for any occasion", placeholderFile: "bouquet-20.jpg" },
{ id: 96, name: "Premium Amber Posy", price: 1599, originalPrice: null, rating: 4.6, reviews: 93, image: image96, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Handcrafted luxury blooms in elegant paper wrap", placeholderFile: "bouquet-21.jpg" },
{ id: 97, name: "Luxury Sapphire Bunch", price: 1799, originalPrice: null, rating: 4.7, reviews: 37, image: image97, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Fresh seasonal flowers tied with silk ribbon", placeholderFile: "bouquet-22.jpg" },
{ id: 98, name: "Artisan Crystal Bouquet", price: 1999, originalPrice: null, rating: 4.8, reviews: 88, image: image98, category: "Bouquets", tag: "Gift", tagColor: "amber", isNew: false, desc: "Premium mixed arrangement in signature style", placeholderFile: "bouquet-23.jpg" },
{ id: 99, name: "Fresh Pearl Collection", price: 2199, originalPrice: null, rating: 4.9, reviews: 74, image: image99, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Artisan bouquet with curated seasonal stems", placeholderFile: "bouquet-24.jpg" },
{ id: 100, name: "Hand-tied Jade Bundle", price: 2499, originalPrice: null, rating: 5.0, reviews: 98, image: image100, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Delicate hand-tied posy for any occasion", placeholderFile: "bouquet-25.jpg" },
{ id: 101, name: "Garden Cedar Wrap", price: 2999, originalPrice: null, rating: 4.6, reviews: 45, image: image101, category: "Bouquets", tag: null, tagColor: null, isNew: false, desc: "Handcrafted luxury blooms in elegant paper wrap", placeholderFile: "bouquet-26.jpg" },
{ id: 102, name: "Floral Lunar Ensemble", price: 3499, originalPrice: null, rating: 4.7, reviews: 25, image: image102, category: "Bouquets", tag: "New", tagColor: "purple", isNew: true, desc: "Fresh seasonal flowers tied with silk ribbon", placeholderFile: "bouquet-27.jpg" },
{ id: 103, name: "Classic Solar Spray", price: 3999, originalPrice: null, rating: 4.8, reviews: 83, image: image103, category: "Bouquets", tag: "Popular", tagColor: "amber", isNew: false, desc: "Premium mixed arrangement in signature style", placeholderFile: "bouquet-28.jpg" },
{ id: 104, name: "Velvet Azure Cluster", price: 4499, originalPrice: null, rating: 4.9, reviews: 56, image: image104, category: "Bouquets", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Artisan bouquet with curated seasonal stems", placeholderFile: "bouquet-29.jpg" },
{ id: 105, name: "Charming Mauve Mix", price: 4999, originalPrice: null, rating: 5.0, reviews: 86, image: image105, category: "Bouquets", tag: "Sale", tagColor: "green", isNew: false, desc: "Delicate hand-tied posy for any occasion", placeholderFile: "bouquet-30.jpg" },
  // Wedding
  { id: 106, name: "Grand Blush Arch", price: 499, originalPrice: null, rating: 4.6, reviews: 90, image: image106, category: "Wedding", tag: "New", tagColor: "purple", isNew: true, desc: "Exquisite floral arrangement for wedding ceremonies", placeholderFile: "wedding-11.jpg" },
{ id: 107, name: "Luxury Crimson Mandap", price: 599, originalPrice: null, rating: 4.7, reviews: 55, image: image107, category: "Wedding", tag: "Popular", tagColor: "amber", isNew: false, desc: "Luxury wedding decor with premium fresh blooms", placeholderFile: "wedding-12.jpg" },
{ id: 108, name: "Elegant Golden Setup", price: 699, originalPrice: null, rating: 4.8, reviews: 47, image: image108, category: "Wedding", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Elegant wedding flowers handcrafted by master florists", placeholderFile: "wedding-13.jpg" },
{ id: 109, name: "Royal Ivory Decor", price: 799, originalPrice: null, rating: 4.9, reviews: 99, image: image109, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Premium floral decoration for grand celebrations", placeholderFile: "wedding-14.jpg" },
{ id: 110, name: "Premium Coral Stage", price: 899, originalPrice: null, rating: 5.0, reviews: 96, image: image110, category: "Wedding", tag: "Gift", tagColor: "amber", isNew: false, desc: "Beautifully styled wedding flowers for your special day", placeholderFile: "wedding-15.jpg" },
{ id: 111, name: "Bridal Misty Collection", price: 999, originalPrice: null, rating: 4.6, reviews: 42, image: image111, category: "Wedding", tag: null, tagColor: null, isNew: false, desc: "Exquisite floral arrangement for wedding ceremonies", placeholderFile: "wedding-16.jpg" },
{ id: 112, name: "Exquisite Sunrise Varmala", price: 1099, originalPrice: null, rating: 4.7, reviews: 61, image: image112, category: "Wedding", tag: null, tagColor: null, isNew: false, desc: "Luxury wedding decor with premium fresh blooms", placeholderFile: "wedding-17.jpg" },
{ id: 113, name: "Regal Twilight Ensemble", price: 1199, originalPrice: null, rating: 4.8, reviews: 34, image: image113, category: "Wedding", tag: null, tagColor: null, isNew: false, desc: "Elegant wedding flowers handcrafted by master florists", placeholderFile: "wedding-18.jpg" },
{ id: 114, name: "Divine Velvet Ceremony", price: 1299, originalPrice: null, rating: 4.9, reviews: 82, image: image114, category: "Wedding", tag: "New", tagColor: "purple", isNew: true, desc: "Premium floral decoration for grand celebrations", placeholderFile: "wedding-19.jpg" },
{ id: 115, name: "Opulent Silk Display", price: 1499, originalPrice: null, rating: 5.0, reviews: 71, image: image115, category: "Wedding", tag: "Popular", tagColor: "amber", isNew: false, desc: "Beautifully styled wedding flowers for your special day", placeholderFile: "wedding-20.jpg" },
{ id: 116, name: "Grand Amber Arch", price: 1599, originalPrice: null, rating: 4.6, reviews: 60, image: image116, category: "Wedding", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Exquisite floral arrangement for wedding ceremonies", placeholderFile: "wedding-21.jpg" },
{ id: 117, name: "Luxury Sapphire Mandap", price: 1799, originalPrice: null, rating: 4.7, reviews: 92, image: image117, category: "Wedding", tag: "Sale", tagColor: "green", isNew: false, desc: "Luxury wedding decor with premium fresh blooms", placeholderFile: "wedding-22.jpg" },
{ id: 118, name: "Elegant Crystal Setup", price: 1999, originalPrice: null, rating: 4.8, reviews: 46, image: image118, category: "Wedding", tag: "Gift", tagColor: "amber", isNew: false, desc: "Elegant wedding flowers handcrafted by master florists", placeholderFile: "wedding-23.jpg" },
{ id: 119, name: "Royal Pearl Decor", price: 2199, originalPrice: null, rating: 4.9, reviews: 58, image: image119, category: "Wedding", tag: null, tagColor: null, isNew: false, desc: "Premium floral decoration for grand celebrations", placeholderFile: "wedding-24.jpg" },
{ id: 120, name: "Premium Jade Stage", price: 2499, originalPrice: null, rating: 5.0, reviews: 54, image: image120, category: "Wedding", tag: null, tagColor: null, isNew: false, desc: "Beautifully styled wedding flowers for your special day", placeholderFile: "wedding-25.jpg" },


  // Reception
{ id: 126, name: "Stunning Blush Backdrop", price: 499, originalPrice: null, rating: 4.6, reviews: 51, image: rece1, category: "Reception", tag: "New", tagColor: "purple", isNew: true, desc: "Stunning floral arrangement for reception decor", placeholderFile: "reception-11.jpg" },
  { id: 127, name: "Elegant Crimson Centerpiece", price: 599, originalPrice: null, rating: 4.7, reviews: 97, image: rece2, category: "Reception", tag: "Popular", tagColor: "amber", isNew: false, desc: "Elegant reception flowers with premium styling", placeholderFile: "reception-12.jpg" },
  { id: 128, name: "Luxury Golden Table", price: 699, originalPrice: null, rating: 4.8, reviews: 76, image: rece3, category: "Reception", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Luxury reception decor handcrafted by florists", placeholderFile: "reception-13.jpg" },
  { id: 129, name: "Grand Ivory Entrance", price: 799, originalPrice: null, rating: 4.9, reviews: 31, image: rece4, category: "Reception", tag: "Sale", tagColor: "green", isNew: false, desc: "Beautiful table arrangement for reception events", placeholderFile: "reception-14.jpg" },
  { id: 130, name: "Premium Coral Aisle", price: 899, originalPrice: null, rating: 5.0, reviews: 34, image: rece5, category: "Reception", tag: "Gift", tagColor: "amber", isNew: false, desc: "Premium reception floral decoration service", placeholderFile: "reception-15.jpg" },
  { id: 131, name: "Royal Misty Setup", price: 999, originalPrice: null, rating: 4.6, reviews: 58, image: rece6, category: "Reception", tag: null, tagColor: null, isNew: false, desc: "Stunning floral arrangement for reception decor", placeholderFile: "reception-16.jpg" },
  { id: 132, name: "Beautiful Sunrise Stage", price: 1099, originalPrice: null, rating: 4.7, reviews: 78, image: rece7, category: "Reception", tag: null, tagColor: null, isNew: false, desc: "Elegant reception flowers with premium styling", placeholderFile: "reception-17.jpg" },
  { id: 133, name: "Chic Twilight Decor", price: 1199, originalPrice: null, rating: 4.8, reviews: 21, image: rece8, category: "Reception", tag: null, tagColor: null, isNew: false, desc: "Luxury reception decor handcrafted by florists", placeholderFile: "reception-18.jpg" },
  { id: 134, name: "Sophisticated Velvet Look", price: 1299, originalPrice: null, rating: 4.9, reviews: 50, image: rece9, category: "Reception", tag: "New", tagColor: "purple", isNew: true, desc: "Beautiful table arrangement for reception events", placeholderFile: "reception-19.jpg" },
  { id: 135, name: "Glamorous Silk Display", price: 1499, originalPrice: null, rating: 5.0, reviews: 88, image: rece10, category: "Reception", tag: "Popular", tagColor: "amber", isNew: false, desc: "Premium reception floral decoration service", placeholderFile: "reception-20.jpg" },
  

  // Haldi
  { id: 146, name: "Traditional Blush Garland", price: 499, originalPrice: null, rating: 4.6, reviews: 46, image: image146, category: "Haldi", tag: "New", tagColor: "purple", isNew: true, desc: "Traditional haldi ceremony floral decoration", placeholderFile: "haldi-11.jpg" },
  { id: 147, name: "Vibrant Crimson Backdrop", price: 599, originalPrice: null, rating: 4.7, reviews: 90, image: image147, category: "Haldi", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fresh marigold arrangement for haldi function", placeholderFile: "haldi-12.jpg" },
  { id: 148, name: "Fresh Golden Decor", price: 699, originalPrice: null, rating: 4.8, reviews: 45, image: image148, category: "Haldi", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Vibrant yellow floral decor for haldi celebration", placeholderFile: "haldi-13.jpg" },
  { id: 149, name: "Royal Ivory Setup", price: 799, originalPrice: null, rating: 4.9, reviews: 51, image: image149, category: "Haldi", tag: "Sale", tagColor: "green", isNew: false, desc: "Ceremonial haldi flowers handcrafted with care", placeholderFile: "haldi-14.jpg" },
{ id: 150, name: "Golden Coral Stage", price: 899, originalPrice: null, rating: 5.0, reviews: 61, image: image150, category: "Haldi", tag: "Gift", tagColor: "amber", isNew: false, desc: "Blessed floral arrangement for haldi ceremony", placeholderFile: "haldi-15.jpg" },
{ id: 151, name: "Marigold Misty Arch", price: 999, originalPrice: null, rating: 4.6, reviews: 24, image: image151, category: "Haldi", tag: null, tagColor: null, isNew: false, desc: "Traditional haldi ceremony floral decoration", placeholderFile: "haldi-16.jpg" },
  { id: 152, name: "Festive Sunrise Bundle", price: 1099, originalPrice: null, rating: 4.7, reviews: 71, image: image152, category: "Haldi", tag: null, tagColor: null, isNew: false, desc: "Fresh marigold arrangement for haldi function", placeholderFile: "haldi-17.jpg" },
  { id: 153, name: "Colorful Twilight Display", price: 1199, originalPrice: null, rating: 4.8, reviews: 52, image: image153, category: "Haldi", tag: null, tagColor: null, isNew: false, desc: "Vibrant yellow floral decor for haldi celebration", placeholderFile: "haldi-18.jpg" },
  { id: 154, name: "Ceremonial Velvet Pack", price: 1299, originalPrice: null, rating: 4.9, reviews: 72, image: image154, category: "Haldi", tag: "New", tagColor: "purple", isNew: true, desc: "Ceremonial haldi flowers handcrafted with care", placeholderFile: "haldi-19.jpg" },
  { id: 155, name: "Blessed Silk Collection", price: 1499, originalPrice: null, rating: 5.0, reviews: 31, image: image155, category: "Haldi", tag: "Popular", tagColor: "amber", isNew: false, desc: "Blessed floral arrangement for haldi ceremony", placeholderFile: "haldi-20.jpg" },
  
  // Birthday
 { id: 166, name: "Happy Blush Surprise", price: 499, originalPrice: null, rating: 4.6, reviews: 37, image: image166, category: "Birthday", tag: "New", tagColor: "purple", isNew: true, desc: "Special birthday surprise flower arrangement", placeholderFile: "birthday-11.jpg" },
{ id: 167, name: "Celebration Crimson Box", price: 599, originalPrice: null, rating: 4.7, reviews: 62, image: image167, category: "Birthday", tag: "Popular", tagColor: "amber", isNew: false, desc: "Joyful birthday blooms in premium packaging", placeholderFile: "birthday-12.jpg" },
{ id: 168, name: "Joyful Golden Bouquet", price: 699, originalPrice: null, rating: 4.8, reviews: 25, image: image168, category: "Birthday", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Celebration bouquet for happy birthday wishes", placeholderFile: "birthday-13.jpg" },
{ id: 169, name: "Festive Ivory Hamper", price: 799, originalPrice: null, rating: 4.9, reviews: 72, image: image169, category: "Birthday", tag: "Sale", tagColor: "green", isNew: false, desc: "Festive birthday flowers handcrafted with love", placeholderFile: "birthday-14.jpg" },
{ id: 170, name: "Special Coral Bundle", price: 899, originalPrice: null, rating: 5.0, reviews: 51, image: image170, category: "Birthday", tag: "Gift", tagColor: "amber", isNew: false, desc: "Cheerful floral gift for birthday celebration", placeholderFile: "birthday-15.jpg" },
{ id: 171, name: "Cheerful Misty Wrap", price: 999, originalPrice: null, rating: 4.6, reviews: 72, image: image171, category: "Birthday", tag: null, tagColor: null, isNew: false, desc: "Special birthday surprise flower arrangement", placeholderFile: "birthday-16.jpg" },
{ id: 172, name: "Delight Sunrise Arrangement", price: 1099, originalPrice: null, rating: 4.7, reviews: 67, image: image172, category: "Birthday", tag: null, tagColor: null, isNew: false, desc: "Joyful birthday blooms in premium packaging", placeholderFile: "birthday-17.jpg" },
{ id: 173, name: "Wonderful Twilight Set", price: 1199, originalPrice: null, rating: 4.8, reviews: 86, image: image173, category: "Birthday", tag: null, tagColor: null, isNew: false, desc: "Celebration bouquet for happy birthday wishes", placeholderFile: "birthday-18.jpg" },
{ id: 174, name: "Vibrant Velvet Gift", price: 1299, originalPrice: null, rating: 4.9, reviews: 91, image: image174, category: "Birthday", tag: "New", tagColor: "purple", isNew: true, desc: "Festive birthday flowers handcrafted with love", placeholderFile: "birthday-19.jpg" },
{ id: 175, name: "Memorable Silk Pack", price: 1499, originalPrice: null, rating: 5.0, reviews: 48, image: image175, category: "Birthday", tag: "Popular", tagColor: "amber", isNew: false, desc: "Cheerful floral gift for birthday celebration", placeholderFile: "birthday-20.jpg" },
{ id: 176, name: "Happy Amber Surprise", price: 1599, originalPrice: null, rating: 4.6, reviews: 21, image: image176, category: "Birthday", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Special birthday surprise flower arrangement", placeholderFile: "birthday-21.jpg" },
{ id: 177, name: "Celebration Sapphire Box", price: 1799, originalPrice: null, rating: 4.7, reviews: 67, image: image177, category: "Birthday", tag: "Sale", tagColor: "green", isNew: false, desc: "Joyful birthday blooms in premium packaging", placeholderFile: "birthday-22.jpg" },
{ id: 178, name: "Joyful Crystal Bouquet", price: 1999, originalPrice: null, rating: 4.8, reviews: 89, image: image178, category: "Birthday", tag: "Gift", tagColor: "amber", isNew: false, desc: "Celebration bouquet for happy birthday wishes", placeholderFile: "birthday-23.jpg" },


  // Anniversary
 { id: 186, name: "Romantic Blush Box", price: 499, originalPrice: null, rating: 4.6, reviews: 95, image: image186, category: "Anniversary", tag: "New", tagColor: "purple", isNew: true, desc: "Romantic anniversary flowers in premium box", placeholderFile: "anniversary-11.jpg" },
{ id: 187, name: "Timeless Crimson Bouquet", price: 599, originalPrice: null, rating: 4.7, reviews: 44, image: image187, category: "Anniversary", tag: "Popular", tagColor: "amber", isNew: false, desc: "Timeless rose arrangement for anniversary celebration", placeholderFile: "anniversary-12.jpg" },
{ id: 188, name: "Eternal Golden Rose", price: 699, originalPrice: null, rating: 4.8, reviews: 55, image: image188, category: "Anniversary", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Luxury anniversary gift with premium blooms", placeholderFile: "anniversary-13.jpg" },
{ id: 189, name: "Luxury Ivory Heart", price: 799, originalPrice: null, rating: 4.9, reviews: 97, image: image189, category: "Anniversary", tag: "Sale", tagColor: "green", isNew: false, desc: "Elegant floral arrangement for love celebration", placeholderFile: "anniversary-14.jpg" },
{ id: 190, name: "Golden Coral Display", price: 899, originalPrice: null, rating: 5.0, reviews: 46, image: image190, category: "Anniversary", tag: "Gift", tagColor: "amber", isNew: false, desc: "Heartfelt anniversary bouquet with fresh flowers", placeholderFile: "anniversary-15.jpg" },
{ id: 191, name: "Passionate Misty Bundle", price: 999, originalPrice: null, rating: 4.6, reviews: 93, image: image191, category: "Anniversary", tag: null, tagColor: null, isNew: false, desc: "Romantic anniversary flowers in premium box", placeholderFile: "anniversary-16.jpg" },
{ id: 192, name: "Forever Sunrise Set", price: 1099, originalPrice: null, rating: 4.7, reviews: 46, image: image192, category: "Anniversary", tag: null, tagColor: null, isNew: false, desc: "Timeless rose arrangement for anniversary celebration", placeholderFile: "anniversary-17.jpg" },
{ id: 193, name: "Cherished Twilight Wrap", price: 1199, originalPrice: null, rating: 4.8, reviews: 41, image: image193, category: "Anniversary", tag: null, tagColor: null, isNew: false, desc: "Luxury anniversary gift with premium blooms", placeholderFile: "anniversary-18.jpg" },
{ id: 194, name: "Devoted Velvet Piece", price: 1299, originalPrice: null, rating: 4.9, reviews: 62, image: image194, category: "Anniversary", tag: "New", tagColor: "purple", isNew: true, desc: "Elegant floral arrangement for love celebration", placeholderFile: "anniversary-19.jpg" },
{ id: 195, name: "Sweetheart Silk Collection", price: 1499, originalPrice: null, rating: 5.0, reviews: 39, image: image195, category: "Anniversary", tag: "Popular", tagColor: "amber", isNew: false, desc: "Heartfelt anniversary bouquet with fresh flowers", placeholderFile: "anniversary-20.jpg" },
{ id: 196, name: "Romantic Amber Box", price: 1599, originalPrice: null, rating: 4.6, reviews: 81, image: image196, category: "Anniversary", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Romantic anniversary flowers in premium box", placeholderFile: "anniversary-21.jpg" },

  // Devotional
 { id: 206, name: "Sacred Blush Garland", price: 499, originalPrice: null, rating: 4.6, reviews: 30, image: image206, category: "Devotional", tag: "New", tagColor: "purple", isNew: true, desc: "Sacred devotional flower arrangement for pooja", placeholderFile: "devotional-11.jpg" },
{ id: 207, name: "Divine Crimson Basket", price: 599, originalPrice: null, rating: 4.7, reviews: 63, image: image207, category: "Devotional", tag: "Popular", tagColor: "amber", isNew: false, desc: "Fresh temple flowers in traditional style", placeholderFile: "devotional-12.jpg" },
{ id: 208, name: "Blessed Golden Pack", price: 699, originalPrice: null, rating: 4.8, reviews: 75, image: image208, category: "Devotional", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Divine floral offering for spiritual blessings", placeholderFile: "devotional-13.jpg" },
{ id: 209, name: "Pooja Ivory Thali", price: 799, originalPrice: null, rating: 4.9, reviews: 76, image: image209, category: "Devotional", tag: "Sale", tagColor: "green", isNew: false, desc: "Premium devotional pack for daily worship", placeholderFile: "devotional-14.jpg" },
{ id: 210, name: "Holy Coral Bundle", price: 899, originalPrice: null, rating: 5.0, reviews: 50, image: image210, category: "Devotional", tag: "Gift", tagColor: "amber", isNew: false, desc: "Blessed flowers for pooja and festivals", placeholderFile: "devotional-15.jpg" },
{ id: 211, name: "Temple Misty Set", price: 999, originalPrice: null, rating: 4.6, reviews: 23, image: image211, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Sacred devotional flower arrangement for pooja", placeholderFile: "devotional-16.jpg" },
{ id: 212, name: "Spiritual Sunrise Mala", price: 1099, originalPrice: null, rating: 4.7, reviews: 61, image: image212, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Fresh temple flowers in traditional style", placeholderFile: "devotional-17.jpg" },
{ id: 213, name: "Pure Twilight Collection", price: 1199, originalPrice: null, rating: 4.8, reviews: 27, image: image213, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Divine floral offering for spiritual blessings", placeholderFile: "devotional-18.jpg" },
{ id: 214, name: "Traditional Velvet Offer", price: 1299, originalPrice: null, rating: 4.9, reviews: 86, image: image214, category: "Devotional", tag: "New", tagColor: "purple", isNew: true, desc: "Premium devotional pack for daily worship", placeholderFile: "devotional-19.jpg" },
{ id: 215, name: "Ritual Silk Pack", price: 1499, originalPrice: null, rating: 5.0, reviews: 43, image: image215, category: "Devotional", tag: "Popular", tagColor: "amber", isNew: false, desc: "Blessed flowers for pooja and festivals", placeholderFile: "devotional-20.jpg" },
{ id: 216, name: "Sacred Amber Garland", price: 1599, originalPrice: null, rating: 4.6, reviews: 77, image: image216, category: "Devotional", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Sacred devotional flower arrangement for pooja", placeholderFile: "devotional-21.jpg" },
{ id: 217, name: "Divine Sapphire Basket", price: 1799, originalPrice: null, rating: 4.7, reviews: 76, image: image217, category: "Devotional", tag: "Sale", tagColor: "green", isNew: false, desc: "Fresh temple flowers in traditional style", placeholderFile: "devotional-22.jpg" },
{ id: 218, name: "Blessed Crystal Pack", price: 1999, originalPrice: null, rating: 4.8, reviews: 45, image: image218, category: "Devotional", tag: "Gift", tagColor: "amber", isNew: false, desc: "Divine floral offering for spiritual blessings", placeholderFile: "devotional-23.jpg" },
{ id: 219, name: "Pooja Pearl Thali", price: 2199, originalPrice: null, rating: 4.9, reviews: 54, image: image219, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Premium devotional pack for daily worship", placeholderFile: "devotional-24.jpg" },
{ id: 220, name: "Holy Jade Bundle", price: 2499, originalPrice: null, rating: 5.0, reviews: 49, image: image220, category: "Devotional", tag: null, tagColor: null, isNew: false, desc: "Blessed flowers for pooja and festivals", placeholderFile: "devotional-25.jpg" },

  // Balloon
  { id: 226, name: "Celebration Blush Arch", price: 499, originalPrice: null, rating: 4.6, reviews: 84, image: image226, category: "Balloon", tag: "New", tagColor: "purple", isNew: true, desc: "Colorful balloon decoration for any celebration", placeholderFile: "balloon-11.jpg" },
{ id: 227, name: "Party Crimson Bouquet", price: 599, originalPrice: null, rating: 4.7, reviews: 90, image: image227, category: "Balloon", tag: "Popular", tagColor: "amber", isNew: false, desc: "Premium balloon arrangement with fresh flowers", placeholderFile: "balloon-12.jpg" },
{ id: 228, name: "Fun Golden Bundle", price: 699, originalPrice: null, rating: 4.8, reviews: 82, image: image228, category: "Balloon", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Festive balloon decor for parties and events", placeholderFile: "balloon-13.jpg" },
{ id: 229, name: "Colorful Ivory Set", price: 799, originalPrice: null, rating: 4.9, reviews: 72, image: image229, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "Joyful balloon bouquet for special occasions", placeholderFile: "balloon-14.jpg" },
{ id: 230, name: "Foil Coral Numbers", price: 899, originalPrice: null, rating: 5.0, reviews: 36, image: image230, category: "Balloon", tag: "Gift", tagColor: "amber", isNew: false, desc: "Celebration balloon kit with premium styling", placeholderFile: "balloon-15.jpg" },
{ id: 231, name: "Premium Misty Decor", price: 999, originalPrice: null, rating: 4.6, reviews: 98, image: image231, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Colorful balloon decoration for any celebration", placeholderFile: "balloon-16.jpg" },
{ id: 232, name: "Joyful Sunrise Kit", price: 1099, originalPrice: null, rating: 4.7, reviews: 20, image: image232, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Premium balloon arrangement with fresh flowers", placeholderFile: "balloon-17.jpg" },
{ id: 233, name: "Glitter Twilight Pack", price: 1199, originalPrice: null, rating: 4.8, reviews: 27, image: image233, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Festive balloon decor for parties and events", placeholderFile: "balloon-18.jpg" },
{ id: 234, name: "Chic Velvet Display", price: 1299, originalPrice: null, rating: 4.9, reviews: 59, image: image234, category: "Balloon", tag: "New", tagColor: "purple", isNew: true, desc: "Joyful balloon bouquet for special occasions", placeholderFile: "balloon-19.jpg" },
{ id: 235, name: "Whimsical Silk Cluster", price: 1499, originalPrice: null, rating: 5.0, reviews: 61, image: image235, category: "Balloon", tag: "Popular", tagColor: "amber", isNew: false, desc: "Celebration balloon kit with premium styling", placeholderFile: "balloon-20.jpg" },
{ id: 236, name: "Celebration Amber Arch", price: 1599, originalPrice: null, rating: 4.6, reviews: 45, image: image236, category: "Balloon", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Colorful balloon decoration for any celebration", placeholderFile: "balloon-21.jpg" },
{ id: 237, name: "Party Sapphire Bouquet", price: 1799, originalPrice: null, rating: 4.7, reviews: 54, image: image237, category: "Balloon", tag: "Sale", tagColor: "green", isNew: false, desc: "Premium balloon arrangement with fresh flowers", placeholderFile: "balloon-22.jpg" },
{ id: 238, name: "Fun Crystal Bundle", price: 1999, originalPrice: null, rating: 4.8, reviews: 43, image: image238, category: "Balloon", tag: "Gift", tagColor: "amber", isNew: false, desc: "Festive balloon decor for parties and events", placeholderFile: "balloon-23.jpg" },
{ id: 239, name: "Colorful Pearl Set", price: 2199, originalPrice: null, rating: 4.9, reviews: 95, image: image239, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Joyful balloon bouquet for special occasions", placeholderFile: "balloon-24.jpg" },
{ id: 240, name: "Foil Jade Numbers", price: 2499, originalPrice: null, rating: 5.0, reviews: 50, image: image240, category: "Balloon", tag: null, tagColor: null, isNew: false, desc: "Celebration balloon kit with premium styling", placeholderFile: "balloon-25.jpg" },

  // Candles & More
 { id: 246, name: "Scented Blush Candle", price: 499, originalPrice: null, rating: 4.6, reviews: 60, image: c1, category: "Candles & More", tag: "New", tagColor: "purple", isNew: true, desc: "Premium scented candle in floral fragrance", placeholderFile: "candles-11.jpg" },
  { id: 247, name: "Luxury Crimson Diffuser", price: 599, originalPrice: null, rating: 4.7, reviews: 97, image: c2, category: "Candles & More", tag: "Popular", tagColor: "amber", isNew: false, desc: "Luxury home fragrance with essential oils", placeholderFile: "candles-12.jpg" },
  { id: 248, name: "Floral Golden Soap", price: 699, originalPrice: null, rating: 4.8, reviews: 35, image: c3, category: "Candles & More", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Handcrafted candle in elegant glass jar", placeholderFile: "candles-13.jpg" },
  { id: 249, name: "Aromatic Ivory Set", price: 799, originalPrice: null, rating: 4.9, reviews: 29, image: c4, category: "Candles & More", tag: "Sale", tagColor: "green", isNew: false, desc: "Aromatic gift set with candles and diffuser", placeholderFile: "candles-14.jpg" },
  { id: 250, name: "Premium Coral Hamper", price: 899, originalPrice: null, rating: 5.0, reviews: 94, image: c5, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: false, desc: "Botanical candle collection with natural scents", placeholderFile: "candles-15.jpg" },
  { id: 251, name: "Handmade Misty Candle", price: 999, originalPrice: null, rating: 4.6, reviews: 47, image: c6, category: "Candles & More", tag: null, tagColor: null, isNew: false, desc: "Premium scented candle in floral fragrance", placeholderFile: "candles-16.jpg" },
  { id: 252, name: "Essence Sunrise Gift", price: 1099, originalPrice: null, rating: 4.7, reviews: 50, image: c7, category: "Candles & More", tag: null, tagColor: null, isNew: false, desc: "Luxury home fragrance with essential oils", placeholderFile: "candles-17.jpg" },
  { id: 253, name: "Bloom Twilight Kit", price: 1199, originalPrice: null, rating: 4.8, reviews: 74, image: c8, category: "Candles & More", tag: null, tagColor: null, isNew: false, desc: "Handcrafted candle in elegant glass jar", placeholderFile: "candles-18.jpg" },
  { id: 254, name: "Serene Velvet Bundle", price: 1299, originalPrice: null, rating: 4.9, reviews: 61, image: c9, category: "Candles & More", tag: "New", tagColor: "purple", isNew: true, desc: "Aromatic gift set with candles and diffuser", placeholderFile: "candles-19.jpg" },
  { id: 255, name: "Botanical Silk Collection", price: 1499, originalPrice: null, rating: 5.0, reviews: 74, image: c10, category: "Candles & More", tag: "Popular", tagColor: "amber", isNew: false, desc: "Botanical candle collection with natural scents", placeholderFile: "candles-20.jpg" },
  { id: 256, name: "Scented Amber Candle", price: 1599, originalPrice: null, rating: 4.6, reviews: 99, image: c11, category: "Candles & More", tag: "Bestseller", tagColor: "rose", isNew: false, desc: "Premium scented candle in floral fragrance", placeholderFile: "candles-21.jpg" },
  { id: 257, name: "Luxury Sapphire Diffuser", price: 1799, originalPrice: null, rating: 4.7, reviews: 64, image: c12, category: "Candles & More", tag: "Sale", tagColor: "green", isNew: false, desc: "Luxury home fragrance with essential oils", placeholderFile: "candles-22.jpg" },
  { id: 258, name: "Floral Crystal Soap", price: 1999, originalPrice: null, rating: 4.8, reviews: 89, image: c13, category: "Candles & More", tag: "Gift", tagColor: "amber", isNew: false, desc: "Handcrafted candle in elegant glass jar", placeholderFile: "candles-23.jpg" },
  { id: 259, name: "Aromatic Pearl Set", price: 2199, originalPrice: null, rating: 4.9, reviews: 96, image: c14, category: "Candles & More", tag: null, tagColor: null, isNew: false, desc: "Aromatic gift set with candles and diffuser", placeholderFile: "candles-24.jpg" },
  { id: 260, name: "Premium Jade Hamper", price: 2499, originalPrice: null, rating: 5.0, reviews: 20, image: c15, category: "Candles & More", tag: null, tagColor: null, isNew: false, desc: "Botanical candle collection with natural scents", placeholderFile: "candles-25.jpg" },
  
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
    <div className="w-full bg-[var(--color-cream)] min-h-screen pb-12 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={28} opacity={0.1} delay={0.2} duration={14} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={24} opacity={0.1} delay={1} duration={13} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={32} opacity={0.1} delay={0.6} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={22} opacity={0.1} delay={1.8} duration={15} animation="sway2" color="#d1bca8" />
      </div>
      {/* ── Hero Banner ── */}
      <CategoryHero category={activeCategory} />

      {/* ── Sticky Filter / Search Bar ── */}
      <div className="sticky top-[80px] z-40 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg py-4" style={{background:"rgba(255,255,255,0.58)"}}>
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
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20"
                      : "bg-white/60 backdrop-blur-sm text-gray-500 border-white/40 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)] hover:bg-white/80 hover:scale-[1.04]"
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
                className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-gray-50/50 border border-gray-200 text-xs text-[var(--color-primary)] placeholder-gray-400 outline-none focus:border-rose-300 focus:bg-white focus:ring-1 focus:ring-rose-300/10 transition-all duration-300 font-inter font-medium"
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
                          className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-rose-50 hover:text-[var(--color-accent)] ${sortBy === opt.value ? "text-[var(--color-accent)] bg-[var(--color-blush)]/40" : "text-gray-600"
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
              <h3 className="font-serif-display text-2xl font-bold text-[var(--color-primary)]">No Blooms Found</h3>
              <p className="text-gray-400 text-sm max-w-xs font-light">Try adjusting your filters or search query to find the perfect flower arrangement.</p>
              <button
                onClick={() => {
                  handleCategoryChange("All");
                  setSearchQuery("");
                }}
                className="mt-2 bg-[var(--color-primary)] text-white rounded-2xl px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[var(--color-primary)] hover:shadow-soft-lg hover:shadow-[var(--color-primary)]/30 hover:scale-[1.04] transition-all duration-300"
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
                    className="group rounded-2xl overflow-hidden border cursor-pointer relative flex flex-col transition-all duration-500"
                    style={{
                      background:"rgba(255,255,255,0.58)",
                      backdropFilter:"blur(16px) saturate(1.3)",
                      WebkitBackdropFilter:"blur(16px) saturate(1.3)",
                      borderColor:"rgba(255,255,255,0.35)"
                    }}
                  >
                    {/* Image Block */}
                    <div className="relative overflow-hidden bg-[var(--color-blush)]/30 w-full tilt-card" style={{aspectRatio:"1/1"}}>
                      <div className="tilt-card-inner absolute inset-0">
                        <LazyImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]"/>

                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        {product.tag && (
                          <Badge color={product.tagColor}>{product.tag}</Badge>
                        )}
                      </div>

                      {/* Hover Slide Add Button with backdrop blur */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 hidden sm:block">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className={`w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 backdrop-blur-md ${addedToCart[product.id] ? "bg-emerald-500/90 text-white" : "bg-black/70 text-white hover:bg-[var(--color-accent)]/90"
                            }`}
                        >
                          {addedToCart[product.id] ? "✓ Added" : "Quick Add"}
                        </button>
                      </div>
                    </div>

                    {/* Meta Details Block */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[9px] font-bold text-[var(--color-gold)] tracking-widest uppercase mb-1">{product.category}</p>
                      <h3 className="font-serif-display text-sm font-bold text-[var(--color-primary)] leading-snug mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-1 font-light">{product.desc}</p>

                      {/* Review row */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={`cat-star-${product.id}-${s}`}
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
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/30">
                        <div className="flex flex-col">
                          <CallForPricing />
                        </div>

                        {/* Quick Cart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className={`group w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shadow-soft ${addedToCart[product.id]
                              ? "bg-emerald-500 border-emerald-500"
                              : "bg-[var(--color-primary)] border-[#14301F] hover:bg-[var(--color-accent)] hover:border-rose-500 hover:scale-105"
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
                    <div className="flex items-center gap-2 text-[var(--color-accent)]">
                      <Loader2 size={16} className="animate-spin" />
                      <span className="text-xs font-bold tracking-widest uppercase font-inter">Loading more blooms...</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleShowMore}
                      className="group inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-[var(--color-accent)] hover:border-rose-300 rounded-2xl px-8 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:scale-[1.03]"
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
      <RevealSection className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[#1f4a30] to-emerald-950 border-t border-[var(--color-gold)]/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-gold)] uppercase font-inter">Custom Arrangements</span>
          <h2 className="font-serif-display text-3xl md:text-5xl font-black text-[#FBF6EF] leading-tight">
            Can't find exactly <br/>what you want?
          </h2>
          <p className="text-white/50 text-sm max-w-md leading-relaxed font-light font-inter">
            Tell us your budget, occasion, and favorite blooms. Our master florists will craft a bespoke arrangement just for you.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[var(--color-gold)] text-[var(--color-primary)] rounded-2xl px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:shadow-2xl hover:shadow-[var(--color-gold)]/20 hover:scale-[1.04] transition-all duration-300 shadow-xl"
          >
            💬 Custom Order WhatsApp
          </a>
        </div>
      </RevealSection>
    </div>
  );
};

export default CategoryPage;
