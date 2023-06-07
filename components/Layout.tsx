

function Layout({ children }: { children: React.ReactNode }) {
    return (<div>
        <nav>
            <ul>
                <li>Home</li>
            </ul>
        </nav>
        {children}
    </div>
    );
};

export default Layout