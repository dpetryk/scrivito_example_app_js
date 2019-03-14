import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormWidget", ({ widget }) => {
  const classNames = [""];
  const action = widget.get("action");
  const includeBotField = widget.get("includeBotField");

  if (widget.get("backgroundColor") === "transparent") {
    classNames.push("card-white-transparent");
  } else {
    classNames.push("floating-label", "card-theme", "card", "card-padding");
  }

  function BotPreventingField(props) {
    if (includeBotField === "yes") {
      return (
          <div className="d-none">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>
      )
    }
    return null;
  }

  return (
    <div className={classNames.join(" ")}>
      <form action={action} method="post">
      <BotPreventingField />
        <Scrivito.ContentTag
          content={widget}
          attribute="items"
        />
        <button className="btn btn-primary btn-block" type="submit">
          {widget.get("buttonText") || "Submit"}
        </button>
      </form>
    </div>

    // <div className={classNames.join(" ")}>
    //   <form className="row" method="post">
    //     <input type="hidden" name="form-name" value="contact" />
    //     <div className="d-none">
    //       <label>
    //         Don’t fill this out: <input name="bot-field" />
    //       </label>
    //     </div>
    //     <div className="col-sm-6">
    //       <div className="form-group">
    //         <label htmlFor="contactName">Your name</label>
    //         <input
    //           className="form-control form-control-lg"
    //           id="contactName"
    //           name="contactName"
    //           placeholder="Name"
    //           type="text"
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className="col-sm-6">
    //       <div className="form-group">
    //         <label htmlFor="contactFamilyName">Family name</label>
    //         <input
    //           className="form-control form-control-lg"
    //           id="contactFamilyName"
    //           name="contactFamilyName"
    //           placeholder="Family name"
    //           type="text"
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className="col-sm-6">
    //       <div className="form-group">
    //         <label htmlFor="contactEmail">Email address</label>
    //         <input
    //           className="form-control form-control-lg"
    //           id="contactEmail"
    //           name="contactEmail"
    //           placeholder="Email"
    //           type="email"
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className="col-sm-6">
    //       <div className="form-group">
    //         <label htmlFor="contactCompany">Company (optional)</label>
    //         <input
    //           className="form-control form-control-lg"
    //           id="contactCompany"
    //           name="contactCompany"
    //           placeholder="Company"
    //           type="text"
    //         />
    //       </div>
    //     </div>
    //     <div className="col-sm-12">
    //       <div className="form-group">
    //         <label htmlFor="contactMessage">Message</label>
    //         <textarea
    //           className="form-control form-control-lg"
    //           rows="3"
    //           id="contactMessage"
    //           name="contactMessage"
    //           placeholder="Your Message..."
    //           required
    //         />
    //       </div>
    //       {widget.get("agreementText") && (
    //         <div className="form-group form-check">
    //           <input
    //             className="form-check-input"
    //             id="agreementTextCheck"
    //             type="checkbox"
    //             name="contactAgreement"
    //             value={widget.get("agreementText")}
    //             required
    //           />
    //           <label className="form-check-label" htmlFor="agreementTextCheck">
    //             {widget.get("agreementText")}
    //           </label>
    //         </div>
    //       )}
    //       <button className="btn btn-primary btn-block" type="submit">
    //         {widget.get("buttonText") || "send message"}
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
});
