import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ProfileSettings() {
  return (
    <Card className="ghost-border rounded-2xl shadow-sm">
      <CardHeader className="p-6 md:p-8">
        <CardTitle className="text-primary font-heading text-xl font-bold">
          Personal Information
        </CardTitle>
        <CardDescription>Update your photo and personal details here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6 pt-0 md:p-8">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row">
          <div className="group relative">
            <img
              alt="Profile"
              className="border-muted h-24 w-24 rounded-2xl border-4 object-cover shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf47CKPpukVLWloBYWX8U4KDY5UOjKDg-z1dUdL2QJKwvuEosPw-_UPHxSoW3G8OCjJrWr2YagHPCy2luV2KVR08uIM7z9BpuP2ErrcpBUHNMIg3UpHNMfTGUCWzglr6G1WgCHBqhujGRFmC5bd2jDGtzE66IoQOH7Tbu6ESO2IFheO7IjHJXNuDXOwtML-azbUbguvQ8z8cb3_wizatiSByo_EEzspNK7wG6FoNTf0XkDVjKup2uaVVNTJYjtg1CcIU5ANfVxcVHo"
              referrerPolicy="no-referrer"
            />
            <div className="bg-primary/40 absolute inset-0 flex cursor-pointer items-center justify-center rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                Change
              </span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-primary mb-1 font-bold">Mark Thompson</h4>
            <p className="text-muted-foreground text-xs">Principal, MT Plumbing Services</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-primary text-xs font-bold tracking-wider uppercase">
              Full Name
            </label>
            <Input
              className="bg-muted focus:border-primary/20 h-12 rounded-xl border-transparent transition-all focus:bg-white"
              defaultValue="Mark Thompson"
            />
          </div>
          <div className="space-y-2">
            <label className="text-primary text-xs font-bold tracking-wider uppercase">
              Email Address
            </label>
            <Input
              className="bg-muted focus:border-primary/20 h-12 rounded-xl border-transparent transition-all focus:bg-white"
              defaultValue="mark@mtplumbing.com"
            />
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="flex flex-col justify-end gap-4 md:flex-row">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary h-auto py-6 text-sm font-bold"
          >
            Cancel
          </Button>
          <Button className="bg-primary h-auto rounded-xl px-10 py-6 text-base font-bold text-white shadow-lg transition-all hover:opacity-90">
            <Save className="mr-2 h-5 w-5" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
