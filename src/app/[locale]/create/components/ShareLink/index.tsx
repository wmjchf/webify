"use client";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import classNames from "classnames";

import styles from "./index.module.scss";

interface IShareLink {}
export const animals = [
  { key: "solana", label: "solana" },
  { key: "ethereum", label: "ethereum" },
  { key: "elephant", label: "Elephant" },
];
export const ShareLink: React.FC<IShareLink> = (props) => {
  const [errors, setErrors] = useState({});
  const onSubmit = (event: any) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));

    if (!data.username) {
      setErrors({ username: "Username is required" });

      return;
    }
  };
  return (
    <Form
      className="w-full max-w-2xl flex flex-col gap-3 py-4"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input label="Link URL" name="url" radius={"md"} isRequired />
      <div className="py-4"></div>
      <Input
        label="Title"
        labelPlacement="outside"
        placeholder="parse title"
        disabled
        isRequired
      />
      <div className="py-1"></div>
      <Select
        className="max-w-xs"
        label="Tags"
        placeholder="Choose Tags"
        selectionMode="multiple"
        labelPlacement={"outside"}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      {/* <div className="flex flex-col">
        <span className="mb-3">Image</span>
        <Image
          alt="NextUI hero Image"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={300}
        />
      </div> */}

      <div className="py-2"></div>
      <Button type="submit" color="danger">
        Share
      </Button>
    </Form>
  );
};
