import image1 from "../../assets/apatshy.png";
import image2 from "../../assets/fyagra.png";
import image3 from "../../assets/totshy.png";
import image4 from "../../assets/friday.png";
import image5 from "../../assets/steek.png";
import image6 from "../../assets/steek.png";
import image7 from "../../assets/chocolate.png";
export const menuItems = [
  {
    category: "mixes",
    arabicCategory: "مكسات",
    categoryBg: "#8BC341",
    items: [
      { price: 150, name: "مكس & تشيز" },
      { price: 150, name: "مشوي صدور" },
      { price: 110, name: "أباتشي" },
      { price: 110, name: "شيش طاووق" },
      {
        price: 110,
        name: "شيش طاووق",
        new: true,
        details: { cold: true, hot: true },
      },
      {
        price: 110,
        name: "بقلظ",
        new: true,
        details: { cold: true, hot: true },
      },
      { price: 110, name: "شيش طاووق" },
      { price: 110, name: "أباتشي" },
      { price: 150, name: "مشوي صدور" },
    ],
    image: image1,
  },
  {
    category: "Sea Food",
    arabicCategory: "سي فود",
    categoryBg: "#8BC341",

    items: [
      { price: 150, name: "جمبري مشوي" },
      { price: 150, name: "فياجيرا" },
    ],
    image: image2,
  },
  {
    category: "Sweet",
    arabicCategory: "الحلو",
    categoryBg: "#8BC341",
    items: [
      { price: 35, name: "توتشي فراولة" },
      { price: 35, name: "توتشي لوتس" },
      { price: 35, name: "توتشي فستق" },
      { price: 35, name: "توتشي شيكولاته نوتيلا" },
      { price: 35, name: "توتشي شيكولاته بلجيكي" },
    ],
    image: image3,
  },
  {
    category: "ADD",
    arabicCategory: "اضافات",
    categoryBg: "#62696F",

    items: [
      { price: 35, name: "كومبو ماشين" },
      { price: 35, name: "كومبو كانز" },
      { price: 35, name: "كول سلو" },
      { price: 35, name: "باكت بطاطس" },
      { price: 35, name: "باكت بطاطس كرسبي" },
      { price: 35, name: "علبة صوص جبنة شيدر" },
      { price: 35, name: "علبة بطاطس جبنة شيدر" },
    ],
  },
  {
    category: "beverages",
    arabicCategory: "مشروبات",
    categoryBg: "#8BC341",

    items: [
      { price: 150, name: "مياه معدنية" },
      { price: 150, name: "بيبسي ماشين" },
      { price: 110, name: "كانز" },
    ],
  },
  {
    category: "Chicken",
    arabicCategory: "الدجاج",
    categoryBg: "#62696F",

    items: [
      {
        price: 150,
        name: "زنجر سوبربريم",
        new: true,
        details: { cold: true, hot: true },
      },
      { price: 150, name: "مشوي صدور" },
      { price: 110, name: "شيش طاووق" },
      { price: 110, name: "كورن بلو" },
    ],
    image: image4,
  },
  {
    category: "Meat",
    arabicCategory: "اللحم",
    categoryBg: "#62696F",
    items: [
      {
        price: 150,
        name: "كورون بيف",
      },
      { price: 150, name: "سجق" },
      { price: 110, name: "تكساس برجر" },
      { price: 110, name: "ستيك" },
    ],
    image: image5,
  },
  {
    category: "Breakfast",
    arabicCategory: "الفطار",
    categoryBg: "#62696F",

    items: [
      {
        price: 35,
        name: "بطاطس",
      },
      { price: 35, name: "سموكد بيف" },
      { price: 35, name: "سموكد تركي" },
    ],
    image: image6,
  },
  {
    category: "WAFFLE",
    arabicCategory: "الوافل",
    categoryBg: "#8BC341",
    items: [
      {
        price: 35,
        name: "فراولة",
      },
      { price: 35, name: "لوتس" },
      { price: 35, name: "فستق" },
      { price: 35, name: "شكولاته لوتيلا" },
      { price: 35, name: "شكولاته بلجيكي" },
    ],
    image: image7,
  },
  {
    category: "ADD",
    arabicCategory: "اضافات",
    categoryBg: "#62696F",
    items: [
      {
        price: 35,
        name: "اضافة دجاج",
        desc: "بانيه عادي/بانيه حار/مشوي صدور/ شيش/رومي مدخن.",
      },
      { price: 35, name: "اضافة لحوم", desc: "هوت دوج / برجر / سجق/ روزيف" },
      { price: 35, name: "اضافة بطاطس" },
      { price: 35, name: "اضافة جبنة موتزاريلا" },
      { price: 35, name: "اضافة صوص جبنة شيدر" },
    ],
  },
];
