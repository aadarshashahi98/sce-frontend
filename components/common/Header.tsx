export const nav = ["Home", "About Us", "Services", "Projects", "Contact Us"];

export function Header() {
    return (
        <header className="w-full h-screen">
            <div className="flex justify-between items-start w-full h-full bg-linear-to-b from-[#0B1F4F] from-0% via-[#0B1F4F]/0.56 via-19% to-[#0B1F4F]/0.56 to-100%">
                <div className="flex items-center">
                    <div className="w-25 h-25 mt-5 ml-5">
                        <img className="w-full h-full object-cover" src="/assets/seclogo.png" alt="Satipipal Contracting and Electrical W.L.L. Logo"/>
                    </div>
                    <div className="flex flex-col justify-center mt-2 text-sm">
                        <span className="font-bold text-[#529FE3]">Satipipal Contracting and Electrical W.L.L.</span>
                        <span className="text-xs font-semibold text-[#FE9A22]">ساتيبال للمقاولات والكهربائية ذ.م.م</span>
                    </div>
                </div>
                <nav className="mt-12 mr-5">
                    <ul className="flex items-center space-x-10 font-semibold text-white text-sm">
                        {nav.map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}