import { NavigationLink } from "./navigation.styled";


const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <NavigationLink to={'/'}>Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to={'events'}>Events</NavigationLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation;