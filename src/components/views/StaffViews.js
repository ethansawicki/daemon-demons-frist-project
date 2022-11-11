import { Outlet, Routes, Route } from "react-router-dom";
import { ContentForm } from "../content/ContentForm";
import { ContentList } from "../content/ContentList";
import { ContentPage } from "../content/ContentPage";
import { ContentCreationForm } from "../staff/ContentCreationForm";

export const StaffViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>The Frist Art Museum</h1>

            <Outlet />
          </>
        }
      ></Route>

      <Route path="exhibits" element={<ContentList />}></Route>
      <Route path="exhibits/:contentId" element={<ContentPage />}></Route>
      <Route
        path="exhibits/exhibitcreation"
        element={<ContentCreationForm />}
      ></Route>
      <Route path="/exihibit/edit/:contentId" element={<ContentForm />}></Route>
    </Routes>
  );
};
