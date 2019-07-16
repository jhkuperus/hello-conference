import { UUID } from 'angular2-uuid'

class User {
  public readonly id: number

  constructor(
    public readonly uuid: string,
    public readonly name: string,
    public readonly password: string,
    public readonly birthDate: number = 0
  ) {}
}

interface IUserService {

  getUser(userId: string): User

  addUser(newUser: User): string

  findUserByName(name: string): User

  changeUserName(userId: string, newName: string): User

  changeUserPassword(userId: string, newPassword: string): User

}

class UserService implements IUserService {

  private users: User[] = []

  getUser(userId: string): User {
    return this.users.find(u => u.uuid === userId)
  }

  addUser(newUser: User): string {
    const actualNewUser = new User(UUID.UUID().toString(), newUser.name, newUser.password, newUser.birthDate)

    this.users.push(actualNewUser)

    return actualNewUser.uuid
  }

  findUserByName(name: string): User {
    return this.users.find(u => u.name === name)
  }

  changeUserName(userId: string, newName: string): User {
    const user = this.getUser(userId)
    const changedUser = new User(user.uuid, user.name, user.password, user.birthDate)

    this.users.splice(this.users.findIndex(u => u.uuid === userId), 1, changedUser)

    return changedUser
  }

  changeUserPassword(userId: string, newPassword: string): User {
    const user = this.getUser(userId)
    const changedUser = new User(user.uuid, user.name, user.password, user.birthDate)

    this.users.splice(this.users.findIndex(u => u.uuid === userId), 1, changedUser)

    return changedUser
  }
}

// Demo Users
const user1 = new User('', 'User1', '')
const user2 = new User('bcad18cb-9297-4de0-8c57-d54436b208ee', 'User2', '04dce407820855f66d8e9278fe89013ccea4cb11cb1adf1c0bd8c8d9752575c60a2dc877cac51fcff4f1d24b14af0677757c29774538c712afda75ebcf8a0232')
const user3 = new User('a7a0cd56-f459-499a-aed3-072bb9b0bd9b', 'User3', 'c7913af1b4cdb40db9b9ee3ac53fe276b4888c507845ffed867a2638b9ee8d06fac7e2aad620f05b784e468cb102c77f0d09afd69fc1473086635b9578081b12')
const user4 = new User('3ee73e68-b735-46ed-8b75-44897f98b38a', 'User4', 'e997fbff34960bb97447ff9182a241747c8f9dd96c5d0476c4f6f4dac3417e67cfb54ff7834d2d10e0e3e1d8a0a19f727c931468fe4a05fd1d195d93f4a34b45')
const user5 = new User('54af9a87-732c-45b6-bfbd-68bf8707c199', 'User5', '7a263d5b4fc17b31dda8576a55b07eeccc3b89b839c169ef20717bd45fdf1f7e0bf9dc98cd358a303255c143827373c735fd61fe4b7c3e3beb71e0ebdaf6495a')

function setupMockUserService(): UserService {

  const svc = new UserService()

  svc.addUser(user1)
  svc.addUser(user2)
  svc.addUser(user3)
  svc.addUser(user4)
  svc.addUser(user5)

  return svc

}


