import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("FormFieldCheckboxWidget", {
    title: "Form Field - Checkbox",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
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
        label: "Checkbox",
    },
});
