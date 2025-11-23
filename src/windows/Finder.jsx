import { Search } from "lucide-react";
import { WindowControls } from "#/components";
import WindowWrapper from "#/hoc/WindowWrapper";
import { locations } from "#/constants";
import useLocationStore from "#/store/location";
import clsx from "clsx";
import useWindowStore from "#/store/window";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        console.log("Opening item:", item); // Debug log

        // Handle PDF files
        if (item.fileType === "pdf") {
            console.log("Opening resume window"); // Debug log
            openWindow("resume");
            return;
        }

        // Handle folders
        if (item.kind === "folder") {
            setActiveLocation(item);
            return;
        }

        // Handle external links (Figma, URLs)
        if (['fig', 'url'].includes(item.fileType) && item.href) {
            window.open(item.href, '_blank');
            return;
        }

        // Handle other file types (txt, img)
        const windowKey = `${item.fileType}file`;
        console.log("Opening window:", windowKey); // Debug log
        openWindow(windowKey, item);
    };

    const renderList = (items) => items.map((item) => (
        <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
                item.id === activeLocation.id ? "active" : "not-active",
            )}
        >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">
                {item.name}
            </p>
        </li>
    ))

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>
                <ul className="content">
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;