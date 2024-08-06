import { Route, Routes } from "react-router-dom";
import Main from "./components/admin-main/main";
import Layout from "./layout/Layout";
import { loginRoutes, routes } from "./routes";
import Footer from "../src/components/admin-footer/Footer"
import SignupLayout from "./layout/SignupLayout";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Main />
          </Layout>
        }
      />
      {
        loginRoutes?.map((i) => {
          return (
            <Route key={i.id} path={i.path} element = {<div><SignupLayout>{i.name}</SignupLayout><Footer/></div>}/>
          );
        })
      }
      {routes?.map((i) => {
        return (
          <Route key={i.id} path={i.path} element={<Layout>{i.name}</Layout>} />
        );
      })}
    </Routes>
  );
}

export default App;
