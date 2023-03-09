import React from "react";

export default class ClassComponent extends React.Component<{}, {}> {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };

  handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log("Coppied");
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onCopy={this.handleCopy}
          name="email"
          onFocus={this.handleFocus}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}
