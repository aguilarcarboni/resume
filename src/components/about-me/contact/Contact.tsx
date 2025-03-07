'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants } from "@/lib/anims";
import { personalLinks } from "@/lib/resume/links";

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      className="container mx-auto flex justify-center items-center" 
    >
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="justify-center items-center flex flex-col gap-4">
          {personalLinks.map((item, index) => (
            <Button key={index} variant="ghost" className="gap-2 w-fit h-fit flex" asChild>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{item.username}</span>
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
