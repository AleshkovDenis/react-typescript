import React, { useState } from "react";

type TitleProps = {
  title: string;
};

const FunctionComponent = ({ title }: TitleProps) => <h1>{title}</h1>;

export default FunctionComponent;
