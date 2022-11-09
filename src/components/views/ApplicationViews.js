import { PatronViews } from "./PatronViews"
import { StaffViews } from "./StaffViews"

export const ApplicationViews = () => {

    const localProjectUser = localStorage.getItem("daemon_user")
    const projectUserObject = JSON.parse(localProjectUser)
  
    if(projectUserObject.staff){
      return <StaffViews />
    } else {
      return <PatronViews />
    }
  }
};
