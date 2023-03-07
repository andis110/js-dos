import { useSelector } from "react-redux";
import { State } from "../store";
import { AccountFrame } from "./account-frame";
import { EditorConf } from "./editor/editor-conf-frame";
import { EditorFsFrame } from "./editor/editor-fs-frame";
import { SettingsFrame } from "./settings-frame";

export function Frame(props: {}) {
    const frame = useSelector((state: State) => state.ui.frame);
    const wideScreen = useSelector((state: State) => state.ui.wideScreen);
    if (frame === "none") {
        return null;
    }

    return <div class={"frame " + frame + "-frame" + (wideScreen ? "" : " frame-md")}>
        { frame === "account" && <AccountFrame /> }
        { frame === "output" && <SettingsFrame /> }
        { frame === "editor-conf" && <EditorConf /> }
        { frame === "editor-fs" && <EditorFsFrame />}
    </div>;
};
