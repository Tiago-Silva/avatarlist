'use client';

import {Avatar, AvatarBorderVariants, AvatarVariants} from "@/components/ui/avatar";
import {generateUsers} from "@/lib/data";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";

const users = generateUsers(70);

export default function Home() {
    const [size, setSize] = useState<AvatarVariants["size"]>("default");
    const [border, setBorder] = useState<AvatarBorderVariants["border"]>("default");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 bg-purple-900 pt-24">
        <div className="my-24 flex gap-12 w-full">
            <Select onValueChange={(size) => setSize(size as AvatarVariants["size"])}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                    <SelectItem value="big">Big</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(border) => setBorder(border as AvatarBorderVariants["border"])}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Border" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="w-full flex flex-wrap [&>div]:-ml-4 ml-4 [&>div]:mt-4 -mt-4">
            {users.map((user, index) => (
                <Avatar
                    key={index}
                    imgUrl={user.imgUrl}
                    userName={user.userName}
                    fallbackText={user.fallbackText}
                    size={size}
                    border={border}
                />
            ))};
        </div>
    </main>
  );
}
