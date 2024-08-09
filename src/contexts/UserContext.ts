import { createContext } from "react";

type UserType = {
    user: string
    setUser: (c: string) => void
}

const UserContext = createContext<UserType | undefined>({
    user: "",
    setUser: () => {}
});

export default UserContext;