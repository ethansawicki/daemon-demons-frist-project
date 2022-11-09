import { Outlet, Routes, Route } from "react-router-dom"
import { ContentList } from "../content/ContentList"
import { ContentPage } from "../content/ContentPage"

export const PatronViews = () => {
   return (
      <Routes>
         <Route path="/" element={
            <>
            <h1>The Frist Art Museum</h1>
   
            <Outlet />
            </>
         }></Route>
   
         <Route path="exhibits" element={ <ContentList />}></Route>
         <Route path="exhibits/:contentId" element={ <ContentPage />}></Route>
      </Routes>
   )	
}