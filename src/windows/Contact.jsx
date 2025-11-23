import { WindowControls } from "#/components"
import { socials } from "#/constants"
import WindowWrapper from "#/hoc/WindowWrapper"

const Contact = () => {
    return (
        <>
            <div className="p-3">
                <div className="window-header">
                    <WindowControls target="contact" />
                    <p className="pt-3">Just wanna talk? ... I'm in</p>
                </div>

                <div className="p-5 space-y-5">
                    <img
                        src="/images/vishnu1.jpg"
                        alt="Vishnu"
                        className="w-20 rounded-full"
                    />
                    <h2>Contact Me</h2>
                    <p>Just wanna talk? ... I'm in</p>
                </div>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>


            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;

// export