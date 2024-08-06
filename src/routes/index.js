import Courses from "../components/add-course/addCourse";
import Chat from "../components/admin-chat/chat";
import Comments from "../components/admin-comments/comments";
import Feedback from "../components/admin-feedback/feedback";
import Main from "../components/admin-main/main";
import Marketing from "../components/admin-marketing/marketing";
import {pendingCourse} from "../../src/dates/jummy";
import { feedbackcard as feedbackData } from "../dates/jummy";
import ChatScreen from "../components/users-chat/chat";
import { dateStaff } from '../../src/dates/jummy'
import Staff from "../components/staff-report/staff";
import {notification} from "../../src/dates/jummy";
import { WithdrawAmount } from "../components/admin-withdrawal/withdrawAmount";
import { SignUp } from "../components/admin-SignUp/sinup";
import Login from "../components/Login/Login";
import CourseCreation from "../components/course-creation/courseCreation";
import { NewCourse } from "../components/new-course/newCourse";
import { UploadVideo } from "../components/upload-video/uploadVideo";

export const routes = [
  {
    id: 1,
    name: <Main />,
    path: "/admin-dashboard/dashboard",
  },
  {
    id: 2,
    name: <Marketing />,
    path: "/admin-dashboard/marketing",
  },
  {
    id: 3,
    name: <Feedback heading="Feedback" route ="feedback" data={feedbackData}/>,
    path: "/admin-dashboard/feedback",
  },
  {
    id: 4,
    name: <Courses />,
    path: "/admin-dashboard/add-course",
  },
  {
    id: 5,
    name: <Feedback heading="All Courses" route="allcourses" data={feedbackData}/>,
    path: "/admin-dashboard/allcourses",
  },
  {
    id: 6,
    name: <Feedback heading="Pending in Review" route="pending-in-review" data={pendingCourse}/>,
    path: "/admin-dashboard/pending-in-review",
  },
  {
    id: 7,
    name: <Comments />,
    path: "/admin-dashboard/qna",
  },
  {
    id: 8,
    name: <ChatScreen />,
    path: "/admin-dashboard/message",
  },
  {
    id: 9,
    name: <Chat />,
    path: "/admin-dashboard/annoucements",
  },
  {
    id:10,
    name: <Comments/>,
    path: "/admin-dashboard/feedback/:id"
  },
  {
    id:11,
    name: <Chat/>,
    path:"/admin-dashboard/messages/:id"
  },
  {
    id:12,
    name: <Staff data={dateStaff} numberItems={dateStaff.length}/>,
    path:"/admin-dashboard/recent-purchase"
  },
  {
    id:13,
    name: <Staff data={dateStaff} numberItems={dateStaff.length}/>,
    path:"/admin-dashboard/dashboard/sale/:id"
  },
  {
    id:14,
    name:<Staff data={dateStaff} numberItems={dateStaff.length}/>,
    path:"/admin-dashboard/dashboard/hourly-sales"
  },
  {
    id:15,
    name:<Staff data={notification} numberItems={notification.length}/>,
    path:"/user-notification"
  },
  {
    id:16,
    name:<WithdrawAmount/>,
    path:"/admin-dashboard/my-wallet"
  },
  {
    id:17,
    name:<CourseCreation/>,
    path:"/admin-dashboard/course-creation/:id"
  },
  {
    id:18,
    name:<NewCourse/>,
    path:"admin-dashboard/course-creation/new-course-details"
  },
  {
    id:19,
    name:<UploadVideo/>,
    path:"/http://localhost:3000/admin-dashboard/course-creation/new-course-details/video"
  }
];

export const loginRoutes = [
  {
    id: 1,
    name: <SignUp/>,
    path: "/Signup"
  },
  {
    id: 2,
    name: <Login/>,
    path: "/login"
  }
];
  
