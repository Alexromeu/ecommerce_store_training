import { Link } from 'react-router-dom'

type MenuItem = {
    label: string;
    path: string;
};

export default function Header() {
  const menuItems: MenuItem[] = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products'},
    {label: 'cart', path: '/cart'}
  ]

    return (
        <header>
            <nav>
                <ul>
                    {
                     menuItems.map((item) => (
                        <li>
                          <Link to={item.path}className="hover:text-blue-600 transition-colors">{item.label}</Link>
                        </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}