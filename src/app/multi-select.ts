import { IUserService, User } from './column-editing'


/**
 * Action: replace findUserByName with findUsersByFuzzyName
 */
class SomeComponent {

  constructor(private userService: IUserService) {}

  lookupUser(name: string): void {
    this.userService.findUserByName(name)
  }


  doSomethingSpooky(name: string, spookyName: string): void {
    const user = this.userService.findUserByName(name)

    if (user) {
      this.userService.changeUserName(user.uuid, spookyName)
    }
  }

  findVariationsInUserName(name: string): User[] {
    const nameVariations = [name]
    const results = []

    for (let nameVariation of nameVariations) {
      const user = this.userService.findUserByName(nameVariation)

      if (user) {
        results.push(user)
      }
    }

    return results
  }

}
