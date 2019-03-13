import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("FormFieldRadioWidget", {
    title: "Form Field - Radio",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name",
            description: "Provide same name among radio buttons to treat them as a group"
        },
        label: {
            title: "Label"
        },
        required: {
            title: "Required",
            values: [
                { value: "true", title: "Yes" },
                { value: "false", title: "No" }
            ]
        },
        value: {
            title: "Value",
            description: "Value passed when checkbox is ticked"
        }
    },
    properties: ["name", "label", "required", "value"],
    initialContent: {
        required: "false",
        label: "Radio",
    },
});
