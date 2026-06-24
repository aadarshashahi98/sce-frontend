import { MdMailOutline } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { SlLocationPin } from "react-icons/sl"

const contactInfo = [
    {
        title: "Send a Mail",
        icon: <MdMailOutline />,
        contact: "info@satipipal.com"
    },{
        title: "Make a Call",
        icon: <FiPhone />,
        contact: "+974 7408825"
    },{
        title: "Main Office",
        icon: <SlLocationPin />,
        contact: "Doha, Qatar"
    }
]

const contactForm = [
    {
        type: "text",
        name: "fullname",
        placeholder: "Your Fullname"
    },{
        type: "email",
        name: "email",
        placeholder: "Your Email"
    },{
        type: "text",
        name: "phone",
        placeholder: "Your Phone Number"
    }
]

export function Contact() {
    return (
        <section className="bg-[#F5F5F5] p-20 flex justify-center space-x-20 items-center">
            <div className="space-y-5">
                {contactInfo.map((item, index) =>
                    <div key={index} className="space-y-3 bg-white p-5 w-100 shadow-xl">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="flex items-center gap-4">
                            <i className="text-2xl">{item.icon}</i>
                            <span>{item.contact}</span>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <form className="space-y-5 shadow-xl p-10" action="https://formspree.io/f/xpqgqqnw" method="post">
                    <div>
                        <span>Get In Touch</span>
                        <h2 className="text-2xl font-bold">Any Question?<br/>Write Down And Send Us</h2>
                    </div>
                    { contactForm.map((item, index) =>
                        <div key={index}>
                            <input className="px-4 py-2 border border-[#989898] rounded-lg w-100" type={item.type} name={item.name} placeholder={item.placeholder} />
                        </div>
                    )}
                    <div>
                        <textarea className="px-4 py-2 border border-[#989898] rounded-lg w-100 h-25" name="message" placeholder="Write your message here"></textarea>
                    </div>
                    <div>
                        <button className="bg-[#FE9921] px-4 py-2 rounded-lg w-30" type="submit"><span className="font-semibold text-white">Submit</span></button>
                    </div>
                </form>
            </div>
        </section>
    )
}