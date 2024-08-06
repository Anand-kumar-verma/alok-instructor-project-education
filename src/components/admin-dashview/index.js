import Sidebar from "../admin-sidebar/sidebar";
import Feedback from "../../components/admin-feedback/feedback";
import AddCourse from "../../components/add-course/addCourse";
import { Suspense, useContext, useEffect, useState } from "react";
import Main from "../../components/admin-main/main";
import { Context } from "../../context/index";
import Marketing from "../../components/admin-marketing/marketing";
import Comments from "../admin-comments/comments";
import Chat from "../admin-chat/chat";
import ChatScreen from "../users-chat/chat";

export default function Index(props) {
  const Components = {
    "marketing": Marketing,
    "feedback": Feedback,
    "add-course": AddCourse,
    "allcourses": Feedback,
    "dashboard": Main,
    "comments": Comments,
    "pending-in-review": Feedback,
    "qna": Comments,
    "message": ChatScreen,
    "annoucements": Chat
  };

  let { state, dispatch } = useContext(Context);
  let [size, setSize] = useState(1000);
  window.addEventListener("resize", (e) => {
    setSize(e.currentTarget.innerWidth);
  });
  useEffect(() => {
    size < 768
      ? dispatch({ type: "SET_TOGGLE_NAVBAR", payload: false })
      : dispatch({ type: "SET_TOGGLE_NAVBAR", payload: true });
  }, [size]);

  const creatingComponents = (attributes) => {
    const DynamicComponent = Components[props.name];
    // component does exist
    if (typeof DynamicComponent !== "undefined") {
      return <DynamicComponent {...attributes} />;
    }
  };

  const DynamicComponent = ({ attributes }) => {
    return (
      <Suspense fallback={<p>loading...</p>}>
        {creatingComponents(attributes)}
      </Suspense>
    );
  };

  return (
    <div className="w-full">
      <div className="flex h-full w-full">
        {/* <Sidebar className="sticky " /> */}
        <div
          className={`main ${
            state.toggle
              ? ` ${state.toggleNavbar ? "md:ml-[0px]" : "ml-0"}`
              : ` ${state.toggleNavbar ? "md:ml-[90px]" : "ml-0"}`
          } overflow-auto w-full h-full z-10`}
        >
          <DynamicComponent attributes={props} />
        </div>
      </div>
    </div>
  );
}
