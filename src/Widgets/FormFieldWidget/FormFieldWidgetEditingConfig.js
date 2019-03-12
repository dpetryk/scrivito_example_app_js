import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("FormFieldWidget", {
    title: "Form Field",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
        },
        label: {
            title: "Label"
        },
        type: {
            title: "Type",
            values: [
                { value: "text", title: "Text" },
                { value: "checkbox", title: "Checkbox" },
                { value: "radio", title: "Radio" },
                { value: "select", title: "Select" },
                { value: "date", title: "Date" },
                { value: "email", title: "Email" },
                { value: "password", title: "Password" },
            ]
        },
        required: {
            title: "Required",
            values: [
                { value: "yes", title: "Yes" },
                { value: "no", title: "No" }
            ]
        },
        placeholder: {
            title: "Placeholder"
        },
    },
    properties: ["name", "label", "type", "required", "placeholder"],
    initialContent: {
        required: "no",
        type: "text",
    },
});
