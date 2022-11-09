import { Outlet, Routes, Route } from "react-router-dom"
import { ContentList } from "../content/ContentList"

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
      </Routes>
   )	
}