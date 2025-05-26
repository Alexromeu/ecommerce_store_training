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
            <nav className="list_header_container">
                <ul className="list_header">
                    {
                     menuItems.map((item) => (
                        <li>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}