import React, { useState} from "react";

const userContext = React.createContext();

function UserProvider({ children }){
    const [user, setUser] = useState(null)
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };
    return <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
}

export { userContext, UserProvider}