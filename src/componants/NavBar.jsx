import React from 'react'

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo" />
                <ul>
                    {[
                        { label: 'Store' },
                        { label: 'Mac' },
                        { label: 'iphone' },
                        { label: 'Watch' },
                        { label: 'Vision' },
                        { label: 'Airpods' }
                    ].map((link) => (
                        <li key={link.label}>
                            <a href={link.label}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default NavBar