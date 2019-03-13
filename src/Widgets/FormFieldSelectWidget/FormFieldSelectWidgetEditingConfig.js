import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("FormFieldSelectWidget", {
    title: "Form Field - Select",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
        },
        label: {
            title: "Label"
        },
        options: {
            title: "Options",
            description: "Provide selectable options separated by coma"
        },
        values: {
            title: "Values",
            description: "Values assigned to options. If not specified, options will be treated as values"
        },
        required: {
            title: "Required",
            values: [
                { value: "true", title: "Yes" },
                { value: "false", title: "No" }
            ]
        },
    },
    properties: ["name", "label", "options", "values", "required"],
    initialContent: {
        required: "false",
        type: "text",
        label: "Input field",
        options: "Option 1, Options 2, Options 3, ..."
    },
});
