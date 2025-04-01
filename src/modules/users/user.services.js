import { generateMocks } from "../../mock/user.mock.js";
import { userDao } from "./user.dao.js";

class UserService{
  async createUsersMocks(amount){
    const users = generateMocks(amount);

    await userDao.removeAll();

    for( const user of users) {
      await userDao.create(user);
    }

    return users;
  }


}

export const userService = new UserService();