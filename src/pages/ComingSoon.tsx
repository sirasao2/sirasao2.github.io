
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const ComingSoon = () => {
  return (
    <main className="section">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-typewriter text-4xl mb-4">COMING SOON</h1>
        <p className="font-typewriter text-muted-foreground text-sm mb-8">ZENSAI.IOS</p>
        <Link to="/">
          <Button variant="outline" className="font-typewriter flex items-center gap-2">
            <HomeIcon size={16} />
            HOME
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default ComingSoon;
