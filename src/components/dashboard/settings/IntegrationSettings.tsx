"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function IntegrationSettings() {
  const [copied, setCopied] = useState(false);
  const scriptCode = `<script src="https://cdn.contactify.io/v1/curator.js" data-id="YOUR_ID"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    toast.success("Script copied to clipboard", {
      description: "You can now paste this into your website's <head> section.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="ghost-border rounded-2xl shadow-sm">
      <CardHeader className="p-6 md:p-8">
        <CardTitle className="text-primary font-heading text-xl font-bold">Embed Script</CardTitle>
        <CardDescription>
          Copy this code and paste it into the head section of your website.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6 pt-0 md:p-8">
        <div className="group relative overflow-hidden rounded-2xl bg-slate-950 p-6">
          <code className="text-secondary-foreground block pr-12 font-mono text-sm leading-relaxed break-all">
            {scriptCode}
          </code>
          <Button
            onClick={handleCopy}
            className="absolute top-4 right-4 rounded-lg bg-white/10 p-2 text-white transition-all hover:bg-white/20"
          >
            {copied ? <Check className="text-secondary h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="bg-secondary/5 border-secondary/10 flex flex-col items-center gap-4 rounded-xl border p-6 md:flex-row">
          <div className="bg-secondary/10 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
            <ExternalLink className="h-6 w-6" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h5 className="text-primary text-base font-bold">Need help with installation?</h5>
            <p className="text-muted-foreground text-sm">
              Check out our step-by-step guide for WordPress, Shopify, and more.
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-secondary hover:bg-secondary/5 h-auto py-3 text-sm font-bold"
          >
            View Guide
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
