import * as Scrivito from "scrivito";
import FormWidgetIcon from "../../assets/images/contact_form_widget.svg";

Scrivito.provideEditingConfig("FormWidget", {
  title: "Form",
  thumbnail: FormWidgetIcon,
  attributes: {
  
    buttonText: {
      title: "Submit button text",
      description: "Default: Submit",
    },
    action: {
      title: "Form action",
      description: "Define action URL",
    },
    backgroundColor: {
      title: "Background color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
    includeBotField: {
      title: "Include hidden bot preventing field",
      description: "Includes hidden field in the from which determines if form is submitted by a bot",
      values: [
        { value: "yes", title: "Yes" },
        { value: "no", title: "No" },
      ],
    }
  },
  properties: ["buttonText", "action", "backgroundColor", "includeBotField"],
  initialContent: {
    buttonText: "send message",
    backgroundColor: "white",
    includeBotField: "yes"
  },
});
