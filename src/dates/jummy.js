import Oval1 from "./imgs/Oval1.png";
import Oval2 from "./imgs/Oval2.png";
import Oval3 from "./imgs/Oval3.png";
import Oval4 from "./imgs/Oval4.png";
import pl from "./imgs/Placeholder.png";
import pl1 from "./imgs/Placeholder (1).png";
import pl2 from "./imgs/Placeholder (2).png";
import pl3 from "./imgs/Placeholder (3).png";
import pl4 from "./imgs/Placeholder (4).png";
import pl5 from "./imgs/Placeholder (5).png";
export let Data = [
  {
    icon: "fa-solid fa-chart-pie",
    title:"Dashboard",
    inside: [
      {
        icon: "fa-solid fa-universal-access",
        text: "Dashboard",
        url: "dashboard",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "User Anaylitics",
        url: "marketing",
      },
      {
        icon: "fa-solid fa-comments-dollar",
        text: "Feebacks",
        url: "feedback",
      },
    ],
  },
  {
    icon: "fa-solid fa-video",
    title:"Courses",
    inside: [
      {
        icon: "fa-solid fa-circle-plus",
        text: "Add Courses",
        url: "add-course",
      },
      {
        icon: "fa-solid fa-clapperboard",
        text: "All Courses",
        url: "allcourses",
      },
      {
        icon: "fa-solid fa-hourglass-end",
        text: "Pending in Review",
        url: "pending-in-review",
      },
    ],
  },
  {
    icon: "fa-solid fa-inbox",
    title:"Chats",
    inside: [
      {
        icon: "fa-solid fa-question",
        text: "QNA",
        url: "qna",
      },
      {
        icon: "fa-solid fa-message",
        text: "Messages",
        url: "message",
      },
      {
        icon: "fa-solid fa-bullhorn",
        text: "Annoucements",
        url: "annoucements",
      },
    ],
  },
  {
    icon: "fa-solid fa-wallet",
    title:"Wallet",
    inside: [
      {
        icon: "fa-solid fa-money-bill-transfer",
        text: "My Wallet",
        url: "my-wallet",
      }
    ],
  },
];


export const footerData = {
  newsletter: {
    heading: "Want us to email you with the latest teaching tips and updates?",
    placeholder: "support@yourinstructorapp.com",
    subscribeButton: "Subscribe"
  },
  sections: [
    {
      title: "Services",
      links: ["Course Creation", "Student Management", "Grading & Feedback", "Analytics & Reporting"]
    },
    {
      title: "About",
      links: ["Our Mission", "Team", "Testimonials", "Blog"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Live Chat", "Privacy Policy"]
    }
  ],
  socialMedia: [
    { name: "Facebook", url: "#", icon: "fa-brands fa-facebook" },
    { name: "Instagram", url: "#", icon: "fa-brands fa-instagram" },
    { name: "Twitter", url: "#", icon: "fa-brands fa-twitter" },
    { name: "GitHub", url: "#", icon: "fa-brands fa-github" },
  ],
  footerText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto repudiandae, provident velit earum?",
  footerCredits: "© 2024 Your Instructor App. All rights reserved.",
  footerTech: [
    { name: "NXAONE", url: "https://nxaone.org" },
  ]
};

export let courseCreation = [
  {
    id:1,
    title:"First, let's find out what type of course you're making.",
    message:"Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc."
  },
  {
    id:2,
    title:"Engage, More Users By adding animations.",
    message:"This will Help users to understand the concept in the better way."
  },
  {
    id:3,
    title:"Video and Audio Quality",
    message:"This will help you to grow in our platform."
  }
];

export let chatProfiles = [
  {
    id: 1,
    name: "Gabbar Singh",
    message: "Kitne aadmi the?",
    avatar:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/gabbar1.jpeg",
  },
  {
    id: 2,
    name: "Vasooli Bhai",
    message: "Vasooli time!",
    avatar:
      "https://images.news18.com/ibnkhabar/uploads/2023/08/vasooli-bhai.jpg",
  },
  {
    id: 3,
    name: "Mogambo",
    message: "Mogambo khush hua!",
    avatar:
      "https://image.pixstory.com/optimized/Pixstory-image-168742549432246.png",
  },
  {
    id: 4,
    name: "Raj",
    message:
      "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain.",
    avatar:
      "https://i.pinimg.com/564x/f4/b9/63/f4b963cea70e46cf7cb7f85ec11e5094.jpg",
  },
  {
    id: 5,
    name: "Chulbul Pandey",
    message: "Thappad se dar nahi lagta sahab, pyaar se lagta hai.",
    avatar:
      "https://i.pinimg.com/736x/3e/e5/bc/3ee5bc703fa199a094e1a522be7c5358.jpg",
  },
  {
    id: 7,
    name: "Vijay Dinanath Chauhan",
    message: "Naam Vijay Dinanath Chauhan, baap ka naam Dinanath Chauhan.",
    avatar:
      "https://images.news18.com/ibnlive/uploads/2021/10/agneepath-16338991294x3.jpg?impolicy=website&width=640&height=480",
  },
  {
    id: 8,
    name: "Babu Rao",
    message: "Utha le re deva, utha le.",
    avatar:
      "https://images.hindustantimes.com/img/2021/10/28/550x309/paresh_rawal_baburao_1635389637880_1635389644450.jpg",
  },
  {
    id: 9,
    name: "Circuit",
    message: "Aye Bhai, Tu tension mt le aa tu pdhai pr dhyaan de.",
    avatar:
      "https://i.tribune.com.pk/media/images/WhatsApp-Image-2023-06-14-at-12-44-28-PM1686728787-0/WhatsApp-Image-2023-06-14-at-12-44-28-PM1686728787-0.jpeg",
  },
];

export let feedbackcard = [
  {
    name: "Top Rated Course",
    cards: [
      {
        id: "01",
        img: "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "02",
        img: "https://img-c.udemycdn.com/course/240x135/756150_c033_4.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "03",
        img: "https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "04",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "05",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
    ],
  },
  {
    name: "Other Course",
    cards: [
      {
        id: "01",
        img: "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "02",
        img: "https://img-c.udemycdn.com/course/240x135/756150_c033_4.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "03",
        img: "https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "04",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "05",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
    ],
  },
];

export const getRoute = [
  {
    location:"marketing",
    name:"Recent Purchase"
  },
  {
    location:"recent-purchase",
    name:"Recent Perchase",
  },
  {
    location:"user-notification",
    name:"Notifications"
  },
  {
    location:"hourly-sales",
    name:"Hourly Sales"
  },
  {
    location:"my-wallet",
    name:"Transactions"
  }
];

export let pendingCourse = [
  {
    id:1,
    name: "Please wait until Team will Review your Videos.",
    cards: [
      {
        id: "01",
        img: "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "02",
        img: "https://img-c.udemycdn.com/course/240x135/756150_c033_4.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "03",
        img: "https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "04",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
      {
        id: "05",
        img: "https://img-c.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
        title: "The Ultimate React.js Course 2024 : React, Redux, Next.js",
        rating: "4.7",
        star: "⭐⭐⭐⭐",
        totalReview: "234",
        Price: "499",
        Rank: "9",
      },
    ],
  },
];

export let dateCards = [
  {
    text: "Coffeetalk",
    earn: "1,432",
    percent: "3",
    color: "border-violet-500",
  },
  {
    text: "Low n slow",
    earn: "2,124",
    percent: "5",
    color: "border-red-500",
  },
  {
    text: "Cold 'n brew",
    earn: "9,692",
    percent: "12",
    color: "border-yellow-500",
  },
  {
    text: "Eplus space",
    earn: "0,902",
    percent: "1",
    color: "border-lime-500",
  },
  {
    text: "Sinergy space",
    earn: "6,431",
    percent: "9",
    color: "border-lime-400",
  },
];
export let topSellingAndGrossingItems = [
  {
    title: "Top selling items",
    items: [
      {
        img: pl,
        text: "Javanese Salad with Peanut Sauce and Ice Tea",
        money: "$ 2.302,00",
        percentage: "-0,5%",
        color: "#52B6DF",
      },
      {
        img: pl1,
        text: "Sirloin Steak Well Done with Barbeque Sauce",
        money: "$ 2.302,00",
        percentage: "+2,5%",
        color: "text-lime-500",
      },
      {
        img: pl2,
        text: "Chicken Crispy with Sauce Sambal ABC",
        money: "$ 2.302,00",
        percentage: "-0,5%",
        color: "#52B6DF",
      },
    ],
  },
  {
    title: "Top grossing items",
    items: [
      {
        img: pl3,
        text: "Sirloin Steak Well Done with Barbeque Sauce",
        money: "$ 2.302,00",
        percentage: "+2,5%",
        color: "text-lime-500",
      },
      {
        img: pl4,
        text: "Javanese Salad with Peanut Sauce and Ice Tea",
        money: "$ 2.302,00",
        percentage: "-0,5%",
        color: "text-lime-500",
      },
      {
        img: pl5,
        text: "Chicken Crispy with Sauce Sambal ABC",
        money: "$ 2.302,00",
        percentage: "-0,5%",
        color: "#52B6DF",
      },
    ],
  },
];
export let dateStaff = [
  {
    name: "Nirmala Azalea",
    img: Oval1,
    percent: "Java the Ultimate Beginner Course",
    color: "text-custom-blue",
    money: "$112",
  },
  {
    name: "Bena Kane",
    img: Oval2,
    percent: "Python the Ultimate Beginner Course",
    color: "text-custom-blue",
    money: "$294",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "React the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$2,009",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Java the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$1,089",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "React the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$2,009",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Java the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$1,089",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "React the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$2,009",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Java the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$1,089",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "React the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$2,009",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Java the Ultimate Beginner Course",
    color: "text-lime-500",
    money: "$1,089",
  },
];

export let payment = [
  {
    name: "NxaOne",
    img: Oval1,
    color: "text-completed",
    money: "$1,912",
    status: "Completed"
  },
  {
    name: "NxaOne",
    img: Oval2,
    color: "text-in-progress",
    money: "$294",
    status: "In Progress"
  },
  {
    name: "NxaOne",
    img: Oval3,
    color: "text-cancelled",
    money: "$2,009",
    status: "Cancelled"
  },
  {
    name: "NxaOne",
    img: Oval4,
    color: "text-completed",
    money: "$1,089",
    status: "Completed"
  },
];

export let notification = [
  {
    name: "Nirmala Azalea",
    img: Oval1,
    percent: "Just Comment on Your Java Course",
    color: "text-custom-blue",
    money: "1 hour Ago",
  },
  {
    name: "Bena Kane",
    img: Oval2,
    percent: "Just Purchased your Course",
    color: "text-custom-blue",
    money: "1 hour Ago",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "Just given feedback to your course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "Just Now",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "2 min Ago",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
  {
    name: "Firmino Kudo",
    img: Oval3,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
  {
    name: "Beby Jovancy",
    img: Oval4,
    percent: "Just Comment on Your Java Course",
    color: "text-lime-500",
    money: "1 hour Ago",
  },
];

export let dataPie = [
  {
    x: "Maths",
    y: 685,
  },
  {
    x: "Physics",
    y: 878,
  },
  {
    x: "Java",
    y: 608,
  },
  {
    x: "Python",
    y: 787,
  },
  {
    x: "C++",
    y: 368,
  },
];
export let dataColumn = [
  {
    x: "Jan-Feb",
    y: 685,
    color: "#FF736A",
  },
  {
    x: "Mar-Apr",
    y: 878,
    color: "#FECF24",
  },
  {
    x: "May-June",
    y: 608,
    color: "#73CB50",
  },
  {
    x: "July-Aug",
    y: 787,
    color: "#B1E71D",
  },
  {
    x: "Sep-Oct",
    y: 368,
    color: "#8569F6",
  },
  {
    x: "Nov-Dec",
    y: 368,
    color: "#8569F6",
  },
];

export const dataLine = [
  [
    { x: " ", y: 292, color: "#FECF24" },
    { x: "Mon, 20", y: 335, color: "#FECF24" },
    { x: "Tue, 21", y: 414, color: "#FECF24" },
    { x: "Wed, 22", y: 365, color: "#FECF24" },
    { x: "Thu, 23", y: 343, color: "#FECF24" },
    { x: "Fri, 24", y: 357, color: "#FECF24" },
    { x: "Sat, 25", y: 213, color: "#FECF24" },
    { x: "Sun, 26", y: 400, color: "#FECF24" },
    { x: "Mon, 27", y: 381, color: "#FECF24" },
    { x: "Tue, 28", y: 404, color: "#FECF24" },
  ],
  [
    { x: " ", y: 274, color: "#B1E71D" },
    { x: "Mon, 20", y: 304, color: "#B1E71D" },
    { x: "Tue, 21", y: 401, color: "#B1E71D" },
    { x: "Wed, 22", y: 352, color: "#B1E71D" },
    { x: "Thu, 23", y: 436, color: "#B1E71D" },
    { x: "Fri, 24", y: 404, color: "#B1E71D" },
    { x: "Sat, 25", y: 446, color: "#B1E71D" },
    { x: "Sun, 26", y: 298, color: "#B1E71D" },
    { x: "Mon, 27", y: 293, color: "#B1E71D" },
    { x: "Tue, 28", y: 307, color: "#B1E71D" },
  ],
  [
    { x: " ", y: 265, color: "#FF736A" },
    { x: "Mon, 20", y: 281, color: "#FF736A" },
    { x: "Tue, 21", y: 292, color: "#FF736A" },
    { x: "Wed, 22", y: 341, color: "#FF736A" },
    { x: "Thu, 23", y: 338, color: "#FF736A" },
    { x: "Fri, 24", y: 314, color: "#FF736A" },
    { x: "Sat, 25", y: 327, color: "#FF736A" },
    { x: "Sun, 26", y: 423, color: "#FF736A" },
    { x: "Mon, 27", y: 415, color: "#FF736A" },
    { x: "Tue, 28", y: 407, color: "#FF736A" },
  ],
  [
    { x: " ", y: 241, color: "#73CB50" },
    { x: "Mon, 20", y: 274, color: "#73CB50" },
    { x: "Tue, 21", y: 284, color: "#73CB50" },
    { x: "Wed, 22", y: 271, color: "#73CB50" },
    { x: "Thu, 23", y: 316, color: "#73CB50" },
    { x: "Fri, 24", y: 294, color: "#73CB50" },
    { x: "Sat, 25", y: 296, color: "#73CB50" },
    { x: "Sun, 26", y: 378, color: "#73CB50" },
    { x: "Mon, 27", y: 438, color: "#73CB50" },
    { x: "Tue, 28", y: 407, color: "#73CB50" },
  ],
  [
    { x: " ", y: 178, color: "#8569F6" },
    { x: "Mon, 20", y: 198, color: "#8569F6" },
    { x: "Tue, 21", y: 249, color: "#8569F6" },
    { x: "Wed, 22", y: 310, color: "#8569F6" },
    { x: "Thu, 23", y: 283, color: "#8569F6" },
    { x: "Fri, 24", y: 297, color: "#8569F6" },
    { x: "Sat, 25", y: 186, color: "#8569F6" },
    { x: "Sun, 26", y: 316, color: "#8569F6" },
    { x: "Mon, 27", y: 389, color: "#8569F6" },
    { x: "Tue, 28", y: 397, color: "#8569F6" },
  ],
];

export let dataBar = [
  {
    x: "1-2AM",
    hours: 3230,
    color: "red",
  },
  {
    x: "2-3AM",
    hours: 2230,
    color: "red",
  },
  {
    x: "3-4AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "4-5AM",
    hours: 1230,
    color: "red",
  },
  {
    x: "5-6AM",
    hours: 2230,
    color: "red",
  },
  {
    x: "6-7AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "7-8AM",
    hours: 3230,
    color: "red",
  },
  {
    x: "8-9AM",
    hours: 4230,
    color: "red",
  },
  {
    x: "9-10AM",
    hours: 1630,
    color: "red",
  },
  {
    x: "10-11AM",
    hours: 1980,
    color: "red",
  },
];

export let dateOptions = [
  {
    country: "China",
    cities: [
      {
        city: "Pekin",
      },
      {
        city: "Shanxay",
      },
      {
        city: "Lanzhou",
      },
      {
        city: "Uxan",
      },
    ],
  },
  {
    country: "Uzbekistan",
    cities: [
      {
        city: "Tashkent",
      },
      {
        city: "Fergana",
      },
      {
        city: "Samarkand",
      },
      {
        city: "Qashqadaryo",
      },
    ],
  },
  {
    country: "England",
    cities: [
      {
        city: "London",
      },
      {
        city: "Tottenham",
      },
    ],
  },
  {
    country: "USA",
    cities: [
      {
        city: "Washington",
      },
      {
        city: "New York",
      },
      {
        city: "Los Angeles",
      },
      {
        city: "Cansas",
      },
      {
        city: "Atlanta",
      },
    ],
  },
  {
    country: "Russian",
    cities: [
      {
        city: "Moscow",
      },
    ],
  },
];

export let cards = [
  {
    id:"monthly-sale",
    text: "Monthly Sale",
    icon: "fa-solid fa-money-check",
    iconColor: "text-neutral-500",
    money: "$342",
    percent: "4.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    id:"total-sale",
    text: "Total Sale",
    icon: "fa-solid fa-money-check",
    iconColor: "text-neutral-500",
    money: "$1,290",
    percent: "2.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    id:"avg-sale",
    text: "Avg Sale",
    icon: "fa-solid fa-money-check",
    iconColor: "text-neutral-500",
    money: "$1,940",
    percent: "4.0%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
];



export let multilocation = [
  {
    country: "China",
    cities: [
      {
        city: "Pekin",
        multilocation: [
          "Kroger",
          "Towne Oaks",
          "Groveland",
          "Groveland Chapels",
        ],
      },
      {
        city: "Shanxay",
        multilocation: [
          "Deer Creek",
          "View details",
          "Mayfair",
          "Goodfield",
          "Carlock",
          "Congerville",
        ],
      },
      {
        city: "Lanzhou",
        multilocation: ["Tianshui", "Baoji"],
      },
      {
        city: "Uxan",
        multilocation: ["Eureka", "Cruger", "Metamora", "Roanoke", "Panola"],
      },
    ],
  },
  {
    country: "Uzbekistan",
    cities: [
      {
        city: "Tashkent",
        multilocation: [
          "Sergeli",
          "Marsim Gorkiy",
          "Yunisobod",
          "Mirzo Ulugbek",
          "Chilonzor",
        ],
      },
      {
        city: "Fergana",
        multilocation: ["Koson", "Qoqon", "Margilan"],
      },
      {
        city: "Samarkand",
        multilocation: ["Samarkand", "Oltinsoy"],
      },
      {
        city: "Surxondaryo",
        multilocation: ["Termiz", "Denov"],
      },
      {
        city: "Qashqadaryo",
        multilocation: [
          "Qarshi",
          "Chirakchi",
          "Shaxrisabz",
          "Kitob",
          "Yakkabog",
        ],
      },
    ],
  },
  {
    country: "England",
    cities: [
      {
        city: "London",
        multilocation: ["London City", "Oxford", "Manchester"],
      },
      {
        city: "Tottenham",
        multilocation: ["Redstone", "Yellowrock", "Mayfair 12", "Goodfield"],
      },
    ],
  },
  {
    country: "USA",
    cities: [
      {
        city: "Washington",
        multilocation: [
          "Kroger",
          "Towne Oaks",
          "Groveland",
          "Groveland Chapels",
        ],
      },
      {
        city: "New York",
        multilocation: [
          "Brockleen Bringe",
          "Coma",
          "Arezona",
          "Mottemham",
          "Carlson Street",
          "Congerville",
          "Phoenix",
        ],
      },
      {
        city: "Los Angeles",
        multilocation: ["Silicon Valley", "Beach"],
      },
      {
        city: "San Francisco",
        multilocation: [
          "San Jose",
          "San Diego",
          "Phoenix",
          "Colarado",
          "Panola",
        ],
      },
      {
        city: "Cansas",
        multilocation: ["Wichita", "SpringField"],
      },
      {
        city: "Atlanta",
        multilocation: ["New Orlean", "Bioloxi", "Orlandp", "Tampa", "Panola"],
      },
    ],
  },
  {
    country: "Russian",
    cities: [
      {
        city: "Moscow",
        multilocation: [
          "Odintsovo",
          "Lesnoy Gorodok",
          "Borodki",
          "Pykhtino",
          "Lyubertsy",
          "Khimki",
          "Zelenograd",
        ],
      },
    ],
  },
];
export let time = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];
